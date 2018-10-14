import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-table-row-club',
  templateUrl: './user-table-row-club.component.html',
  styleUrls: ['./user-table-row-club.component.scss']
})
export class UserTableRowClubComponent implements OnInit {

  private rowNames;

  @Input()
  data;

  @Input()
  style;

  @Input()
  columnName;
  
  constructor() { }

  ngOnInit() {
    this.rowNames = Object.keys(this.data);
  }

}
