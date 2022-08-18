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
import { from } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
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
  category$ = this.createDataService.category$.pipe(filter((v) => !!v.length));
  options!: FormGroup;

  constructor(
    private appService: AppService,
    private createDataService: CreateDataService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.isShow = !this.appService.isProduction();
    this.createDataService.loadCategory();
    this.category$.pipe(first()).subscribe((v) => {
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
    this.createDataService.create(data);

    //データの初期化
    formDirective.resetForm();
    this.options.reset();
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