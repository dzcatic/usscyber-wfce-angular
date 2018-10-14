import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-table-data',
  templateUrl: './user-table-data.component.html',
  styleUrls: ['./user-table-data.component.scss']
})
export class UserTableDataComponent implements OnInit {

  private columnNames;

  @Input()
  data;

  @Input()
  style;

  constructor() { }

  ngOnInit() {
    this.columnNames = Object.keys(this.data[0]);
  }

}
