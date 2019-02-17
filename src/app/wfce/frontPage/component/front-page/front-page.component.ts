import { Component, OnInit } from '@angular/core';
import { LeagueSelectedService } from '../../services/league-selected.service';
import { TimelineService } from '../../services/timeline.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { WorldMapService } from '../../services/world-map.service';
import { DataNavbarService } from '../../services/data-navbar.service';
import { TeamsSelectedService } from '../../services/teams-selected.service';
import { AuthService } from '../../../auth/auth.service';
import { SpinnerService } from '../../../shared-modules/spinner/spinner.service';
import { NavbarIndicatorService } from '../../../shared-modules/navbar/navbar-indicator.service';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({height: '100%', opacity: 1})),
      transition(':enter', [
        style({ height: '0%', opacity: 0 }),
        animate('.5s ease-in-out')
      ]),
      transition(':leave', [
        animate('.5s ease-in-out', style({height: '0%', opacity: 0}))
      ])
    ])
  ]
})
export class FrontPageComponent implements OnInit {

  /**
   * Attribute that navigates between tabs in data navbar
   */
  public toggleData;

  public isLeagueSelected: boolean;
  public timelineSelected: boolean;

  public message = "";
  public messageSuccess = true;
  public indicator = false;

  /**
   * Getting countries from api in resolver service
   */
  public backendCountries;
  user;
  showSignupDialog = false;

  constructor(private leagueSelected: LeagueSelectedService,
              private timelineService: TimelineService,
              private authService: AuthService,
              private _route: ActivatedRoute,
              private worldMapService: WorldMapService,
              private dataNavbarService: DataNavbarService,
              private teamsSelectedService: TeamsSelectedService,
              private spinnerService: SpinnerService,
              private indicatorService: NavbarIndicatorService) {
    this.backendCountries =  this._route.snapshot.data["backendCountries"];
    if(this.dataNavbarService.getToggleData() != undefined){
      this.toggleData = this.dataNavbarService.getToggleData();
    }
    this.spinnerService.closeSpinner();
    /* const [ countries, teams ] = this._route.snapshot.data["backendCountries"];
    this.backendCountries = countries;
    this.teamsSelectedService.setMostValuableTeams(teams); */      
    this.worldMapService.setBackendCountries(this.backendCountries);
   }

  ngOnInit() {
    this.dataNavbarService.checkAndDoLateScroll();
    this.leagueSelected.currentLeague$.subscribe((value)=>{
      if(value)
      {
        this.isLeagueSelected = true;
      }
    });
    this.timelineService.toggleTimeline$.subscribe((value)=>{
      this.timelineSelected = value;
    });
    this.dataNavbarService.toggleData$.subscribe((value)=>{
      this.toggleData = value;
    })

    this.authService.currentUser.subscribe((user) => {
      this.user = user;
    });

    this.authService.openSignupDialog.subscribe(show => {
      this.showSignupDialog = show;
    });
    this.indicatorService.toggleIndicator$.subscribe((value)=>{
      this.indicator = value;
    })
    this.indicatorService.data$.subscribe((value)=>{
      this.message = value['message'];
      this.messageSuccess = value['success']
      console.log(value);
      if(this.message !== undefined){
        this.indicatorService.openIndicator();
      }
    })

    this.user = this.authService.user;
  }

  animationDone($event){
      this.timelineService.scrollToTimeline(this.timelineSelected);
  }



}
