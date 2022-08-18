import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { first, catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SnackBarComponent } from '../parts/snack-bar/snack-bar.component';
import { TopService } from './top.service';

@Injectable({
  providedIn: 'root',
})
export class DeleteDataService {
  constructor(
    private http: HttpClient,
    private topService: TopService,
    private _snackBar: MatSnackBar
  ) {}

  remove(ids: string) {
    return this.http
      .delete<{ count: number }>(`${environment.apiurl}legends/${ids}`)
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
            data: { text: '削除しました' },
          });
          this.topService.getLegend();
        },
      });
  }
}
