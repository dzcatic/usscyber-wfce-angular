import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-table-row-match',
  templateUrl: './user-table-row-match.component.html',
  styleUrls: ['./user-table-row-match.component.scss']
})
export class UserTableRowMatchComponent implements OnInit {

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
    console.log(this.rowNames)
  }

}
