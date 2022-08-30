import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, UntypedFormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TopService } from 'src/app/services/top.service';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss'],
})
export class InputNameComponent implements OnInit, OnDestroy {
  formControl = new FormControl('', [Validators.required]);
  @Output() blur = new EventEmitter<string>();
  @Output() enter = new EventEmitter<string>();

  destroy$ = new Subject();

  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;

  constructor(private topService: TopService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  isVaildate() {
    return this.formControl.hasError('required');
  }

  onBlur() {
    this.blur.emit(this.formControl.value || '');
  }

  onEnter() {
    this.inputElement.nativeElement.blur();
  }

  private hiraganaToKatakana(str: string) {
    if (!this.isHiragana(str)) return str || '';
    return str.replace(/[\u3041-\u3096]/g, (match) => {
      var chr = match.charCodeAt(0) + 0x60;
      return String.fromCharCode(chr);
    });
  }

  private isHiragana(str: string) {
    return str?.match(/^[ぁ-んー　]*$/);
  }
}
