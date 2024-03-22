import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class dataService {
  private dataNum = new BehaviorSubject<data>();
  
  values: any[] = [];
  constructor() {}

  addValue(value: any) {
    this.values.push(value);
    console.log(this.values);
  }
}
