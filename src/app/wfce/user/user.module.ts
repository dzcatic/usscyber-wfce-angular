import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { NavbarModule } from '../shared-modules/navbar/navbar.module';
import { FooterModule } from '../shared-modules/footer/footer.module';
import { ModalModule } from '../shared-modules/modal/modal.module';
import { UserComponent } from './component/user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserNavbarComponent } from './component/user-navbar/user-navbar.component';
import { UserDataNavbarComponent } from './component/user-data-navbar/user-data-navbar.component';
import { UserService } from './services/user.service';
import { CartService } from './services/cart.service';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { UserBoxComponent } from './component/user-profile/user-box/user-box.component';
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
import { UserTeamsFilterComponent } from './component/user-teams/user-teams-filter/user-teams-filter.component';
import { UserAutocompleteComponent } from './component/user-autocomplete/user-autocomplete.component';
import { UserAutocompleteDropdownComponent } from './component/user-autocomplete/user-autocomplete-dropdown/user-autocomplete-dropdown.component';
import { UserTableOptionsComponent } from './component/user-table/user-table-data/user-table-options/user-table-options.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { CartComponent } from './component/checkout/cart/cart.component';
import { PaymentComponent } from './component/checkout/payment/payment.component';
import { BillComponent } from './component/checkout/bill/bill.component';
import { CheckoutService } from './services/checkout.service';
import { SuccessComponent } from './component/checkout/success/success.component';

import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { UserNavbarDropdownComponent } from './component/user-navbar/user-navbar-dropdown/user-navbar-dropdown.component';
import { UserGuardService } from '../auth/user.guard.service';
import { Bill2Component } from './component/checkout/bill2/bill.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { GlobalErrorService } from './services/global.error.state.service';
import { RequestService } from './services/request.service';
import { CheckoutResolverService } from './services/resolver-service/checkout-resolver.service';
import { ViewTeamsResolverService } from './services/resolver-service/view-teams-resolver.service';
import { SpinnerModule } from '../shared-modules/spinner/spinner.module';
import { ManageTeamsResolverService } from './services/resolver-service/manage-teams-resolver.service';
import { DashboardResolverService } from './services/resolver-service/dashboard-resolver.service';
import { QRCodeModule } from 'angularx-qrcode';

import { UserTranslationModule } from './pipes/translation.pipe.module';
import { SharedTranslationModule } from '../shared-modules/pipes/translation.pipe.module';


@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    ModalModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbTooltipModule,
    NgxChartsModule,
    SpinnerModule,
    QRCodeModule,
    UserTranslationModule,
    SharedTranslationModule
  ],
  declarations: [UserComponent,
                 UserNavbarComponent,
                 UserDataNavbarComponent,
                 UserProfileComponent,
                 UserBoxComponent,
                 UserDashboardComponent,
                 UserDashboardBoxesComponent,
                 UserDashboardBoxComponent,
                 UserDashboardBoxDataComponent,
                 UserDashboardBoxTitleComponent,
                 UserDashboardBoxFooterComponent,
                 UserTableComponent,
                 UserTableTitleComponent,
                 UserTableDataComponent,
                 UserTableRowClubComponent,
                 UserTeamsComponent,
                 UserManageTeamsComponent,
                 UserTableRowMatchComponent,
                 UserManageTeamsBoxesComponent,
                 UserChartAreaComponent,
                 UserTeamsFilterComponent,
                 UserAutocompleteComponent,
                 UserAutocompleteDropdownComponent,
                 UserTableOptionsComponent,
                 CheckoutComponent,
                 CartComponent,
                 PaymentComponent,
                 BillComponent,
                 Bill2Component,
                 SuccessComponent, UserNavbarDropdownComponent
                ],
  providers: [UserService,
              CartService,
              GlobalErrorService,
              RequestService,
              TopTeamsService,
              ScheduledMatchesService,
              ManageTeamService,
              CheckoutService,
              UserGuardService,
              CheckoutResolverService,
              ViewTeamsResolverService,
              ManageTeamsResolverService,
              DashboardResolverService],
    exports:[UserNavbarComponent],
  entryComponents: [SuccessComponent]
})
export class UserModule { }
