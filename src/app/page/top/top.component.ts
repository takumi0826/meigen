import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import {
  filter,
  first,
  map,
  switchMap,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';
import { TopService } from 'src/app/services/top.service';
import { Legends } from 'src/app/types/type';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit, OnDestroy {
  category$ = this.appService.category$.pipe(filter((c) => !!c.length));
  selectCategory$ = this.topService.selectCategory$;
  searchValue$ = this.topService.searchValue$;
  legendItem$ = new BehaviorSubject<Legends>({
    legends: [],
    total: 0,
  });
  loading$ = this.appService.loading$;
  destroy$ = new Subject();
  itemList$ = combineLatest([
    this.legendItem$,
    this.selectCategory$,
    this.searchValue$,
  ]).pipe(
    map(([list, category, search]) => {
      // 人物名とカテゴリーで検索
      if (search && category) {
        const searchList = list.legends.filter((v) => v.name.includes(search));
        return searchList.filter((v) => {
          return v.category.some((c) => c.parent.id === category);
        });
      }
      // 人物名で検索
      if (search && !category) {
        return list.legends.filter((v) => v.name.includes(search));
      }
      // カテゴリーで検索
      if (!search && category) {
        return list.legends.filter((v) => {
          return v.category.some((c) => c.parent.id === category);
        });
      }

      return list.legends;
    })
  );
  isShowMoreButton$ = this.legendItem$.pipe(
    map((v) => v.total - v.legends.length > 0)
  );

  // ページ数
  pageCount = 1;
  // 取得する件数
  limit = 20;
  constructor(private topService: TopService, private appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .getCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe((v) => this.appService.category$.next(v));
    this.appService
      .getLegend({ limit: this.limit })
      .subscribe((v) => this.legendItem$.next(v));
    this.topService.searchValue$.next('');
    this.topService.selectCategory$.next(0);
  }

  ngOnDestroy(): void {
    // this.destroy$.next();
    // this.appService.legendItem$.next({
    //   legends: [],
    //   total: 0,
    // });
  }

  /** 検索処理 */
  onSearch(value: string) {
    if (!value) {
      this.topService.searchValue$.next('');
      return;
    }
    this.topService.searchValue$.next(value);
  }

  /** カテゴリボタン押下 */
  onSelect(selected: number) {
    if (selected === this.topService.selectCategory$.getValue()) {
      this.topService.selectCategory$.next(0);
      return;
    }
    this.topService.selectCategory$.next(selected);
  }

  readMore() {
    const count = this.pageCount + 1;
    this.legendItem$
      .pipe(
        first(),
        switchMap((item) =>
          this.appService
            .getLegend(
              { offset: this.limit * (count - 1), limit: this.limit },
              true
            )
            .pipe(
              map((v) => {
                return {
                  legends: [...item.legends, ...v.legends],
                  total: v.total,
                };
              })
            )
        )
      )
      .subscribe((v) => this.legendItem$.next(v));
    this.pageCount += 1;
  }

  trackCard(index: any) {
    return index;
  }
}
