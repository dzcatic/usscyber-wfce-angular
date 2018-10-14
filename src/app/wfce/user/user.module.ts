import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { NavbarModule } from '../shared-modules/navbar/navbar.module';
import { FooterModule } from '../shared-modules/footer/footer.module';
import { UserComponent } from './component/user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserNavbarComponent } from './component/user-navbar/user-navbar.component';
import { UserDataNavbarComponent } from './component/user-data-navbar/user-data-navbar.component';
import { UserService } from './services/user.service';
import { CartService } from './services/cart.service';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { UserBoxComponent } from './component/user-profile/user-box/user-box.component';
import { UserDataToggleService } from './services/user-data-toggle.service';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { UserDashboardBoxesComponent } from './component/user-dashboard/user-dashboard-boxes/user-dashboard-boxes.component';
import { UserDashboardBoxComponent } from './component/user-dashboard/user-dashboard-boxes/user-dashboard-box/user-dashboard-box.component';
import { UserDashboardBoxDataComponent } from './component/user-dashboard/user-dashboard-boxes/user-dashboard-box/user-dashboard-box-data/user-dashboard-box-data.component';
import { UserDashboardBoxTitleComponent } from './component/user-dashboard/user-dashboard-boxes/user-dashboard-box/user-dashboard-box-title/user-dashboard-box-title.component';
import { UserDashboardBoxFooterComponent } from './component/user-dashboard/user-dashboard-boxes/user-dashboard-box/user-dashboard-box-footer/user-dashboard-box-footer.component';
import { UserTableComponent } from './component/user-table/user-table.component';
import { UserTableTitleComponent } from './component/user-table/user-table-title/user-table-title.component';
import { TopTeamsService } from './services/teams.service';
import { UserTableDataComponent } from './component/user-table/user-table-data/user-table-data.component';
import { UserTableRowClubComponent } from './component/user-table/user-table-data/user-table-row-club/user-table-row-club.component';
import { ScheduledMatchesService } from './services/scheduled-matches.service';
import { UserTeamsComponent } from './component/user-teams/user-teams.component';
import { UserManageTeamsComponent } from './component/user-manage-teams/user-manage-teams.component';
import { UserTableRowMatchComponent } from './component/user-table/user-table-data/user-table-row-match/user-table-row-match.component';
import { UserManageTeamsBoxesComponent } from './component/user-manage-teams/user-manage-teams-boxes/user-manage-teams-boxes.component';
import { UserChartAreaComponent } from './component/user-manage-teams/user-chart-area/user-chart-area.component';
import { ManageTeamService } from './services/manage-team.service';




@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    UserRoutingModule,
    FormsModule,
    NgxChartsModule
  ],
  declarations: [UserComponent, UserNavbarComponent, UserDataNavbarComponent, UserProfileComponent, UserBoxComponent, UserDashboardComponent, UserDashboardBoxesComponent, UserDashboardBoxComponent, UserDashboardBoxDataComponent, UserDashboardBoxTitleComponent, UserDashboardBoxFooterComponent, UserTableComponent, UserTableTitleComponent, UserTableDataComponent, UserTableRowClubComponent, UserTeamsComponent, UserManageTeamsComponent, UserTableRowMatchComponent, UserManageTeamsBoxesComponent, UserChartAreaComponent],
  providers: [UserService,
              CartService, 
              UserDataToggleService,
              TopTeamsService,
              ScheduledMatchesService,
              ManageTeamService]
})
export class UserModule { }
