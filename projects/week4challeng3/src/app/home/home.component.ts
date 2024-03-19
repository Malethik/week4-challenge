import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Step1Component from './components/step1/step1.component';

@Component({
  selector: 'w3c2-main',
  standalone: true,
  imports: [RouterModule, Step1Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {}
