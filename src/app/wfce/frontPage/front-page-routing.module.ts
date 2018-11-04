import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FrontPageComponent } from './component/front-page/front-page.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {
    path: "",
    component: FrontPageComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontPageRoutingModule {
}
