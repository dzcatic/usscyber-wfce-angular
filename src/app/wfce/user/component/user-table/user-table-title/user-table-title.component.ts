import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-table-title',
  templateUrl: './user-table-title.component.html',
  styleUrls: ['./user-table-title.component.scss']
})
export class UserTableTitleComponent implements OnInit {

  @Output()
  reloadTrigger: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  reload(){
    this.reloadTrigger.emit(true);
  }

}
