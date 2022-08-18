import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { makeStateKey } from '@angular/platform-browser';
import { first, map, tap } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';
import { DeleteDataService } from 'src/app/services/delete-data.service';
import { TopService } from 'src/app/services/top.service';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.scss'],
})
export class DeleteDataComponent implements OnInit {
  legends!: { id: number; name: string; cheked: boolean }[];

  constructor(
    private topService: TopService,
    private appService: AppService,
    private deleteDataService: DeleteDataService
  ) {}

  ngOnInit(): void {
    this.appService.legendItem$
      .pipe(
        map((legend) =>
          legend.map((v) => ({ id: v.id, name: v.name, cheked: false }))
        )
      )
      .subscribe((v) => {
        this.legends = v;
      });
  }

  deleteItem() {
    const target = this.legends.filter((v) => v.cheked);
    //選択がない場合処理を行わない
    if (!target.length) return;

    const ids = target.map((v) => v.id).join();
    this.deleteDataService.remove(ids);
  }
}
