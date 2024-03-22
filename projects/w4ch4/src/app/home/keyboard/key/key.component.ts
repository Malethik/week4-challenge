import { Component, Input } from '@angular/core';
import { dataService } from '../../../core/service/service.service';

@Component({
  selector: 'app-key',
  standalone: true,
  imports: [],
  template: `
    <li>
      <button class="key" (click)="pushNumber($event)">{{ number }}</button>
    </li>
  `,
  styles: ``,
})
export class KeyComponent {
  @Input() number!: string;
  constructor(private service: dataService) {}

  pushNumber(event: Event) {
    this.service.addValue(this.number);
  }
}
