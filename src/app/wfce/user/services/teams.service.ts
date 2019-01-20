import { Injectable, Injector } from '@angular/core';
import { AbstractService } from './abstract.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class TopTeamsService extends AbstractService {

  private teams;

  private _baseUrl: string = environment.apiUrl;
  http: HttpClient;
  _router: Router;

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

}