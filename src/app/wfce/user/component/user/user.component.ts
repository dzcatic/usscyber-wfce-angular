import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../../auth/auth.service';
import { Cart } from '../../../interfaces/cart.interface';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public toggleData: string;
  public user;
  public userr;
  public cart: Cart;
  public numberOfCartItems;

  constructor(private userService: UserService, 
              private authService: AuthService,
              private _route: ActivatedRoute,
              private cartService: CartService) {
    console.log("user se opet poziva");
    // this.user = userService.getUser();
    this.user = authService.user;
    this.cart =  this._route.snapshot.data["cartData"];
    this.cartService.refreshCart(this.cart);
    console.log("inside checkout" ,this.cart);
   }

  ngOnInit() {
  }

}
