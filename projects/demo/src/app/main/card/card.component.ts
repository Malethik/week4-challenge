import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gentelman } from '../pointer';
import { gentelmans } from '../pointer.service';

@Component({
  selector: 'isdi-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  gentelmans: Gentelman[] = [];

  constructor() {
    this.gentelmans = gentelmans();
  }

  /* selectItem(gentelmans: Gentelman) {
    this.gentelmans = this.gentelmans.map((gent) => {
      gent.id === gent.id;
    });
  } */

  deleteItem() {}
}
