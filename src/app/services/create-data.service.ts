import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { options } from '../constant/request-header.const';
import { SnackBarComponent } from '../parts/snack-bar/snack-bar.component';
import { Category, ChildCategory, CreateLegendData } from '../types/type';
import { AppService } from './app.service';
import { TopService } from './top.service';

@Injectable({
  providedIn: 'root',
})
export class CreateDataService {
  readonly _category$ = new BehaviorSubject<ChildCategory>([]);
  get category$() {
    return this._category$.asObservable();
  }
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    }),
  };

  constructor(
    private http: HttpClient,
    private topService: TopService,
    private appService: AppService,
    private _snackBar: MatSnackBar
  ) {}

  loadCategory() {
    this.http
      .get<ChildCategory>(
        `${environment.apiurl}category/find-child`,
        this.options
      )
      .pipe(
        first(),
        tap(() => this.appService.loading$.next(true)),
        catchError((err) => {
          throw err;
        })
      )
      .subscribe({
        next: (v) => {
          this._category$.next(v);
        },
        error: (err) => console.error(err),
        complete: () => {
          this.appService.loading$.next(false);
        },
      });
  }

  create(data: CreateLegendData) {
    this.http
      .post<{ count: number }>(`${environment.apiurl}legends/create`, data)
      .pipe(
        first(),
        catchError((err) => {
          throw err;
        })
      )
      .subscribe({
        next: () => {
          this._snackBar.openFromComponent(SnackBarComponent, {
            duration: 2 * 1000,
            verticalPosition: 'bottom',
            data: { text: '作成しました' },
            panelClass: ['success-snackbar'],
          });
          this.topService.getLegend();
        },
        error: (err) => {
          this._snackBar.openFromComponent(SnackBarComponent, {
            duration: 2 * 1000,
            verticalPosition: 'bottom',
            data: { text: '作成に失敗しました' },
            panelClass: ['failed-snackbar'],
          });
        },
      });
  }
}
