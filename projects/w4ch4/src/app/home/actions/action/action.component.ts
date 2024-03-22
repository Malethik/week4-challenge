import { Component, Input } from '@angular/core';
import { dataService } from '../../../core/service/service.service';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [],
  template: ` <button
    [class.call]="label.toLocaleLowerCase()"
    [class.active]="isActive"
    (click)="onClick()"
  >
    {{ label }}
  </button>`,
  styles: `

button {
  border-radius: 10px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  cursor: default;
  opacity: 0.5;
  transform: scale(0.9);
  transition: all 0.2s ease-out;
}
.active {
  cursor: pointer;
  opacity: 1;
}
button.active:hover {
  transform: scale(1);
}
.call {
  background-color: #00886a;
}
.hang {
  background-color: #b6002e;
}`,
})
export class ActionComponent {
  @Input({ required: true }) label!: 'Hang' | 'Call';

  isActive!: boolean;

  constructor(private sercice: dataService) {
    this.sercice.getPhone().subscribe((data) => {
      switch (this.label) {
        case 'Call':
          this.isActive = !data.isCalling;
          break;
        case 'Hang':
          this.isActive = data.isCalling;
          break;
      }
    });
  }

  onClick() {
    this.sercice.changeCalling();
  }
}
