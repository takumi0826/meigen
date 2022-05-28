import { Injectable } from '@angular/core';
import { itemData } from '../data/item';

@Injectable({
  providedIn: 'root',
})
export class TopService {
  constructor() {}

  public getItemData() {
    return itemData;
  }
}
