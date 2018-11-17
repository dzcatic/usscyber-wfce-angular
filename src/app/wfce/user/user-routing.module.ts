import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { CheckoutComponent } from './component/checkout/checkout.component';

const routes: Routes = [
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
    path: "",
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
