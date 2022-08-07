import { Component, ContentChild, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { InputNameComponent } from 'src/app/parts/input-name/input-name.component';
import { TopService } from 'src/app/services/top.service';
import { Category, CategoryType, Item } from 'src/app/types/type';
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
  panelOpenState = false;
  initData!: Item[];
  itemList = new BehaviorSubject<Item[]>([]);
  get itemList$() {
    return this.itemList.asObservable();
  }
  category$ = this.topService.category$.pipe(
    filter((c) => !!c.length),
    map((c) => {
      console.log(c[0]);
      return c.map((v) => v.name);
    })
  );
  selectedCategory: string = '';

  constructor(private topService: TopService) {}

  ngOnInit(): void {
    this.initData = this.topService.getItemData('');
    this.itemList.next(this.initData);
  }

  onSearch(value: string) {
    this.selectedCategory = '';
    const itemData = this.topService.getItemData(value);
    this.itemList.next(itemData);
  }

  onSelect(selected: string) {
    this.topService.selectSubject$.next();
    if (selected === this.selectedCategory) {
      this.selectedCategory = '';
      this.itemList.next(this.initData);
      return;
    }
    this.selectedCategory = selected;
    const itemData = this.topService
      .getItemData('')
      .filter((item) => item.category.parent === selected);
    this.itemList.next(itemData);
  }
}
