import { Routes } from '@angular/router';
import HomeComponent from './home/home.component';
import Step1Component from './home/components/step1/step1.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'home',
    loadComponent: () => import('./home/home.component'),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'form' },
      {
        path: 'step1',
        title: 'step1',
        loadComponent: () => import('./home/components/step1/step1.component'),
      },
      { path: '**', redirectTo: 'form' },
    ],
  },
];
