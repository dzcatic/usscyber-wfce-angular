import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FrontPageComponent } from './component/front-page/front-page.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { FrontPageResolverService } from './services/resolver-service/front-page-resolver.service';

const routes: Routes = [
  {
    path: "",
    component: FrontPageComponent,
    resolve: {
      backendCountries: FrontPageResolverService
    }
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
