import { Injectable, Injector } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AbstractService } from './abstract.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ManageTeamService extends AbstractService {

  private team;
  public watchedTeam$ = new ReplaySubject();
  public myTeam$ = new ReplaySubject();
  public watchedTeamBoxesData$ = new ReplaySubject();
  public myTeamBoxesData$ = new ReplaySubject();

  private _baseUrl: string = environment.apiUrl;
  http: HttpClient;
  _router: Router;

  constructor(injector: Injector) {
    super(injector);
    this.http = injector.get(HttpClient);
    this._router = injector.get(Router);

    }

  public importTeam(){
    this.team = [
        {
            "name": "Barcelona",
            "series": [
            {
                "name": "Jan",
                "value": 100
                },
                {
                "name": "Feb",
                "value": 300
                },
                {
                "name": "Mar",
                "value": 50
                },
                {
                    "name": "Apr",
                    "value": 400
                },
                {
                    "name": "May",
                    "value": 500
                },
                {
                    "name": "Jun",
                    "value": 350
                },
                {
                    "name": "Jul",
                    "value": 50
                },
                {
                    "name": "Aug",
                    "value": 100
                }
            ]
        }
        

      ];
  }
  
  public getTeam() {
    this.importTeam();
    return this.team;
  }

  public setWatchedTeam(team){
      this.loadSelectedTeam(team.id).subscribe((data)=>{
        console.log(data);
        this.watchedTeam$.next(team);
        this.watchedTeamBoxesData$.next(data);
      })
      //this.team$.next(team);
  }

  public setMyTeam(team){
    this.loadSelectedTeam(team.id).subscribe((data)=>{
      console.log(data);
      this.myTeam$.next(team);
      this.myTeamBoxesData$.next(data);
    })
    //this.team$.next(team);
}

  public loadSelectedTeam(teamId){
    return this._map(this.http.get<any>(this._baseUrl + "teams/get_coins_info/" + teamId, {withCredentials: true}));
  }

}