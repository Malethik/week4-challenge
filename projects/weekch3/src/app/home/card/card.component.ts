import { Component, OnInit } from '@angular/core';
import { dataChar } from '../../core/data';
import { Character } from '../../core/char';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  data: Character[] = [];
  constructor() {
    this.onLoad();
  }

  onLoad() {
    dataChar().then((char) => {
      this.data = char as Character[];
      console.log(this.data);
      console.log('char', char);
    });
  }
}
