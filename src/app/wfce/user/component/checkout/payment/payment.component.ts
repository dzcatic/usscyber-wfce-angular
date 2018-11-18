import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../../services/checkout.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
  }

  goToStep(step: string) {
    this.checkoutService.loadCheckoutStep$.next(step)
  }

}
