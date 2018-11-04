import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  openDashboard(){
    this._router.navigate(['dashboard'], { relativeTo: this._route });
  }

  openSignUp(){
    this._router.navigate(['signup'], { relativeTo: this._route });
  }

}
