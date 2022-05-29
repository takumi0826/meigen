import { Component, Input, OnInit } from '@angular/core';
import { TopService } from 'src/app/services/top.service';
import { Item } from 'src/app/types/type';

@Component({
  selector: 'app-meigen-card',
  templateUrl: './meigen-card.component.html',
  styleUrls: ['./meigen-card.component.scss'],
})
export class MeigenCardComponent implements OnInit {
  @Input() item!: Item;
  cardImage = '';

  constructor(private topService: TopService) {}

  ngOnInit(): void {
    this.cardImage = this.topService.getItemImage();
  }
}
