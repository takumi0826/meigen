import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  constructor(private topService: TopService) {}

  ngOnInit(): void {
    this.topService.selectCategory$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.formControl.reset();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  isVaildate() {
    return this.formControl.hasError('required');
  }

  onBlur() {
    // if (this.isVaildate()) return;
    this.blur.emit(this.hiraganaToKatakana(this.formControl.value));
  }

  onEnter() {
    this.enter.emit(this.hiraganaToKatakana(this.formControl.value));
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
