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

  get dayOfTheWeek() : string { return new Date().toLocaleString('en-us', {  weekday: 'long' }); }

  get year() : number {return new Date().getFullYear(); }

  get month() : string { return new Date().toLocaleString('en-us', {  month: 'long' }); }

  get dayOfTheMonth() : string { 
    let day = new Date().getDate();
    return day + this.getDayOfMonthSuffix(day);
  }
  getDayOfMonthSuffix(n) {
    if (n >= 11 && n <= 13) {
        return "th";
    }
    switch (n % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
  }

  constructor() { }

  ngOnInit() {
    this.columnNames = Object.keys(this.style);
  }

}