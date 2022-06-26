import { Component, OnInit } from '@angular/core';
import { combineLatest, fromEvent, merge } from 'rxjs';
import { map, startWith, tap, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent {}
