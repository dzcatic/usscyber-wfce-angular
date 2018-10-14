import { Injectable } from '@angular/core';

@Injectable()
export class ScheduledMatchesService {

  private matches;

  constructor() { }

  public importMatches(){
      this.matches = 
        [{
            club1: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            },
            club2: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            }
        },
        {
            club1: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            },
            club2: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            }
        },
        {
            club1: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            },
            club2: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            }
        },
        {
            club1: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            },
            club2: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            }
        },
        {
            club1: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            },
            club2: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            }
        },
        {
            club1: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            },
            club2: {
                image: "assets/img/temp/avatar.png",
                name: "Barcelona",
                league: "La Liga"
            }
        }];
  }
  
  public getMatches() {
    this.importMatches();
    return this.matches;
  }
}