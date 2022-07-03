import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'meigen';
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      this.appService.isDark.next(true);
    }
  }
}
