import { Component, OnInit, Input } from '@angular/core';
import { CheckoutService } from '../../../services/checkout.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Input()
  payment;

  selectedPaymentMethod: string;

  paymentLogos = [ 
    {
      name: "bitcoin",
      logo: "assets/img/checkout/bitcoin@2x.png"
    },
    {
      name: "bitcoincash",
      logo: "assets/img/checkout/bitcoin@2x.png"
    },
    {
      name: "etherium",
      logo: "assets/img/checkout/Eth.png"
    },
    {
      name: "litecoin",
      logo: "assets/img/checkout/litecoin@2x.png"
    },
  ]

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
    console.log("inside payment", this.payment)
  }

  goToStep(step: string) {
    this.checkoutService.loadCheckoutStep$.next(step)
  }

  handlePaymentString(paymentMethod: string, paymentString: string){
    this.selectedPaymentMethod = paymentMethod;
    console.log(paymentMethod)
    console.log(paymentString)
  }

}
