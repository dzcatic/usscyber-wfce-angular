import { Component, OnInit, Input } from '@angular/core';
import { AreaSelectedService } from '../../services/area-selected.service';
import { LeagueSelectedService } from '../../services/league-selected.service';

@Component({
  selector: 'app-country-leagues-navigator',
  templateUrl: './country-leagues-navigator.component.html',
  styleUrls: ['./country-leagues-navigator.component.scss']
})
export class CountryLeaguesNavigatorComponent implements OnInit {

  @Input()
  currentCountry;

  public leagues;


  constructor(private areaSelectedService: AreaSelectedService, private leagueSelectedService: LeagueSelectedService) { }

  ngOnInit() {
    this.leagueSelectedService.countryLeagues$.subscribe((leagues)=>{
      this.leagues = leagues;
      console.log(leagues)
    })
  }

  close() {
    this.areaSelectedService.setCurrentCountry("");
  }

  setLeague(){
    this.leagueSelectedService.setCurrentLeague(true);
  }

}
