import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../../services/teams.service';
import { ManageTeamService } from '../../services/manage-team.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ModalService } from '../../../shared-modules/modal/modal.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-user-manage-teams',
  templateUrl: './user-manage-teams.component.html',
  styleUrls: ['./user-manage-teams.component.scss'],
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
export class UserManageTeamsComponent implements OnInit {

  public topTeams;
  watchedTeams;
  public selectedMyTeam;
  public selectedWatchedTeam;
  public selectedTeam;
  public boxesData;
  public modalData;
  public openedModal = false;
  teamsArea = false;
  watchedTeamsArea = false;
  myTeamsArea = false;

  imageBaseUrl = environment.imageBaseUrl;

  public styleTopTeams={
    team: {
        component: "image-rows",
        name: {},
        league: "small fade"
    },
    points: {},
    /* marketPrice: {
      //image: "assets/img/dashboard/Bitmap.png",
      component: "image-rows-image",
      src: 
      revert: true,
      component: "image-rows",
      currentPrice: {},
      priceFluxPercentage: "small fade",
      
    }, */
    marketPrice: {
      revert: true,
      icon: true,
      src: this.imageBaseUrl + "assets/img/dashboard/Bitmap.png",
      component: "image-rows-image",
      currentPrice: {},
      priceFluxPercentage: "small fade",
      
    }
  };

  

  /* styleTopTeams={
    club: {
        component: "image-rows",
        name: {},
        league: "small fade"
    },
    points: {},
    availableCoins: {},
    marketPrice: {
        revert: true,
        icon: true,
        src: "assets/img/dashboard/Bitmap.png",
        component: "image-rows-image",
        change: "small fade"
    }
  }; */

  constructor(private topTeamsService: TopTeamsService, 
              private manageTeamService: ManageTeamService,
              private _route: ActivatedRoute,
              private cartService: CartService,
              private modalService: ModalService) {
    let watchedTeams = this._route.snapshot.data["watchedTeams"];

        topTeamsService.setWatchedTeams(watchedTeams['data']);
        this.selectedWatchedTeam = watchedTeams['data'][0];
        this.selectedMyTeam = watchedTeams['data'][0];
        manageTeamService.setWatchedTeam(watchedTeams['data'][0]);
        manageTeamService.setMyTeam(watchedTeams['data'][0]);
    /* this.topTeams = topTeamsService.getTopTeams();*/
    this.selectedTeam = manageTeamService.getTeam(); 
  }

  ngOnInit() { 
    this.topTeamsService.watchedTeams$.subscribe((value)=>{
      this.watchedTeams = value;
      
    })
    this.manageTeamService.myTeam$.subscribe((value)=>{
      this.selectedMyTeam = value;
    })
    this.manageTeamService.watchedTeam$.subscribe((value)=>{
      this.selectedWatchedTeam = value;
    })
    this.manageTeamService.watchedTeamBoxesData$.subscribe((value)=>{
      this.watchedTeamsArea = true;
      this.boxesData = value;
      console.log("ekica", this.boxesData)
    })
    this.manageTeamService.myTeamBoxesData$.subscribe((value)=>{
      this.myTeamsArea = true;
      this.boxesData = value;
      console.log("ekica", this.boxesData)
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

  setMySelectedValue(event){
    console.log("my", event)
    this.manageTeamService.setMyTeam(event);
  }

  setWatchedSelectedValue(event){
    console.log("watched", event)
    this.manageTeamService.setWatchedTeam(event);
  }

  buyToken(){
    this.cartService.addToCart(this.modalData['id'], this.modalData['numberOfTokens']);
  }

  buyTokenButon(row){
    let data = {
      id: row['id'],
      numberOfTokens: 0,
      type: "buy",
      modalStyle: {
        component: "image-rows",
        label: "small fade",
        name: {},
        league: {}
      },
      club: {
        logo: row['logo'],
        name: row['name'],
        league: "La Liga"
      },
      tokens: {
        name: "230",
        label: "Tokens"
      },
      value: {
        name: "$80,500",
        label: "Value"
      }
    };

    this.modalService.setModalData(data);
  }

  sellTokenButon(row){
    let data = {
      id: row['id'],
      numberOfTokens: 0,
      type: "sell",
      modalStyle: {
        component: "image-rows",
        label: "small fade",
        name: {},
        league: {}
      },
      club: {
        logo: row['logo'],
        name: row['name'],
        league: "La Liga"
      },
      tokens: {
        name: "230",
        label: "Tokens"
      },
      value: {
        name: "$80,500",
        label: "Value"
      }
    };

    this.modalService.setModalData(data);
  }

}
