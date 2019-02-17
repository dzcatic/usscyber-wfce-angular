import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../../../../environments/environment';

@Component({
  selector: 'app-user-table-row-club',
  templateUrl: './user-table-row-club.component.html',
  styleUrls: ['./user-table-row-club.component.scss']
})
export class UserTableRowClubComponent implements OnInit {

  public rowNames;
  imageBaseUrl = environment.imageBaseUrl;

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
      return  logo.replace('~/content/', this.imageBaseUrl + 'assets/');
    }
    if(logo.includes("images") !== false){
      return  logo.replace('~/images/', this.imageBaseUrl + 'assets/img/');
    }
   
  }

}
