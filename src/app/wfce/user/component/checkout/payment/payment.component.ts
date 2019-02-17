import { Component, OnInit, Input } from '@angular/core';
import { CheckoutService } from '../../../services/checkout.service';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Input()
  payment;

  selectedPaymentMethod: string;
  selectedStringQr: string;
  imageBaseUrl = environment.imageBaseUrl;

  paymentLogos = [ 
    {
      name: "bitcoin",
      logo: this.imageBaseUrl + "assets/img/checkout/crypto/bitcoin_PNG48.png"
    },
    {
      name: "bitcoincash",
      logo: this.imageBaseUrl + "assets/img/checkout/crypto/nus982esrz901.png"
    },
    {
      name: "etherium",
      logo: this.imageBaseUrl + "assets/img/checkout/crypto/eth.png"
    },
    {
      name: "litecoin",
      logo: this.imageBaseUrl + "assets/img/checkout/crypto/Litecoin.png"
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
    this.checkoutService.qrCodeString$.next(paymentString);
    console.log(paymentMethod)
    console.log(paymentString)
  }

}
