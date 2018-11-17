import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CheckoutService {

  loadCheckoutStep$: BehaviorSubject<string> = new BehaviorSubject('cart');

  constructor() { }


}
