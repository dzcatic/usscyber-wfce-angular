import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../../../../shared-modules/modal/modal.service';
import { TopTeamsService } from '../../../../services/teams.service';

@Component({
  selector: 'app-user-table-options',
  templateUrl: './user-table-options.component.html',
  styleUrls: ['./user-table-options.component.scss']
})
export class UserTableOptionsComponent implements OnInit {

  @Input()
  options;

  @Input()
  row;
  
  constructor(private modalService: ModalService, private teamsService: TopTeamsService) { }

  ngOnInit() {
    //this.row['isSelected'] = false;
    console.log(this.row);
  }

  handleClick(option){
    
    if(option['functionName'] != undefined){
      this[option['functionName']](option);
    }
  }

  buyToken(option){
    let data = {
      id: this.row['id'],
      numberOfTokens: 0,
      modalStyle: {
        component: "image-rows",
        label: "small fade",
        name: {},
        league: {}
      },
      club: {
        logo: this.row['logo'],
        name: this.row['name'],
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

  watchTeam(option){
    if(option['revertStyle'] !== undefined){
      this.row['watched'] = !this.row['watched'];
    }
    this.teamsService.watchTeam(this.row['id'], this.row['watched']).subscribe((data)=>{
      this.row['watched'] = data['like'];
    })
  }
}