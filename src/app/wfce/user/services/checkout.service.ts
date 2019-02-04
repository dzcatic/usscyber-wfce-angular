import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class CheckoutService {

  /**
   * determine which step in checkout to load
   */
  loadCheckoutStep$: BehaviorSubject<string> = new BehaviorSubject('cart');

  /**
   * show/hide success component modal
   */
  showSuccesModal$: Subject<boolean> = new Subject();

  /**QrCode string for payment
   */
  qrCodeString$: Subject<string> = new Subject();
  constructor() { }


}
