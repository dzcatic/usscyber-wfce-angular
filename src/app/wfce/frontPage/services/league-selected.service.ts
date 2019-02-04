import { Injectable, Injector } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AbstractService } from './abstract.service';
import { TeamsSelectedService } from './teams-selected.service';
import { DataNavbarService } from './data-navbar.service';

@Injectable()
export class LeagueSelectedService extends AbstractService {

  private _baseUrl: string = environment.apiUrl;
  countryLeagues$ = new Subject();
  currentLeague$  = new Subject();
  http: HttpClient;
  _router: Router;
  
  constructor(injector: Injector, 
              private teamsSelectedService: TeamsSelectedService,
              private dataNavbarService: DataNavbarService) {
    super(injector);
    this.http = injector.get(HttpClient);
    this._router = injector.get(Router);
    
  }

  setCurrentLeague(value){
    if(value != ""){
      /* country_id: 171
country_name: "Spain"
league_id: 109
league_name: "Liga BBVA" */
      const combined = Observable.forkJoin(
        this.loadMostValuableTeamsByLeague(value.league_id),
      )
      combined.subscribe(latestValues => {
        //console.log( "all" , latestValues);
          const [ teams ] = latestValues;    
          setTimeout(()=>{
            
            //this.setContinentSelected(true);
            this.currentLeague$.next(value);
            this.teamsSelectedService.setNumberOfPages(teams['numberOfPages']);
            this.teamsSelectedService.setMostValuableTeams(teams['data']);
            
            this.dataNavbarService.setToggleData({value: 'most-valuable-teams',
                                                scroll: true});
          }, 0)
          
      });
    }
    
  }

  setCountryLeagues(value){
    this.countryLeagues$.next(value);
  }

  public loadMostValuableTeamsByLeague(leagueId: number, pageSize: number = 10, pageNumber: number = 1):Observable<any>{
    return this._map(this.http.get<any>(this._baseUrl + "teams/get_by_league/" + leagueId+ "?pageSize=" + pageSize + "&pageNumber="+pageNumber, {withCredentials: true}));
  }
}
