import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { catchError, first, take } from 'rxjs/operators';
import { itemData, itemImage } from '../data/item';
import { Category, CategoryResponse, Item, LegendItem } from '../types/type';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class TopService {
  readonly category$ = new BehaviorSubject<CategoryResponse[]>([]);
  readonly legendItem$ = new BehaviorSubject<LegendItem[]>([]);
  readonly selectCategory$ = new BehaviorSubject<string>('');
  readonly searchValue$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

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

  /**
   * getLegend
   */
  public getLegend() {
    this.http
      .get<LegendItem[]>('http://localhost:3000/legends/find-all')
      .pipe(
        first(),
        catchError((err) => {
          throw 'error in source. Details: ' + err;
        })
      )
      .subscribe({
        next: (v) => {
          this.legendItem$.next(v);
        },
        error: (err) => console.log(err),
      });
  }

  /**
   * name
   */
  public async getCategories() {
    this.http
      .get<CategoryResponse[]>('http://localhost:3000/category/find-all')
      .pipe(
        first(),
        catchError((err) => {
          throw 'error in source. Details: ' + err;
        })
      )
      .subscribe({
        next: (v) => {
          this.category$.next(v);
        },
        error: (err) => console.log(err),
      });
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
