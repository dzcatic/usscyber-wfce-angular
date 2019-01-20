import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AbstractService } from './abstract.service';
import { environment } from '../../../../environments/environment';
import { Observable, forkJoin, of  } from 'rxjs';
import { LeagueSelectedService } from './league-selected.service';
import { TeamsSelectedService } from './teams-selected.service';
import { DataNavbarService } from './data-navbar.service';

@Injectable()
export class AreaSelectedService extends AbstractService  {

  private _baseUrl: string = environment.apiUrl;

  continentSelected$ = new BehaviorSubject<boolean>(false);
  countrySelected$ = new BehaviorSubject<boolean>(false);
  toggleCountriesList$ = new BehaviorSubject<boolean>(false);
  currentContinent$  = new BehaviorSubject<any>({
    id: 5,
    viewbox: "800 0 500 400",
    name: 'Europe',
    countries: []
  });//change this to object maybe
  currentCountry$ = new Subject();//change this to object maybe

  http: HttpClient;
  _router: Router;
  
  constructor(injector: Injector, 
              private leagueSelectedService: LeagueSelectedService,
              private teamsSelectedService: TeamsSelectedService,
              private dataNavbarService: DataNavbarService) {
    super(injector);
    this.http = injector.get(HttpClient);
    this._router = injector.get(Router);
    
  }

  setCurrentContinent(value){
    if(value != ""){
      
      const combined = Observable.forkJoin(
        this.loadMostValuableTeamsByContinent(value.id),
      )
      console.log("before load");
      combined.subscribe(latestValues => {
        //console.log( "all" , latestValues);
          const [ teams ] = latestValues;
          console.log("after load", value);
          //console.log( "leagues" , leagues);
          //console.log( "teams" , teams);
          
          
          
          setTimeout(()=>{
            
            this.setContinentSelected(true);
            this.currentContinent$.next(value);
            this.teamsSelectedService.setMostValuableTeams(teams);
            this.dataNavbarService.setToggleData({value: 'most-valuable-teams',
                                                scroll: false});
          }, 0)
          
      });
    }
    else{
      this.setContinentSelected(false);
      this.toggleCountriesList(false);
      this.setCurrentCountry("");
      this.currentContinent$.next(value);
    }
    
  }

  setCurrentCountry(value){
    if(value != ""){
      
      const combined = Observable.forkJoin(
        this.loadLeaguesByCountry(value.id),
        this.loadMostValuableTeamsByCountry(value.id),
      )
      
      combined.subscribe(latestValues => {
        //console.log( "all" , latestValues);
          const [ leagues, teams ] = latestValues;
          //console.log( "leagues" , leagues);
          //console.log( "teams" , teams);
          this.setCountrySelected(true);
          this.currentCountry$.next(value);
          setTimeout(()=>{
            this.teamsSelectedService.setMostValuableTeams(teams);
            this.leagueSelectedService.setCountryLeagues(leagues);
            this.dataNavbarService.setToggleData({value: 'most-valuable-teams',
                                                scroll: false});
          }, 0)
          
      });
    }
    else{
      this.setCountrySelected(false);
      this.currentCountry$.next(value);
    }
    
    
  }

  public loadLeaguesByCountry(countryId: number):Observable<any>{
    return this._map(this.http.get<any>(this._baseUrl + "countries/get_leagues/"+ countryId, {withCredentials: true}));
  }

  

  

  public loadMostValuableTeams():Observable<any>{
    return this._map(this.http.get<any>(this._baseUrl + "teams/get", {withCredentials: true}));
  }

  public loadMostValuableTeamsByCountry(countryId: number):Observable<any>{
    return this._map(this.http.get<any>(this._baseUrl + "teams/get_by_country/"+ countryId, {withCredentials: true}));
  }

  public loadMostValuableTeamsByContinent(continentId: number):Observable<any>{
    return this._map(this.http.get<any>(this._baseUrl + "teams/get_by_continent/"+ continentId, {withCredentials: true}));
  }

  setCountrySelected(value){
    this.countrySelected$.next(value);
  }

  setContinentSelected(value){
    this.continentSelected$.next(value);
  }

  toggleCountriesList(value){
    if(value){
      this.setCurrentCountry("");
    }
    this.toggleCountriesList$.next(value);
  }

}
