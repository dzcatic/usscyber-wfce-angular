import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TeamsSelectedService } from '../../../services/teams-selected.service';
import { AreaSelectedService } from '../../../services/area-selected.service';

@Component({
  selector: 'app-most-valuable-teams',
  templateUrl: './most-valuable-teams.component.html',
  styleUrls: ['./most-valuable-teams.component.scss']
})
export class MostValuableTeamsComponent implements OnInit {

  public mostValuableTeams;
  public nowShowingMostValuableTeams;
  public isCountrySelected = false;
  public isContinentSelected = false;
  public selectedContinent;
  public selectedCountry;


  public showByPage = 10;
  public offset = 0;
  public numberOfPages;
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

  constructor(private teamsSelectedService: TeamsSelectedService, private areaSelectedService: AreaSelectedService) {
    
   }

  ngOnInit() {
    this.teamsSelectedService.mostValuableTeams$.subscribe((value)=>{
      this.mostValuableTeams = value;
      this.setNowShowing();
    })
    this.areaSelectedService.countrySelected$.subscribe((value)=>{
      this.isCountrySelected = value;
    });
    this.areaSelectedService.continentSelected$.subscribe((value)=>{
      this.isContinentSelected = value;
    });
    this.areaSelectedService.currentContinent$.subscribe((value)=>{
      this.selectedContinent = value;
    })
    this.areaSelectedService.currentCountry$.subscribe((value)=>{
      this.selectedCountry = value;
    })
  }

  showByThisMany($event){
    this.showByPage = $event;
    this.setNowShowing();
  }

  setNowShowing(){
    this.calculatePages();
    if(this.numberOfPages < this.offset + 1){
      this.offset = this.numberOfPages -1;
    }
    this.nowShowingMostValuableTeams = this.mostValuableTeams.slice(this.offset*Number(this.showByPage), this.offset*Number(this.showByPage) + Number(this.showByPage));
    
  }

  calculatePages(){
    let length = this.mostValuableTeams.length;
    let currentAmount = Number(this.showByPage);
    this.numberOfPages = Math.ceil(length/currentAmount);
    this.pagesArray= Array.from(Array(this.numberOfPages).keys());
  }

  setOffset(value){
    if(value < 0){
      value = 0;
    }
    if(value>this.numberOfPages-1){
      value = this.numberOfPages - 1;
    }
    this.offset = value;
    this.setNowShowing();
  }

}
