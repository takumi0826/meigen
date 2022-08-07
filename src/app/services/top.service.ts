import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { itemData, itemImage } from '../data/item';
import { Item } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class TopService {
  private selectSubject = new Subject();
  get selectSubject$() {
    return this.selectSubject;
  }
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

  // private changeHours(): boolean {
  //   const hours = new Date().getHours();
  //   const target = [0, 6, 12, 18];
  //   return target.some((h) => h === hours);
  // }
}
