import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TopService } from 'src/app/services/top.service';
import { Item } from 'src/app/types/type';

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

  constructor(private topService: TopService) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    console.log(value);
    const itemData = this.topService.getItemData(value);
    this.itemList.next(itemData);
  }
}
