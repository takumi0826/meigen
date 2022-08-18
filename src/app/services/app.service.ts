import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, LegendItem } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  readonly isDark = new BehaviorSubject<boolean>(false);
  readonly category$ = new BehaviorSubject<Category[]>([]);
  readonly legendItem$ = new BehaviorSubject<LegendItem[]>([]);

  constructor() {}

  isProduction() {
    return environment.production;
  }
}
