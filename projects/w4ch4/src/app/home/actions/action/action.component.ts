import { Component } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [DisplayComponent],
  template: `
    <div class="actions">
      <app-display />
      <!-- El botón de llamar debe tener la clase "activo" cuando -->
      <!-- el número de teléfono tiene 9 cifras -->
      <a href="#" class="call">Call</a>
      <!-- Sólo se tiene que ver un botón u otro -->
      <a href="#" class="hang active">Hang</a>
    </div>
  `,
  styles: ``,

})
export class ActionComponent {}
