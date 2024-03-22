import { Component } from '@angular/core';

import { ActionComponent } from './action/action.component';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [ActionComponent, DisplayComponent],
  template: `
    <div class="actions">
      <app-display />
      @for (label of labels; track $index) {
      <app-action [label]="label" />
      }
    </div>
  `,
  styles: ``,
})
export class ActionsComponent {
  labels = ['call', 'hang'];
}
