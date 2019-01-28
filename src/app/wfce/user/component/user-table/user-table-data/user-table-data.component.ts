import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ManageTeamService } from '../../../services/manage-team.service';

@Component({
  selector: 'app-user-table-data',
  templateUrl: './user-table-data.component.html',
  styleUrls: ['./user-table-data.component.scss']
})
export class UserTableDataComponent implements OnInit {

  private columnNames;
  //public selectedIndex = 0;
  //public selectedTeam;

  @Input()
  selectedTeam = null;

  @Output() 
  setSelected: EventEmitter<any> = new EventEmitter();

  @Input()
  data;

  @Input()
  style;

  @Input()
  selectable = false;

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

  constructor(private manageTeam: ManageTeamService) { }

  ngOnInit() {
    this.columnNames = Object.keys(this.style);
    console.log("data", this.selectedTeam);
  }

  selectRow(data){
    if(this.selectable){
      this.setSelected.emit(data);
    }
  }

}
