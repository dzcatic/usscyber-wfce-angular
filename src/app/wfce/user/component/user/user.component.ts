import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public toggleData: string;
  public user;
  public numberOfCartItems;

  constructor(private userService: UserService, private cartService: CartService) {
    this.user = userService.getUser();
    this.numberOfCartItems = cartService.getCartItems();
   }

  ngOnInit() {
  }

}
