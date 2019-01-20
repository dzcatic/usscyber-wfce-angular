import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{

      if(this.authService.user) {
        return of(true)
      } else {
        return this.authService.getUserData().pipe(
            map(user => {
                let userData = user['payload'];
                // if payload is empty array ( case when there is no user found ) navigate to login
                if(userData.constructor === Array && userData.length == 0){
                  this.authService.user = null;
                  //if(!localStorage.getItem('returnUrl')){
                    localStorage.setItem('returnUrl', state.url);
                  //}
                  this.router.navigate(['/login']);
                  return false;
                  // if user is not set, set him
                } else if ( !this.authService.user ) {
                  this.authService.user = userData;
                   return true;
                } else {
                  return true;
                }
            }),
            catchError((err) => {
              //if(!localStorage.getItem('returnUrl')){
                localStorage.setItem('returnUrl', state.url);
              //}
              
              this.router.navigate(['/login']);
                return of(false);
            })
        )
      }
  }
}
