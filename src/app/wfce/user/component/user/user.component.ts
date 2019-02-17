import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../../auth/auth.service';
import { Cart } from '../../../interfaces/cart.interface';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { NavbarIndicatorService } from '../../../shared-modules/navbar/navbar-indicator.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
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
export class UserComponent implements OnInit {

  public toggleData: string;
  public user;
  public userr;
  public cart: Cart;
  public numberOfCartItems;

  public message = "";
  public messageSuccess = true;
  public indicator = false;

  constructor(private userService: UserService, 
              private authService: AuthService,
              private _route: ActivatedRoute,
              private cartService: CartService,
              private indicatorService: NavbarIndicatorService) {
    console.log("user se opet poziva");
    // this.user = userService.getUser();
    this.user = authService.user;
    this.cart =  this._route.snapshot.data["cartData"];
    this.cartService.refreshCart(this.cart);
    console.log("inside checkout" ,this.cart);
   }

  ngOnInit() {

    this.indicatorService.toggleIndicator$.subscribe((value)=>{
      this.indicator = value;
    })
    this.indicatorService.data$.subscribe((value)=>{
      this.message = value['message'];
      this.messageSuccess = value['success']
      console.log(value);
      if(this.message !== undefined){
        this.indicatorService.openIndicator();
      }
    })
  }

}
