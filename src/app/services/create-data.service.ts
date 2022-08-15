import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Category, ChildCategory } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class CreateDataService {
  readonly category$ = new BehaviorSubject<ChildCategory>([]);

  constructor(private http: HttpClient) {}

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
          this.category$.next(v);
        },
        error: (err) => console.log(err),
      });
  }
}
