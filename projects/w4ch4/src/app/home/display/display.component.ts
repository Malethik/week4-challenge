import { Component } from '@angular/core';
import { dataService } from '../../core/service/service.service';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  template: `<span class="number">{{ dialed }}</span>`,
  styles: `.number {
  background-color: #fff;
  color: #454545;
  padding: 5px 20px;
  width: 150px;
  border-radius: 30px;
  text-align: center;
  margin: 50px 0;
  height: 31px;
  
}`,
})
export class DisplayComponent {
  dialed: string = '';
  constructor(private service: dataService) {
    this.service
      .getPhone()
      .subscribe((data) => (this.dialed = data.phoneNumber));
  }
}
