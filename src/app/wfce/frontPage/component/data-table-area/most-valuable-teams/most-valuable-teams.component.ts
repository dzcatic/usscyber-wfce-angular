import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TeamsSelectedService } from '../../../services/teams-selected.service';
import { AreaSelectedService } from '../../../services/area-selected.service';
import { ModalService } from '../../../../shared-modules/modal/modal.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CartService } from '../../../../user/services/cart.service';

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


  public showByPage = 10;
  public offset = 0;
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
              private modalService: ModalService,
              private cartService: CartService) {
    
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
      console.log(this.isContinentSelected);
    });
    /* this.areaSelectedService.currentContinent$.subscribe((value)=>{
      this.selectedContinent = value;
      console.log(this.selectedContinent);
    }) */
    this.areaSelectedService.currentContinent$.subscribe((value)=>{
      console.log(value);
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

  buyToken(){
    this.cartService.addToCart(this.modalData['id'], this.modalData['tokens']['name']);
  }

}
