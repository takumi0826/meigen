import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-navigate-dialog',
  templateUrl: './navigate-dialog.component.html',
  styleUrls: ['./navigate-dialog.component.scss'],
})
export class NavigateDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NavigateDialogComponent>) {}

  ngOnInit(): void {}
}
