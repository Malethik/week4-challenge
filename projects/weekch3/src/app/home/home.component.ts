import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { getCharacters } from '../core/data';
import { Character } from '../core/char';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  characters!: Character[];
  constructor() {
    this.onLoad();
  }

  onLoad() {
    getCharacters().then((characters) => {
      this.characters = characters;
      console.log(characters);
    });
  }
}
