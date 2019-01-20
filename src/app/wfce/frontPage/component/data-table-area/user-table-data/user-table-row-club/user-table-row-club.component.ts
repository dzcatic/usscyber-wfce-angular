import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-table-row-club',
  templateUrl: './user-table-row-club.component.html',
  styleUrls: ['./user-table-row-club.component.scss']
})
export class UserTableRowClubComponent implements OnInit {

  public rowNames;

  @Input()
  data;

  @Input()
  style;

  @Input()
  columnName;
  
  constructor() { }

  ngOnInit() {
    this.rowNames = Object.keys(this.style);
    let index = this.rowNames.indexOf('component');
    if(index>-1){
      this.rowNames.splice( index, 1 );
    }
    index = this.rowNames.indexOf('image');
    if(index>-1){
      this.rowNames.splice( index, 1 );
    }
  }

  adjustLogoUrl(logo){
    if(logo.includes("content") !== false){
      return  logo.replace('~/content/', 'assets/');
    }
    if(logo.includes("images") !== false){
      return  logo.replace('~/images/', 'assets/img/');
    }
   
  }

}
