import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { itemImage } from '../data/item';
import { Category, LegendItem } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class TopService {
  readonly category$ = new BehaviorSubject<Category[]>([]);
  readonly legendItem$ = new BehaviorSubject<LegendItem[]>([]);
  readonly selectCategory$ = new BehaviorSubject<number>(0);
  readonly searchValue$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  // public getItemData(value: string) {
  //   if (!value.trim()) return this.shuffleArray(itemData);
  //   const output = itemData.filter((v) => v.name.includes(value));
  //   return output;
  // }

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
      .get<LegendItem[]>(`${environment.apiurl}legends/find-all`)
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
      .get<Category[]>(`${environment.apiurl}category/find-all`)
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

  // private shuffleArray(array: Item[]) {
  //   for (let i = array.length; 1 < i; i--) {
  //     const k = Math.floor(Math.random() * i);
  //     [array[k], array[i - 1]] = [array[i - 1], array[k]];
  //   }
  //   return array;
  // }

  // private changeHours(): boolean {
  //   const hours = new Date().getHours();
  //   const target = [0, 6, 12, 18];
  //   return target.some((h) => h === hours);
  // }
}
