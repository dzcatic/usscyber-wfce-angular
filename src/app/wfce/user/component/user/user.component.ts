import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public toggleData: string;
  public user;
  public userr;
  public numberOfCartItems;

  constructor(private userService: UserService, private cartService: CartService, private authService: AuthService) {
    // this.user = userService.getUser();
    this.user = authService.user;
    this.numberOfCartItems = cartService.getCartItems();
   }

  ngOnInit() {
  }

}
