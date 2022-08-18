import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, first } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';
import { NavigateDialogComponent } from '../dialog/navigate-dialog/navigate-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDark$ = this.appService.isDark.asObservable();

  constructor(private appService: AppService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  changeMode() {
    this.appService.isDark.next(!this.appService.isDark.getValue());
    const el = document.documentElement;
    el.classList.contains('dark')
      ? el.classList.remove('dark')
      : el.classList.add('dark');
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(NavigateDialogComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
