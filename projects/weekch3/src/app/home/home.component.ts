import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { dataChar } from '../core/data';
import { Character } from '../core/char';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  data: Character[] = [];
  constructor() {
    this.onLoad();
  }

  onLoad() {
    dataChar().then((char) => {
      this.data = char;
      console.log(this.data);
    });
  }
}
