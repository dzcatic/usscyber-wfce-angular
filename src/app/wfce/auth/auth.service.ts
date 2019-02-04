import * as auth0 from 'auth0-js';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { UserLogin } from '../model/user.login.interface';
import { UserSignup } from '../model/user.signup.interface';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { ServerResponse } from '../interfaces/server.resposne.interface';


(window as any).global = window;

@Injectable()
export class AuthService {

  userSigninType;
  cachedRequests: Array<HttpRequest<any>> = [];
  openSignupDialog: BehaviorSubject<boolean> = new BehaviorSubject(false);

  currentUser = new Subject();

  private userLogin: UserLogin = {
      id: null,
      access_token: null,
      access_token_expire: null,
      laravel_session: null
  };

  public userSignup: UserSignup = {
      id: null,
      idToken: null,
      name: null,
      first_name: null,
      family_name: null,
      access_token: null,
      email: null,
      access_token_expire: null,
      image_url: null
  };

  public user;
  public returnUrl = "/dashboard";
//redirectUri: 'http://usscyber.com/wfce/',
//redirectUri: 'http://localhost:4200',

  public testUser = {
      id: '12345',
      access_token: 'avaevaevaevae',
      access_token_expire: '3650',
      first_name: 'Aleksandar',
      family_name: 'Veselinovic',
      image_url: 'https://apis.live.net/v5.0/9ae514bc961aa34d/picture',
      email: '',
      mobile_phone: '',
      country: '',
      date_of_birth: '',
      language: ''

  }

  auth0 = new auth0.WebAuth({
    clientID: 'aq5W8YIBfbbEaWkdXba9VBvFUF04AB6S',
    domain: 'codegeass.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200',
    scope: 'openid profile email'
  });



  constructor(public router: Router, public http: HttpClient) {}

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


    // if there is no hash in url, it's not redirected by oAuth
    if(!window.location.hash) {
      // check if user is autheticated (access token valid), and set data about user
      this.http.get<ServerResponse>('http://13.66.167.226/wfceApp/public/api/userdata')
          .subscribe(
            (data) => {
              console.log(data);

              // server returned empty array, so user is not authenticated
              if(data.payload.constructor === Array && (data.payload as Array<any>).length == 0) {
                this.user = null;
              } else {
              this.user = data.payload;
              }
            },
            (err) => {
              console.log(err)
            }
          )

    } else {

      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          window.location.hash = '';
          this.setSession(authResult);
          console.log(authResult);
          this.userSigninType = localStorage.getItem('userSigninType');
          localStorage.removeItem('userSigninType');
          if(this.userSigninType === 'login') {
            this.setUserLogin(authResult);
          } else {
            this.setUserSignup(authResult);
          }
        } else if (err) {
          this.router.navigate(['login']);
          console.log(err);
        }
      });
    }


  }

  private setSession(authResult): void {
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
  }

  public resetSession(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('laravel_session');
  }

  /**
   * Fill information about logged in user, and send it to server
   * @param authResult response from oAuth0 server which contains information about user
   */
  private setUserLogin(authResult): void {

      let userSub = <String>authResult['idTokenPayload']['sub']
      let userId = userSub.split('|').pop();
      this.userLogin.id = userId;
      this.userLogin.access_token = authResult['accessToken'];
      this.userLogin.access_token_expire = +authResult['expiresIn'];
      this.userLogin.laravel_session = localStorage.getItem('laravel_session');

      // send to loginAPI
      this.http.post('http://13.66.167.226/wfceApp/public/api/login', this.userLogin)
      .subscribe(

        (user) => {
            if(!this.user) {
              this.user = user['payload'];
            }
            this.returnUrl = localStorage.getItem('returnUrl');
            if(this.returnUrl){
              localStorage.removeItem('returnUrl');
              this.router.navigate([this.returnUrl]);
            }
            else this.router.navigate(['dashboard']);
            
        },
        (err) => {
          // show error base on error type ( user is not signed up or some other error on server occurred)
          alert('Please sign up first!')
          this.router.navigate(['signup']);
        }
      );
  }

  /**
   * Fill information about signed up user, and send it to server
   * @param authResult response from oAuth0 server which contains information about user
   */
  private setUserSignup(authResult): void {

    let userSub = <String>authResult['idTokenPayload']['sub']
    let userId = userSub.split('|').pop();
    this.userSignup.id = userId;
    this.userSignup.idToken = authResult['idToken'];
    this.userSignup.name = authResult['idTokenPayload']['name'];
    this.userSignup.first_name = authResult['idTokenPayload']['given_name'];
    this.userSignup.family_name = authResult['idTokenPayload']['family_name'];
    this.userSignup.image_url = authResult['idTokenPayload']['picture'];
    this.userSignup.email = authResult['idTokenPayload']['email'];
    this.userSignup.access_token = authResult['accessToken'];
    this.userSignup.access_token_expire = authResult['expiresIn'];

    // send to signupAPI
    console.log(this.userSignup)
    // open signup dialog
    this.openSignupDialog.next(true);
}

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public getUserData() {
    return this.http.get('http://13.66.167.226/wfceApp/public/api/userdata')
  }

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
