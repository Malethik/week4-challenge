import { Component } from '@angular/core';

import { ActionComponent } from './action/action.component';
import { DisplayComponent } from '../display/display.component';
import { dataService } from '../../core/service/service.service';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [ActionComponent, DisplayComponent],
  template: `
    <app-display />
    @for (label of labels; track $index) {
    <app-action [label]="label" />
    }
  `,
  styles: `:host{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

}`,
})
export class ActionsComponent {
  labels: ('Call' | 'Hang')[] = ['Call', 'Hang'];
}
