import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../../services/teams.service';
import { ScheduledMatchesService } from '../../services/scheduled-matches.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  public topTeams;
  public myTopTeams;
  public scheduledMatches;

  /* styleTopTeams={
    club: {
        component: "image-rows",
        name: {},
        league: "small fade"
    },
    points: {
    },
    marketPrice: {
        component: "image-rows",
        change: "small fade",
        image: "assets/img/dashboard/Bitmap.png"
    }
  }; */

  imageBaseUrl = environment.imageBaseUrl;

  public styleTopTeams={
    team: {
        component: "image-rows",
        name: {},
        league: "small fade"
    },
    points: {},
    marketPrice: {
      image: this.imageBaseUrl + "assets/img/dashboard/Bitmap.png",
      component: "image-rows",
      currentPrice: {},
      priceFluxPercentage: "small fade",
      
    }
  };

  styleScheduledMatches={
    component: "match",
    club1: {
      component: "image-rows",
      name: {},
      league: "small fade"
    },
    club2: {
      revert: true,
      component: "image-rows",
      name: {},
      league: "small fade"
    },
};


  constructor(private topTeamsService: TopTeamsService, 
              private scheduledMatchesService: ScheduledMatchesService,
              private _route: ActivatedRoute,
              private router: Router) { 
                let latestValues = this._route.snapshot.data["dashboardTeams"];
                const [ topTeams, myTopTeams ] = latestValues;
                console.log("topTeams", topTeams);
                console.log("myTopTeams", myTopTeams);
                this.topTeams = topTeams['data'];
                this.myTopTeams = myTopTeams['data'];

                
    //this.topTeams = topTeamsService.getTopTeams();
    this.scheduledMatches = scheduledMatchesService.getMatches();
   }

  ngOnInit() {
  }

  seeMore(navigate){
    this.router.navigate([navigate]);
  }

}
