import { Component, OnInit, Input } from '@angular/core';
import { CheckoutService } from '../../../services/checkout.service';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
  }

  closeModal() {
    this.checkoutService.showSuccesModal$.next(false);
  }
}
