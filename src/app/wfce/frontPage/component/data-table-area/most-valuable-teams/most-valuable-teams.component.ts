import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TeamsSelectedService } from '../../../services/teams-selected.service';

@Component({
  selector: 'app-most-valuable-teams',
  templateUrl: './most-valuable-teams.component.html',
  styleUrls: ['./most-valuable-teams.component.scss']
})
export class MostValuableTeamsComponent implements OnInit {

  public mostValuableTeams;
  public nowShowingMostValuableTeams;

  private showByPage = 10;
  private offset = 0;
  private numberOfPages;
  pagesArray;

  public styleTopTeams={
    rank: {},
    team: {
        component: "image-rows",
        name: {},
        league: "small fade"
    },
    points: {},
    marketPrice: {
      image: "assets/img/dashboard/Bitmap.png",
      component: "image-rows",
      change: "small fade"
    },
    options: [
      /* {
        name: "watchTeam",
        reverseName: "watching",
        icon: "gi-eye",
        style: "colorGrey hoverGlow fade",
        revertStyle: "colorGrey hoverGlow bright",
      }, */
      {
        name: "buy",
        icon: "gi-cart",
        style: "colorGreen hoverGlow",
        functionName: "buyToken"
      }
    ]
  };



  //@Output() showBy: EventEmitter<any> = new EventEmitter();

  constructor(private teamsSelectedService: TeamsSelectedService) {
    
   }

  ngOnInit() {
    this.teamsSelectedService.mostValuableTeams$.subscribe((value)=>{
      this.mostValuableTeams = value;
      this.setNowShowing();
    })
  }

  showByThisMany($event){
    this.showByPage = $event;
    this.setNowShowing();
  }

  setNowShowing(){
    this.nowShowingMostValuableTeams = this.mostValuableTeams.slice(this.offset*Number(this.showByPage), this.offset*Number(this.showByPage) + Number(this.showByPage));
    this.calculatePages();
  }

  calculatePages(){
    let length = this.mostValuableTeams.length;
    let currentAmount = Number(this.showByPage);
    this.numberOfPages = Math.ceil(length/currentAmount);
    this.pagesArray= Array.from(Array(this.numberOfPages).keys());
    console.log(this.pagesArray)
  }

  setOffset(value){
    this.offset = value;
    this.setNowShowing();
  }

}
