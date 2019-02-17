import { Component, OnInit, Input } from '@angular/core';
import { AreaSelectedService } from '../../services/area-selected.service';
import { LeagueSelectedService } from '../../services/league-selected.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-country-leagues-navigator',
  templateUrl: './country-leagues-navigator.component.html',
  styleUrls: ['./country-leagues-navigator.component.scss']
})
export class CountryLeaguesNavigatorComponent implements OnInit {

  @Input()
  currentCountry;

  public leagues;
  imageBaseUrl = environment.imageBaseUrl;


  constructor(private areaSelectedService: AreaSelectedService, private leagueSelectedService: LeagueSelectedService) { }

  ngOnInit() {
    this.leagueSelectedService.countryLeagues$.subscribe((leagues)=>{
      this.leagues = leagues;
    })
  }

  close() {
    this.areaSelectedService.setCurrentCountry("");
  }

  setLeague(league){
    this.leagueSelectedService.setCurrentLeague(league);
  }

}
