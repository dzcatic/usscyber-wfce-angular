import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-navbar-dropdown',
  templateUrl: './user-navbar-dropdown.component.html',
  styleUrls: ['./user-navbar-dropdown.component.scss']
})
export class UserNavbarDropdownComponent implements OnInit {

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  openCheckout(){
    this._router.navigate(['checkout'], { relativeTo: this._route });
  }

}
