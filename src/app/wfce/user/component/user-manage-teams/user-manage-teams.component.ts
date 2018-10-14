import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-user-manage-teams',
  templateUrl: './user-manage-teams.component.html',
  styleUrls: ['./user-manage-teams.component.scss']
})
export class UserManageTeamsComponent implements OnInit {

  private topTeams;

  styleTopTeams={
    club: {
        component: "image-rows",
        league: "small fade"
    },
    points: {},
    availableCoins: {},
    marketPrice: {
        revert: true,
        icon: true,
        component: "image-rows",
        change: "small fade"
    }
  };

  constructor(private topTeamsService: TopTeamsService) {
    this.topTeams = topTeamsService.getTopTeams();
  }

  ngOnInit() { 
  }

}
