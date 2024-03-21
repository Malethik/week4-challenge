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
  characters: Character[] = [];
  constructor() {
    this.onLoad();
  }

  onLoad() {
    dataChar().then((characters) => {
      this.characters = characters;
      console.log(this.characters);
    });
  }
}
