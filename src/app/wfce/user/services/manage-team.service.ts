import { Injectable } from '@angular/core';

@Injectable()
export class ManageTeamService {

  private team;

  constructor() { }

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

}