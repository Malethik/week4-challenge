import { Component } from '@angular/core';
import { ActionComponent } from './actions/action/action.component';
import { DisplayComponent } from './display/display.component';
import { InfoComponent } from './info/info.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ActionsComponent } from './actions/actions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styles: ``,
  imports: [
    ActionComponent,
    DisplayComponent,
    InfoComponent,
    KeyboardComponent,
    ActionsComponent,
  ],
})
export class HomeComponent {}
