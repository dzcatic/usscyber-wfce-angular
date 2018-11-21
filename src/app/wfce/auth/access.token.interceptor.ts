import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(this.auth.getAccessToken()) {
      request = request.clone({
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.auth.getAccessToken()}`
        })
      });
    }

    return next.handle(request);
  }
}
