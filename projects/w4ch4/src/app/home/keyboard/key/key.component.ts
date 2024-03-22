import { Component, Input } from '@angular/core';
import { dataService } from '../../../core/service/service.service';

@Component({
  selector: 'app-key',
  standalone: true,
  imports: [],
  template: `
    <button
      class="key"
      [class.big]="label.length > 1"
      (click)="pushNumber($event)"
    >
      {{ label }}
    </button>
  `,
  styles: ``,
})
export class KeyComponent {
  @Input() label!: string;
  constructor() {} //private service: dataService

  pushNumber(event: Event) {
    console.log('pushnumber', this.label);
    // this.service.addValue(this.label);
  }
}
