import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageComponent } from './component/front-page/front-page.component';

import { WorldMapComponent } from './component/world-map/world-map.component';
import { WorldMapService } from './services/world-map.service';

import { NavbarModule } from '../shared-modules/navbar/navbar.module';
import { FooterModule } from '../shared-modules/footer/footer.module';
import { DataNavbarComponent } from './component/data-navbar/data-navbar.component';
import { AreaSelectedService } from './services/area-selected.service';
import { CountryLeaguesNavigatorComponent } from './component/country-leagues-navigator/country-leagues-navigator.component';
import { MapGuideComponent } from './component/world-map/map-guide/map-guide.component';
import { AnimateSvgDirective } from './directives/animate-svg.directive';
import { ContinentCountryNavigatorComponent } from './component/continent-country-navigator/continent-country-navigator.component';
import { LeagueSelectedService } from './services/league-selected.service';
import { ScrollIntoViewDirective } from './directives/scroll-into-view.directive';
import { DataTableAreaComponent } from './component/data-table-area/data-table-area.component';
import { TimelineComponent } from './component/timeline/timeline.component';
import { TimelineStartComponent } from './component/timeline/timeline-start/timeline-start.component';
import { TimelineLineComponent } from './component/timeline/timeline-line/timeline-line.component';
import { TimelineNodeComponent } from './component/timeline/timeline-node/timeline-node.component';
import { TimelineHorizontalLineComponent } from './component/timeline/timeline-horizontal-line/timeline-horizontal-line.component';
import { TimelineSidePointComponent } from './component/timeline/timeline-side-point/timeline-side-point.component';
import { DashboardMockupsComponent } from './component/timeline/dashboard-mockups/dashboard-mockups.component';
import { TimelineTestimonialsComponent } from './component/timeline/timeline-testimonials/timeline-testimonials.component';
import { TimelineFooterComponent } from './component/timeline/timeline-footer/timeline-footer.component';
import { TimelineCoinComponent } from './component/timeline/timeline-coin/timeline-coin.component';
import { WorldMapImageComponent } from './component/world-map/world-map-image/world-map-image.component';
import { TimelineEndComponent } from './component/timeline/timeline-end/timeline-end.component';
import { TimelineCenteredPointComponent } from './component/timeline/timeline-centered-point/timeline-centered-point.component';
import { TimelineService } from './services/timeline.service';
import { FrontPageRoutingModule } from './front-page-routing.module';
import { LoginComponent } from './component/login/login.component';
import { LeftPanelComponent } from './component/login/left-panel/left-panel.component';
import { RightPanelComponent } from './component/login/right-panel/right-panel.component';
import { LeftPanelBoxComponent } from './component/login/left-panel/left-panel-box/left-panel-box.component';
import { SignupComponent } from './component/signup/signup.component';
import { FrontPageResolverService } from './services/resolver-service/front-page-resolver.service';
import { GlobalErrorService } from './services/global.error.state.service';
import { RequestService } from './services/request.service';
import { HttpModule } from '@angular/http';
import { DataNavbarService } from './services/data-navbar.service';
import { UserTableDataComponent } from './component/data-table-area/user-table-data/user-table-data.component';
import { TeamsSelectedService } from './services/teams-selected.service';
import { UserTableRowMatchComponent } from './component/data-table-area/user-table-data/user-table-row-match/user-table-row-match.component';
import { UserTableRowClubComponent } from './component/data-table-area/user-table-data/user-table-row-club/user-table-row-club.component';
import { UserTableOptionsComponent } from './component/data-table-area/user-table-data/user-table-options/user-table-options.component';
import { MostValuableTeamsComponent } from './component/data-table-area/most-valuable-teams/most-valuable-teams.component';
import { UserTableTitleComponent } from './component/data-table-area/user-table-title/user-table-title.component';
import { UserAutocompleteComponent } from './component/data-table-area/user-autocomplete/user-autocomplete.component';
import { UserAutocompleteDropdownComponent } from './component/data-table-area/user-autocomplete/user-autocomplete-dropdown/user-autocomplete-dropdown.component';

import { UserModule } from '../user/user.module';
import { SpinnerModule } from '../shared-modules/spinner/spinner.module';
import { SignupFormComponent } from './component/signup/signup-form/signup-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from '../shared-modules/modal/modal.module';
import { TranslateModule } from '@ngx-translate/core';
import { FrontPageTranslationModule } from './pipes/translation.pipe.module';
import { SharedTranslationModule } from '../shared-modules/pipes/translation.pipe.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    FooterModule,
    ModalModule,
    SpinnerModule,
    FrontPageRoutingModule,
    NgbTooltipModule,
    HttpModule,
    NgbModule,
    FrontPageTranslationModule,
    SharedTranslationModule,
    UserModule
  ],
  declarations: [FrontPageComponent,
                 WorldMapComponent,
                 DataNavbarComponent,
                 CountryLeaguesNavigatorComponent,
                 MapGuideComponent,
                 AnimateSvgDirective,
                 ContinentCountryNavigatorComponent,
                 ScrollIntoViewDirective,
                 DataTableAreaComponent,
                 TimelineComponent,
                 TimelineStartComponent,
                 TimelineLineComponent,
                 TimelineNodeComponent,
                 TimelineHorizontalLineComponent,
                 TimelineSidePointComponent,
                 DashboardMockupsComponent,
                 TimelineTestimonialsComponent,
                 TimelineFooterComponent,
                 TimelineCoinComponent,
                 WorldMapImageComponent,
                 TimelineEndComponent,
                 TimelineCenteredPointComponent,
                 LoginComponent,
                 LeftPanelComponent,
                 RightPanelComponent,
                 LeftPanelBoxComponent,
                 SignupComponent,
                 SignupFormComponent,
                 UserTableTitleComponent,
                 UserTableDataComponent,
                 UserTableRowMatchComponent,
                 UserTableRowClubComponent,
                 UserTableOptionsComponent,
                 MostValuableTeamsComponent,
                 UserAutocompleteComponent,
                 UserAutocompleteDropdownComponent
                ],
  providers: [WorldMapService,
             AreaSelectedService,
             LeagueSelectedService,
             TimelineService,
             FrontPageResolverService,
             GlobalErrorService,
            RequestService,
            DataNavbarService,
            TeamsSelectedService
          ]
})
export class FrontPageModule { }
