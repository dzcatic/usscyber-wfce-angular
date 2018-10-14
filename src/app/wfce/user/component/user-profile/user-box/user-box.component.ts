import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent implements OnInit {

  @Input()
  user;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  saveChanges(){
    this.userService.saveUser(this.user);
  }

}
