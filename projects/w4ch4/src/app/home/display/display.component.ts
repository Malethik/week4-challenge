import { Component } from '@angular/core';
import { dataService } from '../../core/service/service.service';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  template: `<span class="number"></span>`,
  styles: ``,
})
export class DisplayComponent {
  dialed: string[] = [];
  constructor(private service: dataService) {}
  calling() {
    this.service;
  }
  /* display() {
    const value = this.service.values;
  } */
}
