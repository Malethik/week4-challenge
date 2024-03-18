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
  @Input()
  gentelmans!: Gentelman;
}
