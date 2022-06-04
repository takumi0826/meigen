import { Injectable } from '@angular/core';
import { itemData, itemImage } from '../data/item';
import { Item } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class TopService {
  constructor() {}

  public getItemData(value: string) {
    if (!value.trim()) return this.shuffleArray(itemData);
    const output = itemData.filter((v) => v.name.includes(value));
    return output;
  }

  public getItemImage() {
    const randam = Math.floor(Math.random() * itemImage.length);
    const image = itemImage[randam];
    return image;
  }

  private shuffleArray(array: Item[]) {
    for (let i = array.length; 1 < i; i--) {
      const k = Math.floor(Math.random() * i);
      [array[k], array[i - 1]] = [array[i - 1], array[k]];
    }
    return array;
  }
}
