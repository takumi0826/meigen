import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, finalize, first, tap } from 'rxjs/operators';
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
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    }),
  };

  constructor(private http: HttpClient, private appService: AppService) {}

  loadCategory() {
    return this.http
      .get<ChildCategory>(
        `${environment.apiurl}category/find-child`,
        this.options
      )
      .pipe(
        first(),
        tap(() => this.appService.loading$.next(true)),
        catchError((err: HttpErrorResponse) => {
          console.error(err.message);
          return of([]);
        }),
        finalize(() => this.appService.loading$.next(false))
      );
  }

  create(data: CreateLegendData) {
    return this.http
      .post<{ count: number }>(`${environment.apiurl}legends/create`, data)
      .pipe(
        first(),
        catchError((err) => {
          throw err;
        })
      );
  }
}
