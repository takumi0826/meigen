import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';
import { TopService } from 'src/app/services/top.service';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  category$ = this.appService.category$.pipe(filter((c) => !!c.length));
  selectCategory$ = this.topService.selectCategory$;
  searchValue$ = this.topService.searchValue$;
  legendItem$ = this.appService.legendItem$.pipe(
    filter((item) => !!item.length)
  );
  itemList$ = combineLatest([
    this.legendItem$,
    this.selectCategory$,
    this.searchValue$,
  ]).pipe(
    map(([list, category, search]) => {
      // 人物名とカテゴリーで検索
      if (search && category) {
        const searchList = list.filter((v) => v.name.includes(search));
        return searchList.filter((v) => {
          return v.category.some((c) => c.parent.id === category);
        });
      }
      // 人物名で検索
      if (search && !category) {
        return list.filter((v) => v.name.includes(search));
      }
      // カテゴリーで検索
      if (!search && category) {
        return list.filter((v) => {
          return v.category.some((c) => c.parent.id === category);
        });
      }

      return list;
    })
  );
  constructor(private topService: TopService, private appService: AppService) {}

  ngOnInit(): void {}

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
    if (!!this.topService.searchValue$.getValue()) {
      this.topService.searchValue$.next('');
    }
    if (selected === this.selectCategory$.getValue()) {
      this.topService.selectCategory$.next(0);
      return;
    }
    this.topService.selectCategory$.next(selected);
  }

  trackCard(index: any) {
    return index;
  }
}
