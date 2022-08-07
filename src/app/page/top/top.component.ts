import { Component, ContentChild, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  first,
  last,
  map,
  pairwise,
  startWith,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { InputNameComponent } from 'src/app/parts/input-name/input-name.component';
import { TopService } from 'src/app/services/top.service';
import { Category, CategoryType, Item, LegendItem } from 'src/app/types/type';
import {
  CategoryParentConst,
  CategoryTypeConst,
} from '../../constants/category-type-const';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  category$ = this.topService.category$.pipe(
    filter((c) => !!c.length),
    map((c) => {
      return c.map((v) => v.name);
    })
  );
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
          return v.category.some((c) => c.parent.name === category);
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

  onSelect(selected: string) {
    if (selected === this.selectCategory$.getValue()) {
      this.topService.selectCategory$.next('');
      return;
    }
    this.topService.selectCategory$.next(selected);
  }
}
