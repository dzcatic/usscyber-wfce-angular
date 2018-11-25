import { Component, OnInit } from '@angular/core';
import { LeagueSelectedService } from '../../services/league-selected.service';
import { TimelineService } from '../../services/timeline.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { WorldMapService } from '../../services/world-map.service';
import { DataNavbarService } from '../../services/data-navbar.service';
import { TeamsSelectedService } from '../../services/teams-selected.service';
import { AuthService } from '../../../auth/auth.service';


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

  /**
   * Getting countries from api in resolver service
   */
  public backendCountries;
  user;

  constructor(private leagueSelected: LeagueSelectedService,
              private timelineService: TimelineService,
              private authService: AuthService,
              private _route: ActivatedRoute,
              private worldMapService: WorldMapService,
              private dataNavbarService: DataNavbarService,
              private teamsSelectedService: TeamsSelectedService) {
    this.backendCountries =  this._route.snapshot.data["backendCountries"];
    /* const [ countries, teams ] = this._route.snapshot.data["backendCountries"];
    this.backendCountries = countries;
    this.teamsSelectedService.setMostValuableTeams(teams); */      
    this.worldMapService.setBackendCountries(this.backendCountries);
   }

  ngOnInit() {
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
    })

    this.user = this.authService.user;
  }

  animationDone($event){
      this.timelineService.scrollToTimeline(this.timelineSelected);
  }



}
