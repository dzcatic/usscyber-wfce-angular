import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../../services/teams.service';
import { ScheduledMatchesService } from '../../services/scheduled-matches.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  public topTeams;
  public scheduledMatches;

  styleTopTeams={
    club: {
        component: "image-rows",
        league: "small fade"
    },
    points: {},
    marketPrice: {
        component: "image-rows",
        change: "small fade"
    }
  };

  styleScheduledMatches={
    component: "match",
    club1: {
      component: "image-rows",
      league: "small fade"
    },
    club2: {
      revert: true,
      component: "image-rows",
      league: "small fade"
    },
};


  constructor(private topTeamsService: TopTeamsService, private scheduledMatchesService: ScheduledMatchesService) {
    this.topTeams = topTeamsService.getTopTeams();
    this.scheduledMatches = scheduledMatchesService.getMatches();
   }

  ngOnInit() {
  }

}
