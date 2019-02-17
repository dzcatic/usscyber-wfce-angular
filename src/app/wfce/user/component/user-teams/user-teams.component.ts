import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../../services/teams.service';
import { ModalService } from '../../../shared-modules/modal/modal.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-user-teams',
  templateUrl: './user-teams.component.html',
  styleUrls: ['./user-teams.component.scss'],
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
export class UserTeamsComponent implements OnInit {

  public topTeams;
  public openedModal = false;
  public numberOfPages = 1;
  public currentPage = 1;

  private selectedFilter = "all";
  modalData;
  showSpinner = false;

  imageBaseUrl = environment.imageBaseUrl;

  public styleTopTeams={
    rank: {},
    team: {
        component: "image-rows",
        name: {},
        league: "small fade"
    },
    points: {},
    marketPrice: {
      image: this.imageBaseUrl + "assets/img/dashboard/Bitmap.png",
      component: "image-rows",
      currentPrice: {},
      priceFluxPercentage: "small fade",
      
    },
    options: [
      {
        name: "watchTeam",
        reverseName: "watching",
        icon: "gi-eye",
        style: "colorGrey hoverGlow fade",
        revertStyle: "colorGrey hoverGlow bright",
        functionName: "watchTeam"
      },
      {
        name: "buy",
        icon: "gi-cart",
        style: "colorGreen hoverGlow",
        functionName: "buyToken"
      }
    ]
  };

  constructor(private topTeamsService: TopTeamsService, 
              private modalService: ModalService,
              private _route: ActivatedRoute,
              private cartService: CartService) {
      let topTeams = this._route.snapshot.data["topTeams"];
      if(topTeams['data'].length > 0){
        topTeamsService.setNumberOfPages(topTeams['numberOfPages']);
        this.numberOfPages = topTeams['numberOfPages'];
        topTeamsService.setTopTeams(topTeams['data']);
        
        
      }
      
    //this.topTeams = topTeamsService.getLongTeams();
  }

  ngOnInit() { 
    this.modalService.toggleModal$.subscribe((value)=>{
      this.openedModal = value;
    })
    this.modalService.data$.subscribe((value)=>{
      this.modalData = value;
      if(this.modalData !== undefined){
        this.modalService.openModal();
      }
    })
    this.topTeamsService.topTeams$.subscribe((value)=>{
      this.topTeams = value;
      this.showSpinner = false;
      console.log("prije ispisa", this.topTeams)
      this.numberOfPages = this.topTeamsService.getNumberOfPages();
      console.log("prije ispisa", this.numberOfPages)
    })
  }

  setSelectedValue(event){
    this.showSpinner = true;
    this.selectedFilter = event;
    this.currentPage = 1;
  }

  reloadTriggered(event){
    this.setCurrentPage(this.currentPage);
  }

  public setCurrentPage(nextPage: number){
    this.showSpinner = true;
    switch(this.selectedFilter) { 
      case 'continent': {
        this.topTeamsService.loadTeamsByContinent(this.topTeamsService.getFilterId(), 10, nextPage).subscribe((topTeams)=>{
          if(topTeams['data'].length > 0){
            this.topTeamsService.setNumberOfPages(topTeams['numberOfPages']);
            this.numberOfPages = topTeams['numberOfPages'];
            this.topTeamsService.setTopTeams(topTeams['data']); 
            this.currentPage = nextPage;
          }
        });
         //statements; 
         break; 
      } 
      case 'country': { 
        this.topTeamsService.loadTeamsByCountry(this.topTeamsService.getFilterId(), 10, nextPage).subscribe((topTeams)=>{
          if(topTeams['data'].length > 0){
            this.topTeamsService.setNumberOfPages(topTeams['numberOfPages']);
            this.numberOfPages = topTeams['numberOfPages'];
            this.topTeamsService.setTopTeams(topTeams['data']); 
            this.currentPage = nextPage;
          }
        });
         //statements; 
         break; 
      } 
      case 'league': { 
        this.topTeamsService.loadTeamsByLeague(this.topTeamsService.getFilterId(), 10, nextPage).subscribe((topTeams)=>{
          if(topTeams['data'].length > 0){
            this.topTeamsService.setNumberOfPages(topTeams['numberOfPages']);
            this.numberOfPages = topTeams['numberOfPages'];
            this.topTeamsService.setTopTeams(topTeams['data']); 
            this.currentPage = nextPage;
          }
        });
         //statements; 
         break; 
      } 
      default: { 
        this.topTeamsService.loadTeamsByWFCE( 10, nextPage).subscribe((topTeams)=>{
          if(topTeams['data'].length > 0){
            this.topTeamsService.setNumberOfPages(topTeams['numberOfPages']);
            this.numberOfPages = topTeams['numberOfPages'];
            this.topTeamsService.setTopTeams(topTeams['data']); 
            this.currentPage = nextPage;
          }
        });
         //statements; 
         break; 
      } 
   } 
  }

  buyToken(){
    this.cartService.addToCart(this.modalData['id'], this.modalData['numberOfTokens']);
  }

}
