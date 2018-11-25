import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-table-title',
  templateUrl: './user-table-title.component.html',
  styleUrls: ['./user-table-title.component.scss']
})
export class UserTableTitleComponent implements OnInit {

  showMany = [
    {name: "10"},
    {name: "20"},
    {name: "30"},
    {name: "40"},
    {name: "50"}
  ]

  @Output() showBy: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showMoreOnPage($event){
    this.showBy.emit($event);
  }

}
