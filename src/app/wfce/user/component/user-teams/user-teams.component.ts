import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../../services/teams.service';
import { ModalService } from '../../../shared-modules/modal/modal.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  modalData;

  styleTopTeams={
    club: {
        component: "image-rows",
        league: "small fade"
    },
    marketPrice: {
      image: "assets/img/dashboard/Bitmap.png",
      component: "image-rows",
      change: "small fade"
    },
    points: {},
    availableCoins: {},
    options: [
      {
        name: "watchTeam",
        reverseName: "watching",
        icon: "gi-eye",
        style: "colorGrey hoverGlow fade",
        revertStyle: "colorGrey hoverGlow bright",
      },
      {
        name: "buy",
        icon: "gi-cart",
        style: "colorGreen hoverGlow",
        functionName: "buyToken"
      }
    ]
    
  };

  constructor(private topTeamsService: TopTeamsService, private modalService: ModalService) {
    this.topTeams = topTeamsService.getLongTeams();
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
  }

}
