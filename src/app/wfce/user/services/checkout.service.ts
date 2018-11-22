import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class CheckoutService {

  /**
   * determine which step in checkout to load
   */
  loadCheckoutStep$: BehaviorSubject<string> = new BehaviorSubject('bill');

  /**
   * show/hide success component modal
   */
  showSuccesModal$: Subject<boolean> = new Subject();

  constructor() { }


}
