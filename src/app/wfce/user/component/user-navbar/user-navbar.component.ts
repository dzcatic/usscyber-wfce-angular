import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import 'rxjs/add/operator/filter';
import { AuthService } from '../../../auth/auth.service';
import { Cart } from '../../../interfaces/cart.interface';
import { CartService } from '../../services/cart.service';
import { environment } from '../../../../../environments/environment';

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
  numberOfCartItems;
  cart: Cart;
  imageBaseUrl = environment.imageBaseUrl;

  @Input()
  user;
  

  constructor(private _router: Router, 
              private _route: ActivatedRoute, 
              private authService: AuthService,
              private cartService: CartService) {
    this.cartService.loadCart().subscribe((value)=>{
      this.cartService.refreshCart(value);
    })
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
    this.cartService.numberOfCartItems$.subscribe((value)=>{
      if(value == 0){
        this.numberOfCartItems = "";
      }
      else {
        this.numberOfCartItems = value;
      }
      
    })
    this.cartService.cart$.subscribe((value)=>{
      this.cart = value;
      console.log("inside icon", this.cart)
    })
  }

  openProfile(){
    if(this.dashboardActivated) {
      this._router.navigate(['profile']);
    } else {
      this._router.navigate(['profile']);
    }

  }

  openCart(){
    this.dropdownSelected = !this.dropdownSelected;
  }

  openDashboard(){
    if(this.dashboardActivated) {
      this._router.navigate(['/']);
    } else {
      this._router.navigate(['dashboard']);
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
