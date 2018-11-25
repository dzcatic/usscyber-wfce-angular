import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';


declare const FB: any;
declare const gapi: any;
declare const Msal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public microsoftUser = {};
  public googleUser = {};
  public auth2: any;

  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  googleAuth() {

    localStorage.setItem('userSigninType', 'login');
    this.authService.loginGoogle();
  }
  microsoftAuth() {

    localStorage.setItem('userSigninType', 'login');
    this.authService.loginMicrosoft();
  }

}
