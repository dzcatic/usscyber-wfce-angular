import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-data-navbar',
  templateUrl: './user-data-navbar.component.html',
  styleUrls: ['./user-data-navbar.component.scss']
})
export class UserDataNavbarComponent implements OnInit {

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  openTeams(){
    this._router.navigate(['view-teams']);
  }
  openManageTeams(){
    this._router.navigate(['manage-teams']);
  }

}
