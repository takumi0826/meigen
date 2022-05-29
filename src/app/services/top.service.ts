import { Injectable } from '@angular/core';
import { itemData, itemImage } from '../data/item';

@Injectable({
  providedIn: 'root',
})
export class TopService {
  constructor() {}

  public getItemData(value: string) {
    if (!value.trim()) return itemData;
    const output = itemData.filter((v) => v.name.includes(value));
    return output;
  }

  public getItemImage() {
    const randam = Math.floor(Math.random() * itemImage.length);
    const image = itemImage[randam];
    return image;
  }
}
