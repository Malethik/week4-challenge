import { Component } from '@angular/core';
import { KeyComponent } from './key/key.component';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [KeyComponent],
  template: `
    <div class="keyboard-container">
      <ol class="keyboard">
        @for (key of keys; track $index) {
        <app-key [number]="key" />
        }

        <li><button class="key big" (click)="deleteNum()">delete</button></li>
      </ol>
    </div>
  `,
  styles: ``,
})
export class KeyboardComponent {
  keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  deleteNum() {}
}
