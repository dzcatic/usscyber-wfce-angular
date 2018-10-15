import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CartService } from '../../services/cart.service';
import { UserDataToggleService } from '../../services/user-data-toggle.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public toggleData: string;
  public user;
  public numberOfCartItems;

  constructor(private userService: UserService, private cartService: CartService, private toggleDataService: UserDataToggleService) {
    this.user = userService.getUser();
    this.numberOfCartItems = cartService.getCartItems();
   }

  ngOnInit() {
    this.toggleDataService.toggleUserData$.subscribe((value)=>{
      this.toggleData = value;
    });
  }

}
