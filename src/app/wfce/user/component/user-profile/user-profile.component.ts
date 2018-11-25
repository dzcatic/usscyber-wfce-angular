import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public user;

  constructor(private userService: UserService, private authService: AuthService) {
    //this.user = userService.getUser();
    this.user = authService.user;
    console.log(this.user)
   }

  ngOnInit() {
  }

}
