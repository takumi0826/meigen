import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, finalize, first, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { itemImage } from '../data/item';
import { Category, LegendItem } from '../types/type';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class TopService {
  readonly selectCategory$ = new BehaviorSubject<number>(0);
  readonly searchValue$ = new BehaviorSubject<string>('');
  // private readonly httpOptions = {
  //   headers: new HttpHeaders({
  //     'Access-Control-Allow-Origin': environment.origin,
  //     'Access-Control-Allow-Headers':
  //       'Origin, X-Requested-With, Content-Type, Accept',
  //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
  //   }),
  // };

  constructor(private http: HttpClient, private appService: AppService) {}

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
        tap(() => this.appService.loading$.next(true)),
        catchError((err: HttpErrorResponse) => {
          console.error(err.message);
          return of([]);
        }),
        finalize(() => this.appService.loading$.next(false))
      )
      .subscribe({
        next: (v) => {
          this.appService.legendItem$.next(v);
        },
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
        tap(() => this.appService.loading$.next(true)),
        catchError((err) => {
          throw 'error in source. Details: ' + err;
        })
      )
      .subscribe({
        next: (v) => {
          this.appService.category$.next(v);
        },
        error: (err) => console.error(err),
        complete: () => {
          this.appService.loading$.next(false);
        },
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
