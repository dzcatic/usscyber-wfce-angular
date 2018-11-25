import * as auth0 from 'auth0-js';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { UserLogin } from '../model/user.login.interface';
import { UserSignup } from '../model/user.signup.interface';
import { Observable, BehaviorSubject, Subject } from 'rxjs';


(window as any).global = window;

@Injectable()
export class AuthService {

  userSigninType;
  cachedRequests: Array<HttpRequest<any>> = [];

  currentUser = new Subject();


  testObservable

  private userLogin: UserLogin = {
      id: null,
      access_token: null,
      access_token_expire: null
  };

  private userSignup: UserSignup = {
    id: null,
    name: null,
    image_url: null,
    email: null,
    access_token: null,
    access_token_expire: null
  };

  public user;

  auth0 = new auth0.WebAuth({
    clientID: 'aq5W8YIBfbbEaWkdXba9VBvFUF04AB6S',
    domain: 'codegeass.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200',
    scope: 'openid profile email'
  });



  constructor(public router: Router, public http: HttpClient ) {}

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

   public handleAuthentication() {

    if(!window.location.hash) {
      // check with backend is user autheticated (access token valid), and set data about user
      this.http.get('http://13.66.167.226/wfceApp/public/api/userdata')
          .subscribe(
            (data) => {
              console.log(data);
              //if user is not set, set him
                this.user = data["payload"];
                /* if(!this.user) {
                  this.user = {
                    name: "cree",
                    avatar: "assets/img/temp/pic.png",
                    email: "franciscoggg@gmail.com",
                    country: "London, United Kingdom",
                    role: "user"
                }
                } */
                if(this.user.constructor === Array && this.user.length == 0) {
                  this.user = null;
                }
                console.log(this.user);
              },
            err => console.log(err)
          )
    } else {
      /* let parsedObject = this.parseHash(window.location.hash);
      console.log(parsedObject);
      if(parsedObject) {
        window.location.hash = '';
        this.setSession(parsedObject);
        this.userSigninType = localStorage.getItem('userSigninType')
        localStorage.removeItem('userSigninType');

        if(this.userSigninType === 'login') {
          this.setUserLogin(parsedObject);
        } else {
          this.setUserSignup(parsedObject);
        }
      } else {
        this.router.navigate(['/login']);
      } */
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          window.location.hash = '';
          this.setSession(authResult);
          this.userSigninType = localStorage.getItem('userSigninType');
          localStorage.removeItem('userSigninType');
          if(this.userSigninType === 'login') {
            this.setUserLogin(authResult);
          } else {
            this.setUserSignup(authResult);
          }
        } else if (err) {
          this.router.navigate(['/login']);
          console.log(err);
        }
      });
    }


  }

  private parseHash(windowHash) {
    const parsedHashToObj = windowHash.substr(1).split("&")
    .map(v => v.split("="))
    .reduce( (pre, [key, value]) => ({ ...pre, [key]: value }), {} );

    let parsedJWT = this.parseJwt(parsedHashToObj['id_token']);
    parsedHashToObj['id_token_payload'] = parsedJWT;
    return parsedHashToObj;
  }

  private parseJwt(idToken) {
    let base64Url = idToken.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    let base64Decoded = window.atob(base64);
    if(base64Decoded) {
      try {
          let parsedBase64 = JSON.parse(base64Decoded);
          return parsedBase64;
      } catch(e) {
          console.log(e);
          this.router.navigate(['/login'])

      }
    }

  }


  private setSession(authResult): void {
    const expiresAt = JSON.stringify((+authResult.expires_in * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public resetSession() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  private setUserLogin(authResult): void {

      let userSub = <String>authResult['idTokenPayload']['sub']
      let userId = userSub.split('|').pop();
      this.userLogin.id = userId;
      this.userLogin.access_token = authResult['accessToken'];
      this.userLogin.access_token_expire = +authResult['expiresIn'];

      // send to loginAPI

      this.http.post('http://13.66.167.226/wfceApp/public/api/login',this.userLogin)
      .subscribe(

        // set user in authService

        (user) => {
            if(!this.user) {
              this.user = user['payload'];
            }
            this.router.navigate(['/dashboard']);
        },
        err => {
          alert('Please sign up first!')
          this.router.navigate(['/signup']);
        }
      );
  }

  private setUserSignup(authResult): void {
    let userSub = <String>authResult['idTokenPayload']['sub']
    let userId = userSub.split('|').pop();
    this.userSignup.id = userId;
    this.userSignup.name = authResult['idTokenPayload']['name'];
    this.userSignup.image_url = authResult['idTokenPayload']['picture'];
    this.userSignup.email = authResult['idTokenPayload']['email'];
    this.userSignup.access_token = authResult['accessToken'];
    this.userSignup.access_token_expire = authResult['expiresIn'];

    // send to signupAPI

    this.http.post('http://13.66.167.226/wfceApp/public/api/signup', this.userSignup)
    .subscribe(

      // set user in authService

      (user) => {
          console.log(user)
            if(!this.user) {
              // this.user = user;
              if(!this.user) {
                this.user = user['payload'];
              }
            }
            this.router.navigate(['/dashboard']);
        },
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

  /* public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  } */

  public getUserData() {
    return this.http.get('http://13.66.167.226/wfceApp/public/api/userdata')
  }

  /* public getUser() {
    return this.user;
  } */

  public getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the failed requests
    /* for(let i = 0; i < this.cachedRequests.length; i++) {

    } */
  }

}
