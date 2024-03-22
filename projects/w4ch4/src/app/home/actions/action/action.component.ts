import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [],
  template: ` <a href="#" [class.call]="label.toLocaleLowerCase()">
    {{ label }}</a
  >`,
  styles: ``,
})
export class ActionComponent {
  @Input({ required: true }) label!: string;
}
