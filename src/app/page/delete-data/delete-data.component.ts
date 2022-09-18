import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { makeStateKey } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import {
  filter,
  first,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { SnackBarComponent } from 'src/app/parts/snack-bar/snack-bar.component';
import { AppService } from 'src/app/services/app.service';
import { DeleteDataService } from 'src/app/services/delete-data.service';
import { TopService } from 'src/app/services/top.service';
import { Legend, Legends } from 'src/app/types/type';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.scss'],
})
export class DeleteDataComponent implements OnInit {
  legendItem$ = new BehaviorSubject<Legends>({
    legends: [],
    total: 0,
  });
  legendItem!: {
    legends: { id: number; name: string; cheked: boolean }[];
    total: number;
  };
  loading$ = this.appService.loading$;

  paging = {
    begin: 0,
    length: 30, //表示数
  };

  constructor(
    private topService: TopService,
    private appService: AppService,
    private deleteDataService: DeleteDataService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.appService.getLegend().subscribe((v) => {
      this.legendItem$.next(v);
    });
    this.legendItem$
      .pipe(
        map((l) => {
          const legends = l.legends.map((v) => ({
            id: v.id,
            name: v.name,
            cheked: false,
          }));
          return {
            legends,
            total: l.total,
          };
        })
      )
      .subscribe((v) => {
        this.legendItem = v;
      });
  }

  deleteItem() {
    const target = this.legendItem.legends.filter((v) => v.cheked);
    //選択がない場合処理を行わない
    if (!target.length) return;
    const ids = target.map((v) => v.id).join();

    this.deleteDataService
      .remove(ids)
      .pipe(
        switchMap(() =>
          this.appService.getLegend().pipe(tap((v) => this.legendItem$.next(v)))
        )
      )
      .subscribe({
        next: () => {
          this._snackBar.openFromComponent(SnackBarComponent, {
            duration: 2 * 1000,
            verticalPosition: 'bottom',
            data: { text: '削除しました' },
            panelClass: ['success-snackbar'],
          });
        },
        error: () => {
          this._snackBar.openFromComponent(SnackBarComponent, {
            duration: 2 * 1000,
            verticalPosition: 'bottom',
            data: { text: '削除に失敗しました' },
            panelClass: ['failed-snackbar'],
          });
        },
      });
  }

  pager(page: number) {
    this.paging.begin = this.paging.length * page;
  }

  arrayNumberLength(total: number, end: number): any[] {
    const num = Math.ceil(total / end);
    if (num <= 1) return [];
    return [...Array(num)];
  }
}
