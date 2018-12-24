import { Component, NgZone, Renderer2 } from '@angular/core';
import { AuthService } from './wfce/auth/auth.service';
import { SpinnerService } from './wfce/shared-modules/spinner/spinner.service';
import { Router, RouterEvent, NavigationStart, NavigationError, NavigationCancel, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WFCE';
  showSpinner = true;

  constructor(public auth: AuthService, 
              private spinnerService: SpinnerService,
              private router: Router,
              private ngZone: NgZone,
              private renderer: Renderer2) {
    auth.handleAuthentication();

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.ngZone.runOutsideAngular(() => {
        this.showSpinner = true;
      })
    }
    if (event instanceof NavigationEnd) {
      this.showSpinner = false;
    }
    if (event instanceof NavigationCancel) {
      this.showSpinner = false;
    }
    if (event instanceof NavigationError) {
      this.showSpinner = false;
    }
  }

  ngOnInit(){

  }
}
