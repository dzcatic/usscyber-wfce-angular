import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../../../../shared-modules/modal/modal.service';

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
  
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.row['isSelected'] = false;
  }

  handleClick(option){
    if(option['revertStyle'] !== undefined){
      this.row['isSelected'] = !this.row['isSelected'];
    }
    if(option['functionName'] != undefined){
      this[option['functionName']](option);
    }
  }

  buyToken(option){
    let data = {
      modalStyle: {
        component: "image-rows",
        label: "small fade"
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
