import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  openProfile(){
    this._router.navigate(['profile'], { relativeTo: this._route });
  }

  openCheckout(){
    this._router.navigate(['checkout'], { relativeTo: this._route });
  }

}
