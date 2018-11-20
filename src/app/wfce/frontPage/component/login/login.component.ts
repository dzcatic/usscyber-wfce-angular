import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';


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

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  ngOnInit() {

  }

  googleAuth() {
    this.authService.loginGoogle();
  }
  microsoftAuth() {
    this.authService.loginMicrosoft();
  }

}
