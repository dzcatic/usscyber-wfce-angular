import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';


declare const FB: any;
declare const gapi: any;
declare const Msal: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public microsoftUser = {};
  public googleUser = {};
  public auth2: any;

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  ngOnInit() {

  }

  googleAuth() {
    this.authService.userSigninType = 'signup';
    this.authService.loginGoogle();
  }
  microsoftAuth() {
    this.authService.userSigninType = 'signup';
    this.authService.loginMicrosoft();
  }

}
