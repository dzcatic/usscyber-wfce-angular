import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../../services/teams.service';
import { ScheduledMatchesService } from '../../services/scheduled-matches.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  private topTeams;
  private scheduledMatches;

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
    club2: "revert"
};


  constructor(private topTeamsService: TopTeamsService, private scheduledMatchesService: ScheduledMatchesService) {
    this.topTeams = topTeamsService.getTopTeams();
    this.scheduledMatches = scheduledMatchesService.getMatches();
   }

  ngOnInit() {
  }

}
