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
import { UserModule } from '../user/user.module';
import { SignupFormComponent } from './component/signup/signup-form/signup-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    FooterModule,
    FrontPageRoutingModule,
    NgbTooltipModule,
    HttpModule,
    NgbModule,
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
                 TimelineCenteredPointComponent, LoginComponent, LeftPanelComponent, RightPanelComponent, LeftPanelBoxComponent, SignupComponent, SignupFormComponent],
  providers: [WorldMapService,
             AreaSelectedService,
             LeagueSelectedService,
             TimelineService,
             FrontPageResolverService,
             GlobalErrorService,
            RequestService
          ]
})
export class FrontPageModule { }
