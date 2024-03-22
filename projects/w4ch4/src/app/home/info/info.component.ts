import { Component, inject } from '@angular/core';
import { dataService } from '../../core/service/service.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  template: ` <span class="message">{{ message }}</span> `,
  styles: ``,
})
export class InfoComponent {
  service = inject(dataService);
  message: string = '...';

  constructor() {
    this.service
      .getPhone()
      .subscribe((data) =>
        data.isCalling ? 'calling' + data.phoneNumber : '...'
      );
  }
}
