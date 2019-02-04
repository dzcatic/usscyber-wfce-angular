import { Injectable, Injector } from '@angular/core';
import { AbstractService } from './abstract.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, Subject, of } from 'rxjs';
import { Cart } from '../../interfaces/cart.interface';

@Injectable()
export class CartService extends AbstractService {
  

  //private numberOfCartItems;
  numberOfCartItems$: BehaviorSubject<number> = new BehaviorSubject(0);
  cart$: Subject <Cart> = new BehaviorSubject(null);
  private cart: Cart;

  private _baseUrl: string = environment.apiUrl;
  http: HttpClient;
  _router: Router;

  constructor(injector: Injector) {
    super(injector);
    this.http = injector.get(HttpClient);
    this._router = injector.get(Router);

    }

  /* public importCart(){
      this.numberOfCartItems = 15;
  }
  
  public getCartItems() {
    this.importCart();
    return this.numberOfCartItems;
  } */

  public addToCart(teamId: number, amount: number){
        let objectToSend = {teamId : teamId,
                            amount : amount};
        this._map(this.http.post<any>(this._baseUrl + "cart/add",objectToSend, {withCredentials: true})).subscribe((data)=>{
          
          this.refreshCart(data);
        });
  }

  public updateCart(teamId: number, amount: number){
    let objectToSend = {teamId : teamId,
                        amount : amount};
    this._map(this.http.put<any>(this._baseUrl + "cart/update",objectToSend, {withCredentials: true})).subscribe((data)=>{
      
      this.refreshCart(data);
    });
}

  public loadCart(): Observable<any>{
    return this._map(this.http.get<any>(this._baseUrl + "cart/get", {withCredentials: true}));
  }

  public refreshCart(cart: Cart){
    console.log("inside service");
    this.cart = cart;
    this.numberOfCartItems$.next(this.cart.numberOfItems);
    this.cart$.next(this.cart);
    localStorage.setItem('laravel_session', this.cart.laravel_session);
  }

  public checkoutComplete(){
    console.log("ready for api", this.cart.id)
    /* return of({addresses: {
      bitcoincash: "qz97hfzx0e2pmlyp9zu3df89kyx9n4kvv5n37e6aru",
      bitcoin: "someString",
      etherium: "someString",
      litecoin: "someString" 
    }}); */
    return this._map(this.http.post<any>(this._baseUrl + "cart/checkout/complete/" + this.cart.id, {withCredentials: true}));
  }
}