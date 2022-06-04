import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TopService } from 'src/app/services/top.service';
import { Item } from 'src/app/types/type';
import { CategoryTypeConst } from '../../constants/category-type-const';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  panelOpenState = false;
  itemList = new BehaviorSubject<Item[]>(this.topService.getItemData(''));
  get itemList$() {
    return this.itemList.asObservable();
  }
  categorys!: string[];
  selectedCategory: string = '';

  constructor(private topService: TopService) {}

  ngOnInit(): void {
    this.categorys = Object.values(CategoryTypeConst);
  }

  onSearch(value: string) {
    const itemData = this.topService.getItemData(value);
    this.itemList.next(itemData);
  }

  onSelect(selected: string) {
    if (selected === this.selectedCategory) return;
    this.selectedCategory = selected;
    const itemData = this.topService
      .getItemData('')
      .filter((item) => item.category.includes(selected));
    this.itemList.next(itemData);
  }
}
