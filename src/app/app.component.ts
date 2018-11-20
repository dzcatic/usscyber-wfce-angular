import { Component } from '@angular/core';
import { AuthService } from './wfce/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WFCE';

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
