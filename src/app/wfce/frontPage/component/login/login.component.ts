import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../shared-modules/services/auth.service';


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


  googleAuth() {
    this.authService.loginGoogle();
  }
  microsoftAuth() {
    this.authService.loginMicrosoft();
  }
  ngOnInit() {
   // this.authService.login();
  }



  /**
   * Google login initialization
   */

  /* public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '710270792144-h8ltih91m5s016cv3ul2u8jmaa7ciosg.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        const profile = googleUser.getBasicProfile();
        const authResponse =  googleUser.getAuthResponse();

        this.googleUser['access_token'] = authResponse.access_token;
        this.googleUser['expires'] = (+new Date()/1000 + authResponse.expires_in) * 1000;
        this.googleUser['id'] = profile.getId();

        localStorage.setItem('_wfce_at', this.googleUser['access_token']);

        this.httpClient.post('http://13.66.167.226/wfceApp/public/api/userinfo', { user: this.googleUser},{   headers: {'Authorization': 'Bearer ' + this.googleUser['access_token']  }, withCredentials: true }).subscribe(data => {
          console.log(data)
        });

      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  } */

  /*************************************************************** */


  /**
   * MICROSOFT LOGIN INITIALIZATION
   */
 /*  public applicationConfig = {
    clientID: 'dd14710c-32b2-4f0d-9051-e405e2d8c2a4',
    graphScopes: ['user.read'],
    graphEndpoint: 'https://graph.microsoft.com/v1.0/me'
  };

  public myMSALObj = new Msal.UserAgentApplication(this.applicationConfig.clientID, null, this.acquireTokenRedirectCallBack,
    {storeAuthStateInCookie: true, cacheLocation: 'localStorage'});

  public microsoftLogin() {
    this.myMSALObj.loginPopup(this.applicationConfig.graphScopes).then( (idToken) => {
      // Login Success
      // this.showWelcomeMessage();
      const expire = this.parseMicrosoftJWT(idToken).exp * 1000;

      this.microsoftUser["expires"] = expire;
      this.acquireTokenPopupAndCallMSGraph();
  }, function (error) {
      console.log(error);
  });
  }

  public acquireTokenPopupAndCallMSGraph() {
    //Call acquireTokenSilent (iframe) to obtain a token for Microsoft Graph
    this.myMSALObj.acquireTokenSilent(this.applicationConfig.graphScopes).then( (accessToken) => {
      this.microsoftUser["access_token"] = accessToken;
      localStorage.setItem('_wfce_at', this.microsoftUser['access_token']);
      this.callMSGraph(this.applicationConfig.graphEndpoint, accessToken, this.graphAPICallback);

    }, function (error) {
       //  console.log(error);
        // Call acquireTokenPopup (popup window) in case of acquireTokenSilent failure due to consent or interaction required ONLY
        if (error.indexOf('consent_required') !== -1 || error.indexOf('interaction_required') !== -1 || error.indexOf('login_required') !== -1) {
          this.myMSALObj.acquireTokenPopup(this.applicationConfig.graphScopes).then(function (accessToken) {
            this.callMSGraph(this.applicationConfig.graphEndpoint, accessToken, this.graphAPICallback);
            }, function (error) {
                console.log(error);
            });
        }
    });
  } */

  /* public acquireTokenRedirectCallBack(errorDesc, token, error, tokenType) {
   if (tokenType === 'access_token') {
       this.callMSGraph(this.applicationConfig.graphEndpoint, token, this.graphAPICallback);
   } else {
       console.log('token type is:' + tokenType);
   }
  }

  public callMSGraph(theUrl, accessToken, callback) {
   this.httpClient.get(theUrl, { headers: {'Authorization': 'Bearer ' + accessToken}}).subscribe(data => {
    this.microsoftUser["id"] = data["id"]; */

    /* this.httpClient.get('https://graph.microsoft.com/v1.0/users/'+data["userPrincipalName"]+'/photo/$value', { headers: {'Authorization': 'Bearer ' + accessToken}}).subscribe(
        data => console.log(data),
        error => console.log("error", error) // error path
      ); */
    /* this.httpClient.post('http://13.66.167.226/wfceApp/public/api/userinfo', { data }, { withCredentials: true }).subscribe(data => {
      console.log(data);
      });
    callback(this.microsoftUser)
    });

  }

  public graphAPICallback(data) {
    //this.httpClient.post('http://13.66.167.226/wfceApp/public/api/userinfo', { data }, { withCredentials: true }).subscribe(data => {
            console.log(data);
      //    })
  }

  public parseMicrosoftJWT(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  ngAfterViewInit(){
    this.googleInit();
  } */

}
