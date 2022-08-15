import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  readonly isDark = new BehaviorSubject<boolean>(false);

  constructor() {}
}
