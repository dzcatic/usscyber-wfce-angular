import { Component, OnInit } from '@angular/core';
import { LeagueSelectedService } from '../../services/league-selected.service';
import { TimelineService } from '../../services/timeline.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { WorldMapService } from '../../services/world-map.service';
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


  public isLeagueSelected: boolean;
  public timelineSelected: boolean;
  private backendCountries;
  user;
  showSignupDialog = false;

  constructor(private leagueSelected: LeagueSelectedService,
              private timelineService: TimelineService,
              private authService: AuthService,
              private _route: ActivatedRoute,
              private worldMapService: WorldMapService) {
    this.backendCountries =  this._route.snapshot.data["backendCountries"];
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

    this.authService.currentUser.subscribe((user) => {
      this.user = user;
    });

    this.authService.openSignupDialog.subscribe(show => {
      this.showSignupDialog = show;
    });

    this.user = this.authService.user;
  }

  animationDone($event){
      this.timelineService.scrollToTimeline(this.timelineSelected);
  }



}
