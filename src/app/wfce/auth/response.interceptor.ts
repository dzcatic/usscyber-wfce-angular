import 'rxjs/add/operator/do';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';


@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private router: Router, private auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
          // we can do here some other stuff with successful response
      }
      }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        // if user is unathorized cache his last request, reset his session and navigate him to login page
        if (err.status === 401) {
          this.auth.collectFailedRequest(request);
          this.auth.resetSession();
          this.router.navigate(['login']);
        }
      }
    });
  }
}
