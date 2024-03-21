import { Component, Input } from '@angular/core';

import { Character } from '../../core/char';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) character: Character[] = [];
  constructor() {}
}
