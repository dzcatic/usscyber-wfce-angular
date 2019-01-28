import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { UserTeamsComponent } from './component/user-teams/user-teams.component';
import { UserManageTeamsComponent } from './component/user-manage-teams/user-manage-teams.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { UserGuardService } from '../auth/user.guard.service';
import { CheckoutResolverService } from './services/resolver-service/checkout-resolver.service';
import { ViewTeamsResolverService } from './services/resolver-service/view-teams-resolver.service';
import { ManageTeamsResolverService } from './services/resolver-service/manage-teams-resolver.service';
import { DashboardResolverService } from './services/resolver-service/dashboard-resolver.service';

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    canActivate: [UserGuardService],
    resolve: {
      cartData: CheckoutResolverService
    },
    children: [
      {
        path: "",
        component: UserDashboardComponent,
        resolve: {
          dashboardTeams: DashboardResolverService
        },
      },
      {
        path: "view-teams",
        component: UserTeamsComponent,
        resolve: {
          topTeams: ViewTeamsResolverService
        },
      },
      {
        path: "manage-teams",
        component: UserManageTeamsComponent, 
        resolve: {
          watchedTeams: ManageTeamsResolverService
        },
      },
      {
        path: "profile",
        component: UserProfileComponent
      },
      {
        path: "checkout",
        component: CheckoutComponent,
        
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
