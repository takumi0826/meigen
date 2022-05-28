import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-size',
  templateUrl: './input-size.component.html',
  styleUrls: ['./input-size.component.scss'],
})
export class InputSizeComponent implements OnInit {
  value = '';
  numberRegEx = /^[+,-]?([1-9]\d*|0)(\.\d+)?$/;
  sizeFormControl = new FormControl(this.value, [
    Validators.required,
    Validators.pattern(this.numberRegEx),
  ]);
  @Output() blur = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  isVaildate() {
    return (
      this.sizeFormControl.hasError('required') ||
      this.sizeFormControl.hasError('pattern')
    );
  }

  onBlur() {
    if (this.isVaildate()) return;
    this.blur.emit(Number(this.sizeFormControl.value));
  }
}
