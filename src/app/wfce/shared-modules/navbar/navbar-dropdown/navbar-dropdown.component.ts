import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.scss']
})
export class NavbarDropdownComponent implements OnInit {

  @Input()
  cart;

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    console.log("inside caer", this.cart)
  }

  openCheckout(){
    this._router.navigate(['checkout'], { relativeTo: this._route });
  }

}
