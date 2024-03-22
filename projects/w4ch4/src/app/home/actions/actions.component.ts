import { Component } from '@angular/core';

import { ActionComponent } from './action/action.component';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [ActionComponent, DisplayComponent],
  template: ` <app-action /> `,
  styles: ``,
})
export class ActionsComponent {}
