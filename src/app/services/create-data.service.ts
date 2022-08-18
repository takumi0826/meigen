import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SnackBarComponent } from '../parts/snack-bar/snack-bar.component';
import { Category, ChildCategory, CreateLegendData } from '../types/type';
import { TopService } from './top.service';

@Injectable({
  providedIn: 'root',
})
export class CreateDataService {
  readonly _category$ = new BehaviorSubject<ChildCategory>([]);
  get category$() {
    return this._category$.asObservable();
  }

  constructor(
    private http: HttpClient,
    private topService: TopService,
    private _snackBar: MatSnackBar
  ) {}

  loadCategory() {
    this.http
      .get<ChildCategory>(`${environment.apiurl}category/find-child`)
      .pipe(
        first(),
        catchError((err) => {
          throw 'error in source. Details: ' + err;
        })
      )
      .subscribe({
        next: (v) => {
          this._category$.next(v);
        },
        error: (err) => console.error(err),
      });
  }

  create(data: CreateLegendData) {
    this.http
      .post<{ count: number }>(`${environment.apiurl}legends/create`, data)
      .pipe(
        first(),
        catchError((err) => {
          throw 'error in source. Details: ' + err;
        })
      )
      .subscribe({
        next: () => {
          this._snackBar.openFromComponent(SnackBarComponent, {
            duration: 3 * 1000,
            verticalPosition: 'top',
            data: { text: '作成しました' },
            panelClass: ['success-snackbar'],
          });
          this.topService.getLegend();
        },
        error: (err) => {
          this._snackBar.openFromComponent(SnackBarComponent, {
            duration: 3 * 1000,
            verticalPosition: 'top',
            data: { text: '作成に失敗しました' },
            panelClass: ['failed-snackbar'],
          });
        },
      });
  }
}
