import { Injectable } from '@angular/core';

@Injectable()
export class TopTeamsService {

  private teams;

  constructor() { }

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

}