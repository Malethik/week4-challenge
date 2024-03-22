import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Phone } from '../model/phone';

const initPhone: Phone = {
  phoneNumber: '',
  isCalling: false,
};

@Injectable({
  providedIn: 'root',
})
export class dataService {
  private phone$: BehaviorSubject<Phone> = new BehaviorSubject<Phone>(
    initPhone
  );
  constructor() {}

  /* get phone() {
    return this.phone$.asObservable()
  } */

  getPhone() {
    return this.phone$.asObservable();
  }

  setPhoneNumber(value: string) {
    const phone = this.phone$.value;
    if (value === '') {
      phone.phoneNumber = '';
    } else {
      phone.phoneNumber += value;
    }
    this.phone$.next(phone);
  }

  changeCalling() {
    const phone = this.phone$.value;
    phone.isCalling = !phone.isCalling;
    this.phone$.next(phone);
  }
}
