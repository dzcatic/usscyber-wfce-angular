import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../../services/teams.service';
import { ManageTeamService } from '../../services/manage-team.service';

@Component({
  selector: 'app-user-manage-teams',
  templateUrl: './user-manage-teams.component.html',
  styleUrls: ['./user-manage-teams.component.scss']
})
export class UserManageTeamsComponent implements OnInit {

  public topTeams;
  public selectedTeam;

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

  constructor(private topTeamsService: TopTeamsService, private manageTeamService: ManageTeamService) {
    this.topTeams = topTeamsService.getTopTeams();
    this.selectedTeam = manageTeamService.getTeam();
  }

  ngOnInit() { 
  }

}
