import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-size',
  templateUrl: './input-size.component.html',
  styleUrls: ['./input-size.component.scss'],
})
export class InputSizeComponent implements OnInit {
  value = '';
  sizeFormControl = new FormControl(this.value, [Validators.required]);
  @Output() blur = new EventEmitter<string>();
  @Output() enter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  isVaildate() {
    return this.sizeFormControl.hasError('required');
  }

  onBlur() {
    // if (this.isVaildate()) return;
    this.blur.emit(this.hiraganaToKatakana(this.sizeFormControl.value));
  }

  onEnter() {
    this.enter.emit(this.hiraganaToKatakana(this.sizeFormControl.value));
  }

  private hiraganaToKatakana(str: string) {
    if (!this.isHiragana(str)) return str;
    return str.replace(/[\u3041-\u3096]/g, (match) => {
      var chr = match.charCodeAt(0) + 0x60;
      return String.fromCharCode(chr);
    });
  }

  private isHiragana(str: string) {
    return str.match(/^[ぁ-んー　]*$/);
  }
}
