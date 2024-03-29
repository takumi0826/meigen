import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, of } from 'rxjs';
import { first, tap, catchError, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Category, Legends } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  readonly isDark = new BehaviorSubject<boolean>(false);
  readonly category$ = new BehaviorSubject<Category[]>([]);
  readonly loading$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {}

  isProduction() {
    return environment.production;
  }

  /**
   * getLegend
   */
  public getLegend(
    params?: { limit?: number; offset?: number },
    noLoad = false
  ) {
    const query = new URLSearchParams();
    if (params?.limit) query.append('limit', params.limit.toString());
    if (params?.offset) query.append('offset', params.offset.toString());
    const url = `${environment.apiurl}legends/find-all${
      query.toString() ? '?' + query : ''
    }`;

    if (!noLoad) this.loading$.next(true);
    return this.http.get<Legends>(url).pipe(
      first(),
      catchError((err: HttpErrorResponse) => {
        console.error(err.message);
        return of({ legends: [], total: 0 });
      }),
      finalize(() => this.loading$.next(false))
    );
  }

  public getCategories() {
    this.loading$.next(true);
    return this.http
      .get<Category[]>(`${environment.apiurl}category/find-all`)
      .pipe(
        first(),
        catchError((err) => {
          throw 'error in source. Details: ' + err;
        }),
        finalize(() => this.loading$.next(false))
      );
  }
}
