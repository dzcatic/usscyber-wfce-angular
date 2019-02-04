import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TeamsSelectedService } from '../../../services/teams-selected.service';
import { AreaSelectedService } from '../../../services/area-selected.service';
import { ModalService } from '../../../../shared-modules/modal/modal.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CartService } from '../../../../user/services/cart.service';
import { LeagueSelectedService } from '../../../services/league-selected.service';

@Component({
  selector: 'app-most-valuable-teams',
  templateUrl: './most-valuable-teams.component.html',
  styleUrls: ['./most-valuable-teams.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({height: '100%', opacity: 1})),
      transition(':enter', [
        style({ height: '0%', opacity: 0 }),
        animate('.5s ease-in-out')
      ]),
      transition(':leave', [
        animate('.5s ease-in-out', style({height: '0%', opacity: 0}))
      ])
    ])
  ]
})
export class MostValuableTeamsComponent implements OnInit {

  public mostValuableTeams;
  public nowShowingMostValuableTeams;
  public isCountrySelected = false;
  public isContinentSelected = false;
  public selectedContinent;
  public selectedCountry;
  public selectedLeague;
  public selectedFilter: string;


  public showByPage = 10;
  public offset = 1;
  public numberOfPages;
  pagesArray;

  openedModal = false;
  modalData;

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
      currentPrice: {},
      priceFluxPercentage: "small fade",
      
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

  constructor(private teamsSelectedService: TeamsSelectedService, 
              private areaSelectedService: AreaSelectedService,
              private leagueSelectedService: LeagueSelectedService,
              private modalService: ModalService,
              private cartService: CartService) {
    
   }

  ngOnInit() {
    this.teamsSelectedService.mostValuableTeams$.subscribe((value)=>{
      this.mostValuableTeams = value;
      this.numberOfPages = this.teamsSelectedService.getNumberOfPages();
      this.pagesArray= Array.from(Array(this.numberOfPages).keys());
      //this.setNowShowing();
    })
    this.areaSelectedService.countrySelected$.subscribe((value)=>{
      this.isCountrySelected = value;
      this.selectedFilter = this.isCountrySelected ? 'country' : 'all';
      this.offset = 1;
      if(this.selectedFilter !== 'country'){
        this.setNowShowing();
      }
      
    });
    this.areaSelectedService.continentSelected$.subscribe((value)=>{
      this.isContinentSelected = value;
      this.selectedFilter = this.isContinentSelected ? 'continent' : 'all';
      this.offset = 1;
      if(this.selectedFilter !== 'continent'){
        this.setNowShowing();
      }
    });
    this.leagueSelectedService.currentLeague$.subscribe((value)=>{
      this.selectedFilter = value !== "" ? 'league' : 'country';
      this.selectedLeague = value !== "" ? value : null;

      this.offset = 1;
      if(value !== ""){
        this.setNowShowing();
      }
      
    })
    this.areaSelectedService.currentContinent$.subscribe((value)=>{
      this.selectedContinent = value;
    })
    this.areaSelectedService.currentCountry$.subscribe((value)=>{
      this.selectedCountry = value;
    })
    this.modalService.toggleModal$.subscribe((value)=>{
      this.openedModal = value;
    })
    this.modalService.data$.subscribe((value)=>{
      this.modalData = value;
      if(this.modalData !== undefined){
        this.modalService.openModal();
      }
    })
  }

  showByThisMany($event){
    this.showByPage = $event;
    this.setNowShowing();
  }

  setNowShowing(){
    //this.calculatePages();
    switch(this.selectedFilter) { 
      case 'continent': {
        this.areaSelectedService.loadMostValuableTeamsByContinent(this.selectedContinent.id, this.showByPage, this.offset).subscribe((topTeams)=>{
          if(topTeams['data'].length > 0){
            this.teamsSelectedService.setNumberOfPages(topTeams['numberOfPages']);
            this.teamsSelectedService.setMostValuableTeams(topTeams['data']);
            
          }
        });
        //statements; 
        break; 
     } 
     case 'country': {
      this.areaSelectedService.loadMostValuableTeamsByCountry(this.selectedCountry.id, this.showByPage, this.offset).subscribe((topTeams)=>{
        if(topTeams['data'].length > 0){
          this.teamsSelectedService.setNumberOfPages(topTeams['numberOfPages']);
          this.teamsSelectedService.setMostValuableTeams(topTeams['data']);
            
        }
      });
      //statements; 
      break; 
   }
   case 'league': {
    this.leagueSelectedService.loadMostValuableTeamsByLeague(this.selectedLeague.league_id, this.showByPage, this.offset).subscribe((topTeams)=>{
      if(topTeams['data'].length > 0){
        this.teamsSelectedService.setNumberOfPages(topTeams['numberOfPages']);
        this.teamsSelectedService.setMostValuableTeams(topTeams['data']);
          
      }
    });
    //statements; 
    break; 
 }
   default: { 
    this.areaSelectedService.loadMostValuableTeams(this.showByPage, this.offset).subscribe((topTeams)=>{
      if(topTeams['data'].length > 0){
        this.teamsSelectedService.setNumberOfPages(topTeams['numberOfPages']);
        this.teamsSelectedService.setMostValuableTeams(topTeams['data']);
          
      }
    });
    //statements; 
    break;
  } 
    }
    if(this.numberOfPages < this.offset + 1){
      this.offset = this.numberOfPages;
    }
    
  }

  /* calculatePages(){
    let length = this.mostValuableTeams.length;
    let currentAmount = Number(this.showByPage);
    this.numberOfPages = Math.ceil(length/currentAmount);
    this.pagesArray= Array.from(Array(this.numberOfPages).keys());
  } */

  setOffset(value){
    if(value < 0){
      value = 0;
    }
    if(value>this.numberOfPages){
      value = this.numberOfPages;
    }
    this.offset = value;
    console.log(this.offset)
    this.setNowShowing();
  }

  buyToken(){
    this.cartService.addToCart(this.modalData['id'], this.modalData['numberOfTokens']);
  }

}
