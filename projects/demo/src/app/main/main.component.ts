import { Component, Input } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { gentelmans } from './pointer.service';

@Component({
  selector: 'isdi-main',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  Gentelmans = gentelmans;
}
