import { Component, OnInit, Input } from '@angular/core';
import { UserDataToggleService } from '../../services/user-data-toggle.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {

  @Input()
  user;

  @Input()
  numberOfCartItems;

  constructor(private toggleDataService: UserDataToggleService) { }

  ngOnInit() {
  }

  openProfile(){
    this.toggleDataService.setToggleUserData('profile');
  }

}
