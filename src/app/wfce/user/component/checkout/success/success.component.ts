import { Component, OnInit, Input } from '@angular/core';
import { CheckoutService } from '../../../services/checkout.service';
import { environment } from '../../../../../../environments/environment';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  imageBaseUrl = environment.imageBaseUrl;

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
  }

  closeModal() {
    this.checkoutService.showSuccesModal$.next(false);
  }
}
