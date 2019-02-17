import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../../user/services/cart.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Cart } from '../../interfaces/cart.interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({height: '100%', opacity: 1})),
      transition(':enter', [
        style({ height: '0%', opacity: 0 }),
        animate('.5s ease-in-out')
      ]),
      transition(':leave', [
        animate('.5s ease-in-out', style({height: '0%', opacity: 0}))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {

  dropdownSelected = false;
  imageBaseUrl = environment.imageBaseUrl;

  numberOfCartItems;
  cart: Cart;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit() {
    this.cartService.numberOfCartItems$.subscribe((value)=>{
      if(value == 0){
        this.numberOfCartItems = "";
      }
      else {
        this.numberOfCartItems = value;
      }
      
    })
    this.cartService.cart$.subscribe((value)=>{
      this.cart = value;
    })
  }

  openDashboard(){
    this._router.navigate(['dashboard'], { relativeTo: this._route });
  }

  openSignUp(){
    this._router.navigate(['signup'], { relativeTo: this._route });
  }

  openLogin(){
    this._router.navigate(['login'], { relativeTo: this._route });
  }

  openCart(){
    this.dropdownSelected = !this.dropdownSelected;
  }

}
