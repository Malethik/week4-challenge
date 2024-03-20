import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'w3c2-step1',
  standalone: true,
  imports: [RouterModule, FormsModule, JsonPipe],
  templateUrl: './step1.component.html',
  styles: ``,
})
export default class Step1Component {
  userData:
    | {
        name: string;
        surname: string;
        birthdate: string;
        radioGroup: string;
        email: string;
        newsletter: string;
        checkboxOption2: boolean;
      }
    | undefined;
  @ViewChild('form', {
    static: true,
  })
  form!: ElementRef;
  @ViewChild('personalForm', {
    static: true,
  })
  personalForm!: NgForm;

  onSubmit(ev: Event) {
    console.log(ev);
    console.log(this.personalForm.value);
    this.userData = this.personalForm.value;
  }
}
