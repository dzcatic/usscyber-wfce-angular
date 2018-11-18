import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({height: '100%', opacity: 1})),
      transition(':enter', [
        style({ height: '0%', opacity: 0 }),
        animate('.5s ease-in-out')
      ]),
      transition(':leave', [
        animate('.5s ease-in-out', style({height: '0%', opacity: 0}))
      ])
    ])
  ]
})
export class UserNavbarComponent implements OnInit {

  dropdownSelected = false;

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

  openCart(){
    this.dropdownSelected = !this.dropdownSelected;
  }

}
