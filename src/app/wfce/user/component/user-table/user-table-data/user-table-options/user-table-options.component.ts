import { Component, OnInit, Input } from '@angular/core';

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
  
  constructor() { }

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
    console.log("open modal");
  }

}
