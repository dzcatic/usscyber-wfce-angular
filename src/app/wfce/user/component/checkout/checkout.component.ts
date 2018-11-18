import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  animations: [
    trigger('flyInFromLeft', [
      state('left', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        animate('0.8s  ease', style({ transform: 'translateX(100%)' }))
      ])/* ,
      transition(':leave', [
        animate('0.8s ease', style({ transform: 'translateX(-100%)' }))
      ]) */
    ])
  ]
})
export class CheckoutComponent implements OnInit {

  checkoutStep: string;

  constructor(private checkoutService: CheckoutService) {

  }

  ngOnInit() {
    this.checkoutService.loadCheckoutStep$.subscribe((step) => {
      this.checkoutStep = step;
    })
  }

  goToStep(step: string) {
    this.checkoutService.loadCheckoutStep$.next(step)
  }


}