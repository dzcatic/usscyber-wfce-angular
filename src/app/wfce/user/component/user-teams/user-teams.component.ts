import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-user-teams',
  templateUrl: './user-teams.component.html',
  styleUrls: ['./user-teams.component.scss']
})
export class UserTeamsComponent implements OnInit {

  private topTeams;

  styleTopTeams={
    club: {
        component: "image-rows",
        league: "small fade"
    },
    points: {},
    availableCoins: {},
    marketPrice: {
        image: "assets/img/timeline/Group_29.png",
        component: "image-rows",
        change: "small fade"
    }
  };

  constructor(private topTeamsService: TopTeamsService) {
    this.topTeams = topTeamsService.getLongTeams();
  }

  ngOnInit() { 
  }

}
