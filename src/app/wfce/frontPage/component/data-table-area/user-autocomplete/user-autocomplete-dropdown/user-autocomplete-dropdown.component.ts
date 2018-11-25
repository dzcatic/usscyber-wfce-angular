import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-autocomplete-dropdown',
  templateUrl: './user-autocomplete-dropdown.component.html',
  styleUrls: ['./user-autocomplete-dropdown.component.scss']
})
export class UserAutocompleteDropdownComponent implements OnInit {

  @Input()
  data;

  @Input()
  counter;

  @Output() 
  setSelected: EventEmitter<any> = new EventEmitter();

  

  constructor() { }

  ngOnInit(){
    
  }

  selectRow(id) {
    this.setSelected.emit(this.data[id]);
  }


}
