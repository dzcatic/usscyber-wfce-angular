import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Subject, forkJoin } from 'rxjs';
import { CartService } from '../cart.service';

@Injectable()
export class CheckoutResolverService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

      return this._cartService.loadCart();
  }

  constructor(private _cartService: CartService) {}

}
