import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import 'rxjs/add/operator/filter';
import { AuthService } from '../../../auth/auth.service';

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
  dashboardActivated = true;

  @Input()
  user;

  @Input()
  numberOfCartItems;

  constructor(private _router: Router, private _route: ActivatedRoute, private authService: AuthService) {
    console.log(this._router.url)
    if(this._router.url.includes('dashboard')){
      this.dashboardActivated = true;
    } else {
      this.dashboardActivated = false;
    }
  }

  ngOnInit() {
    this._router.events.filter(event => event instanceof NavigationEnd)
    .subscribe((event:NavigationEnd) => {
      if(event.url.includes('dashboard')){
      this.dashboardActivated = true;
    } else {
      this.dashboardActivated = false;
    }
    });
  }

  openProfile(){
    if(this.dashboardActivated) {
      this._router.navigate(['profile'], { relativeTo: this._route });
    } else {
      this._router.navigate(['dashboard','profile'], { relativeTo: this._route });
    }

  }

  openCart(){
    this.dropdownSelected = !this.dropdownSelected;
  }

  openDashboard(){
    if(this.dashboardActivated) {
      this._router.navigate(['/']);
    } else {
      this._router.navigate(['dashboard'], { relativeTo: this._route });
    }

  }

  logout() {
    console.log("usli")
    this.authService.user = null;
    this.authService.currentUser.next(null);
    this.authService.resetSession();
    this._router.navigate(['/']);
  }

}
