import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormGroupDirective,
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from, Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import { SnackBarComponent } from 'src/app/parts/snack-bar/snack-bar.component';
import { AppService } from 'src/app/services/app.service';
import { CreateDataService } from 'src/app/services/create-data.service';
import { TopService } from 'src/app/services/top.service';
import { Category, ChildCategory, CreateLegendData } from 'src/app/types/type';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.scss'],
})
export class CreateDataComponent implements OnInit {
  isShow = false;
  category$!: Observable<ChildCategory>;
  options!: FormGroup;
  loading$ = this.appService.loading$;

  constructor(
    private appService: AppService,
    private createDataService: CreateDataService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private topService: TopService
  ) {}

  ngOnInit(): void {
    this.init();
  }

  checkBoxValid(control: AbstractControl): ValidationErrors | null {
    const cat = Object.values(control.value);
    return cat.some((v) => v) ? null : { checkBox: true };
  }

  checkError(name: string, validName: string) {
    return this.options.controls[name].errors?.[validName];
  }

  onSubmit(formData: FormGroup, formDirective: FormGroupDirective) {
    const { meigen, name, category } = formData.value;
    const data: CreateLegendData = {
      meigen,
      name,
      category: this.createNumbers(category),
    };
    this.createDataService.create(data).subscribe({
      next: () => {
        this._snackBar.openFromComponent(SnackBarComponent, {
          duration: 2 * 1000,
          verticalPosition: 'bottom',
          data: { text: '作成しました' },
          panelClass: ['success-snackbar'],
        });

        //データの初期化
        formDirective.resetForm();
        this.options.reset();
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

  private init() {
    this.isShow = !this.appService.isProduction();
    this.category$ = this.createDataService.loadCategory();
    this.category$.pipe(first((v) => !!v.length)).subscribe((v) => {
      const group = v.reduce((prev, curr) => {
        prev[curr.id] = new FormControl(false);
        return prev;
      }, {} as { [key: string]: FormControl<boolean | null> });
      const legend = {
        name: new FormControl('', [Validators.required]),
        meigen: new FormControl('', [Validators.required]),
        category: new FormGroup(group, { validators: this.checkBoxValid }),
      };

      this.options = this.fb.group(legend);
    });
  }

  private createNumbers(category: {
    [key: string]: FormControl<boolean | null>;
  }): number[] {
    const array = [];
    for (const [id, checked] of Object.entries(category)) {
      if (checked) array.push(Number(id));
    }
    return array;
  }
}
