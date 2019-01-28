import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../../../interfaces/cart.interface';
import { CartService } from '../../services/cart.service';

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
  payment;
  cart: Cart;

  constructor(private checkoutService: CheckoutService, 
              private httpClient: HttpClient, 
              private _route: ActivatedRoute,
              private cartService: CartService) {
    /* this.cart =  this._route.parent.snapshot.data["cartData"];
    this.cartService.refreshCart(this.cart);
    console.log("inside checkout" ,this.cart); */
  }

  ngOnInit() {
    this.checkoutService.loadCheckoutStep$.subscribe((step) => {
      
      switch(step) { 
        case 'payment': {
           this.cartService.checkoutComplete().subscribe((value)=>{
             this.payment = value;
             this.checkoutStep = step;
           })
           break; 
        } 
        case 'bill': { 
          this.checkoutStep = step;
           break; 
        } 
        default: { 
          this.checkoutStep = step;
           break; 
        } 
     } 
    });
    this.cartService.cart$.subscribe((value)=>{
      this.cart = value;
    });
  }

  goToStep(step: string) {
    this.checkoutService.loadCheckoutStep$.next(step)
  }


}
