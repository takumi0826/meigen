import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { TopService } from 'src/app/services/top.service';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  category$ = this.topService.category$.pipe(filter((c) => !!c.length));
  selectCategory$ = this.topService.selectCategory$;
  searchValue$ = this.topService.searchValue$;
  legendItem$ = this.topService.legendItem$.pipe(
    filter((item) => !!item.length),
    take(1)
  );
  itemList$ = combineLatest([
    this.legendItem$,
    this.selectCategory$,
    this.searchValue$,
  ]).pipe(
    map(([list, category, search]) => {
      if (search) {
        return list.filter((v) => v.name.includes(search));
      }
      if (category) {
        return list.filter((v) => {
          return v.category.some((c) => c.parent.id === category);
        });
      }
      return list;
    })
  );
  constructor(private topService: TopService) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    if (!value) {
      this.topService.searchValue$.next('');
      return;
    }
    this.topService.searchValue$.next(value);
  }

  onSelect(selected: number) {
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
