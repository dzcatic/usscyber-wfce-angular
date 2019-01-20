import { Component, OnInit } from '@angular/core';
import { WorldMapService } from '../../../../frontPage/services/world-map.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TopTeamsService } from '../../../services/teams.service';

@Component({
  selector: 'app-user-teams-filter',
  templateUrl: './user-teams-filter.component.html',
  styleUrls: ['./user-teams-filter.component.scss'],
  animations: [
    trigger('appearAndMove', [
      state('in', style({width: 'fit-content', opacity: 1})),
      transition(':enter', [
        style({ width: '0%', opacity: 0 }),
        animate('.5s ease-in-out')
      ]),
      transition(':leave', [
        animate('.5s ease-in-out', style({width: '0%', opacity: 0}))
      ])
    ])
  ]
})
export class UserTeamsFilterComponent implements OnInit {

  continents;
  countries;
  leagues;
  showCountriesFilter = false;
  showLeaguesFilter = false;

  constructor(private worldMapService: WorldMapService,
              private teamsService: TopTeamsService) { }

  ngOnInit() {
    this.continents = this.worldMapService.importContinents();
  }

  setSelectedContinent($event){
    
    this.teamsService.loadCountriesByContinent($event.id).subscribe((data)=>{
      this.countries = data[0]; //this has to be replaced
      console.log(this.countries);
      this.showCountriesFilter = true;
    })
    console.log("insideFilter", $event);
  }

  setSelectedCountry($event){
    
    this.teamsService.loadLeaguesByCountry($event.id).subscribe((data)=>{
      this.leagues = data; //this has to be replaced
      console.log(this.leagues);
      this.showLeaguesFilter = true;
    })
    console.log("insideFilter", $event);
  }
 
}
