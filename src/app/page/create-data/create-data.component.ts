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
import { filter, first, map } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';
import { CreateDataService } from 'src/app/services/create-data.service';
import { TopService } from 'src/app/services/top.service';
import { Category, ChildCategory } from 'src/app/types/type';

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
    console.log(control);

    return cat.some((v) => v) ? null : { checkBox: true };
  }

  checkError(name: string, validName: string) {
    return this.options.controls[name].errors?.[validName];
  }

  onSubmit(form: FormGroupDirective) {
    console.log(form.value);
    // this.options.contains(['name'])
  }
}
