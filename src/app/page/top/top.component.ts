import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TopService } from 'src/app/services/top.service';
import { Item, ItemDetail } from 'src/app/types/type';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  itemList = new BehaviorSubject<ItemDetail[]>([]);
  get itemList$() {
    return this.itemList.asObservable();
  }

  constructor(private topService: TopService) {}

  ngOnInit(): void {}

  onBlur(value: number) {
    console.log(value);
    const itemData = this.topService.getItemData();
    const filteredItem =
      itemData.find((v) => v.size === value)?.itemDetail || [];
    this.itemList.next(filteredItem);
  }
}
