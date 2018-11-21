import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { UserLogin } from '../model/user.login.interface';

(window as any).global = window;

@Injectable()
export class AuthService {

  cachedRequests: Array<HttpRequest<any>> = [];

  private user: UserLogin = {
      id: null,
      access_token: null,
      access_token_expire: null
  };

  auth0 = new auth0.WebAuth({
    clientID: 'aq5W8YIBfbbEaWkdXba9VBvFUF04AB6S',
    domain: 'codegeass.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/dashboard',
    scope: 'openid profile email'
  });



  constructor(public router: Router, public http: HttpClient ) {}

  public login(): void {
    //this.auth0.authorize();
  }
  public loginGoogle() {
    this.auth0.authorize({
      connection: 'google-oauth2'
    });
  }

  public loginMicrosoft() {
    this.auth0.authorize({
      connection: 'windowslive'
    });
  }

   public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        console.log(authResult);
        this.setSession(authResult);
        this.setUser(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }


  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    /* this.http.get('http://13.66.167.226/wfceApp/public/api/countries/get')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      ); */
  }

  private setUser(authResult): void {
      let userSub = <String>authResult['idTokenPayload']['sub']
      let userId = userSub.split('|').pop();
      this.user.id = userId;
      this.user.access_token = authResult['accessToken'];
      this.user.access_token_expire = authResult['expiresIn'];
      this.http.post('http://13.66.167.226/wfceApp/public/api/logindummy', this.user)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  public getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

}
