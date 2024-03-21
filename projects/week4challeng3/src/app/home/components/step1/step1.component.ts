import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import {
  NgForm,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { PersonalData, User } from '../../model/user';

@Component({
  selector: 'w3c2-step1',
  standalone: true,
  imports: [RouterModule, FormsModule, JsonPipe, ReactiveFormsModule],
  templateUrl: './step1.component.html',
  styles: ``,
})
export default class Step1Component{
  formGroup: FormGroup;
  @Input({ require: true }) initialUser!: Partial<User>;
  
  @Output() changeStep: EventEmitter<State> = new EventEmitter();
  constructor(private fb: FormBuilder) {


    ngOnInit(): void() {
      this.formGroup = this.fb.group({
      name:  [this.initialUser?.name],
      lastName: [this.initialUser?.lastName],
      email: [this.initialUser?.Email],
      birtday: [this.initialUser?.birthDate],
      gender: [this.initialUser?.Gender],
      hasNewsLetter: [this.initialUser?.newsletter],
    });



  }





  onSubmit(ev: Event) {
    const userData: PersonalData = this.formGroup.value;
    this.changeStep.emit({ step: 2, userData: this.formGroup.value });
    console.log(ev);
    console.log(userData);
  }
}}
