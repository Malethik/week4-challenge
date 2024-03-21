import { Component } from '@angular/core';
import { User } from '../../model/user';
export type State = {
  step: number;
  userData: Partial<User>;
};

@Component({
  selector: 'app-app-form',
  standalone: true,
  imports: [],
  template: ` @switch (state.step){ @case (1) {

  } } `,
  styles: ``,
})
export class AppFormComponent {
  state: State = {
    step: 1,
    userData: {
      name: '',
      lastName: '',
      birthDate: '',
      Email: '',
      Gender: 'preferNotToSay',
      newsletter: false,
      username: '',
      password: '',
      accountType: 'personal',
    },
  };
}
