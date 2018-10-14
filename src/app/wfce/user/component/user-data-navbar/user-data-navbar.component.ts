import { Component, OnInit } from '@angular/core';
import { UserDataToggleService } from '../../services/user-data-toggle.service';

@Component({
  selector: 'app-user-data-navbar',
  templateUrl: './user-data-navbar.component.html',
  styleUrls: ['./user-data-navbar.component.scss']
})
export class UserDataNavbarComponent implements OnInit {

  constructor(private toggleDataService: UserDataToggleService) { }

  ngOnInit() {
  }

  openTeams(){
    this.toggleDataService.setToggleUserData('teams');
  }
  openManageTeams(){
    this.toggleDataService.setToggleUserData('manageTeams');
    
  }

}
