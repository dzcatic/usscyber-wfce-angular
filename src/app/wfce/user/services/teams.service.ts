import { Injectable, Injector } from '@angular/core';
import { AbstractService } from './abstract.service';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class TopTeamsService extends AbstractService {

  private teams;
  public topTeams$ = new ReplaySubject();
  public watchedTeams$ = new ReplaySubject();

  private _baseUrl: string = environment.apiUrl;
  http: HttpClient;
  _router: Router;
  private filterId: number;

  private numberOfPages: number;

  constructor(injector: Injector) {
    super(injector);
    this.http = injector.get(HttpClient);
    this._router = injector.get(Router);

    }

  public importTeams(){
      this.teams = 
        [{
            club: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            },
            points: 76,
            marketPrice: {
                value: 4670,
                change: 0.1
            }
        },
        {
            club: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            },
            points: 76,
            marketPrice: {
                value: 4670,
                change: 0.0
            }
        },
        {
            club: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            },
            points: 76,
            marketPrice: {
                value: 4670,
                change: 0.0
            }
        },
        {
            club: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            },
            points: 76,
            marketPrice: {
                value: 4670,
                change: -0.1
            }
        },
        {
            club: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            },
            points: 76,
            marketPrice: {
                value: 4670,
                change: -0.1
            }
        },
        {
            club: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            },
            points: 76,
            marketPrice: {
                value: 4670,
                change: -0.1
            }
        }];
  }

  public importLongTeams(){
    this.teams = 
      [{
          club: {
              image: "assets/img/temp/avatar.png",
              name: "Barcelona",
              league: "La Liga"
          },
          marketPrice: {
            value: 4670,
            change: 0.1
          },
          points: 76,
          availableCoins: 990,
          
      },
      {
          club: {
              image: "assets/img/temp/avatar.png",
              name: "Barcelona",
              league: "La Liga"
          },
          marketPrice: {
            value: 4670,
            change: 0.0
          },
          points: 76,
          availableCoins: 990,
          
      },
      {
          club: {
              image: "assets/img/temp/avatar.png",
              name: "Barcelona",
              league: "La Liga"
          },
          marketPrice: {
            value: 4670,
            change: 0.0
          },
          points: 76,
          availableCoins: 990,
          
      },
      {
          club: {
              image: "assets/img/temp/avatar.png",
              name: "Barcelona",
              league: "La Liga"
          },
          marketPrice: {
            value: 4670,
            change: -0.1
          },
          points: 76,
          availableCoins: 990,
          
      },
      {
        club: {
            image: "assets/img/temp/avatar.png",
            name: "Barcelona",
            league: "La Liga"
        },
        marketPrice: {
          value: 4670,
          change: -0.1
        },
        points: 76,
        availableCoins: 990,
        
    },
    {
        club: {
            image: "assets/img/temp/avatar.png",
            name: "Barcelona",
            league: "La Liga"
        },
        marketPrice: {
          value: 4670,
          change: -0.1
        },
        points: 76,
        availableCoins: 990,
        
    },
    {
        club: {
            image: "assets/img/temp/avatar.png",
            name: "Barcelona",
            league: "La Liga"
        },
        marketPrice: {
          value: 4670,
          change: -0.1
        },
        points: 76,
        availableCoins: 990,
        
    }];
}
  
  public getTopTeams() {
    this.importTeams();
    return this.teams;
  }
  public getLongTeams() {
      this.importLongTeams();
      return this.teams;
  }

  public loadCountriesByContinent(continentId: number): Observable<any>{
    return this._map(this.http.get<any>(this._baseUrl + "continents/get_countries/" + continentId, {withCredentials: true}));
  }

  public loadLeaguesByCountry(countryId: number): Observable<any>{
    return this._map(this.http.get<any>(this._baseUrl + "countries/get_leagues/" + countryId, {withCredentials: true}));
  }

  public loadTeamsByContinent(continentId: number, pageSize: number = 10, pageNumber: number = 1){
    return this._map(this.http.get<any>(this._baseUrl + "teams/get_by_continent/" + continentId + "?pageSize=" + pageSize + "&pageNumber="+pageNumber, {withCredentials: true}));
  }

  public loadTeamsByCountry(countryId: number, pageSize: number = 10, pageNumber: number = 1){
    return this._map(this.http.get<any>(this._baseUrl + "teams/get_by_country/" + countryId + "?pageSize=" + pageSize + "&pageNumber="+pageNumber, {withCredentials: true}));
  }

  public loadTeamsByWFCE(pageSize: number = 10, pageNumber: number = 1){
    return this._map(this.http.get<any>(this._baseUrl + "teams/paginate" + "?pageSize=" + pageSize + "&pageNumber="+pageNumber, {withCredentials: true}));
  }

  public watchTeam(teamId: number, isWatching: boolean){
      return this._map(this.http.post<any>(this._baseUrl + "users/watch_team/"+teamId+"/"+isWatching, {withCredentials: true}));
  }

  public loadWatchedTeams(){
      return this._map(this.http.get<any>(this._baseUrl + "users/get_watched_teams" , {withCredentials: true}));
  }

  public filterByContinent(continentId: number): Observable<any>{
      this.filterId = continentId;
      return Observable.forkJoin(
        this.loadCountriesByContinent(continentId),
        this.loadTeamsByContinent(continentId),
      )
  }

  public filterByCountry(countryId: number): Observable<any>{
    this.filterId = countryId;
    return Observable.forkJoin(
      this.loadLeaguesByCountry(countryId),
      this.loadTeamsByCountry(countryId),
    )
  }


  //////////////////
  public setTopTeams(value){
      this.topTeams$.next(value);
  }

  public setNumberOfPages(value:number){
      this.numberOfPages = value;
  }

  public getNumberOfPages(){
      return this.numberOfPages;
  }

  public getFilterId(){
      return this.filterId;
  }

  public setWatchedTeams(value){
      this.watchedTeams$.next(value);
  }
  

}