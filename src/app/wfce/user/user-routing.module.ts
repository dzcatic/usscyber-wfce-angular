import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { UserTeamsComponent } from './component/user-teams/user-teams.component';
import { UserManageTeamsComponent } from './component/user-manage-teams/user-manage-teams.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { UserGuardService } from '../auth/user.guard.service';

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    canActivate: [UserGuardService],
    children: [
      {
        path: "",
        component: UserDashboardComponent
      },
      {
        path: "view-teams",
        component: UserTeamsComponent
      },
      {
        path: "manage-teams",
        component: UserManageTeamsComponent
      },
      {
        path: "profile",
        component: UserProfileComponent
      },
      {
        path: "checkout",
        component: CheckoutComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
