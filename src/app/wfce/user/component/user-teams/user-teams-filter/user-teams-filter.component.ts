import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() 
  setSelected: EventEmitter<any> = new EventEmitter();

  constructor(private worldMapService: WorldMapService,
              private teamsService: TopTeamsService) { }

  ngOnInit() {
    this.continents = this.worldMapService.importContinents();
  }

  setSelectedContinent($event){
    this.setSelected.emit("continent");
    this.showCountriesFilter = false;
    this.showLeaguesFilter = false;
    this.teamsService.filterByContinent($event.id).subscribe((data)=>{
      
        const [ countries, teams ] = data;
        console.log( "countries" , countries);
        console.log( "teams" , teams);
        this.countries = countries[0]; //this has to be replaced
        console.log(this.countries);
        this.teamsService.setNumberOfPages(teams['numberOfPages']);
        this.teamsService.setTopTeams(teams['data']);
        
        this.showCountriesFilter = true;
        console.log("insideFilter", $event);
  });
}

  setSelectedCountry($event){
    this.setSelected.emit("country");
    this.showLeaguesFilter = false;
    this.teamsService.filterByCountry($event.id).subscribe((data)=>{
      
      const [ leagues, teams ] = data;
        console.log( "countries" , leagues);
        console.log( "teams" , teams);
        this.leagues = leagues; //this has to be replaced
        console.log(this.leagues);
        this.teamsService.setNumberOfPages(teams['numberOfPages']);
        this.teamsService.setTopTeams(teams['data']);
        this.showLeaguesFilter = true;
      console.log("insideFilter", $event);
    })
    console.log("insideFilter", $event);
  }
 
}
