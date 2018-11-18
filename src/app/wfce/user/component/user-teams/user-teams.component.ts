import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../../services/teams.service';
import { ModalService } from '../../../shared-modules/modal/modal.service';

@Component({
  selector: 'app-user-teams',
  templateUrl: './user-teams.component.html',
  styleUrls: ['./user-teams.component.scss']
})
export class UserTeamsComponent implements OnInit {

  public topTeams;
  public openedModal = false;

  styleTopTeams={
    club: {
        component: "image-rows",
        league: "small fade"
    },
    marketPrice: {
      image: "/assets/img/dashboard/Bitmap.png",
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

  modalStyle =  {
    component: "image-rows",
    label: "small fade"
  };

  modalData = {
    name: "230",
    label: "Tokens"
  }

  modalData1 = {
    name: "$80,500",
    label: "Value"
  }

  constructor(private topTeamsService: TopTeamsService, private modalService: ModalService) {
    this.topTeams = topTeamsService.getLongTeams();
  }

  ngOnInit() { 
    this.modalService.toggleModal$.subscribe((value)=>{
      this.openedModal = value;
    })
    /* this.modalService.data$.subscribe((value)=>{
      this.modalData = value;
    }) */
  }

}
