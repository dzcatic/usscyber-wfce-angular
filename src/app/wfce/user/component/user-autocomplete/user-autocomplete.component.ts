import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-user-autocomplete',
  templateUrl: './user-autocomplete.component.html',
  styleUrls: ['./user-autocomplete.component.scss']
})
export class UserAutocompleteComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.elementRef.nativeElement.contains(event.target)) {
      this.resetValues();
    } 
  }

  @Input()
  data;

  @Input()
  placeholder;

  @Input()
  type?: string;

  @Input()
  searchApi = "";

  filteredData =[];

  counter = -1;
  toggleDropdown = false;
  selectedValue = "";

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.filteredData = this.data;
  }

  showDropdownData(event){
    this.filteredData = this.data.filter(row => row.name.toLowerCase().startsWith(event.target.value));//.includes(event.target.value));
    this.toggleDropdown = true;
  }

  keyDown(event){
    if (event.keyCode == 40) { //down
      event.preventDefault();
      this.goDown();
    } else if (event.keyCode == 38) { //up
      event.preventDefault();
      this.goUp();
      
    } else if (event.keyCode == 13) {
      event.preventDefault();
      this.setSelectedValue(this.filteredData[this.counter]);
    }
  }

  goDown(){
    if(this.toggleDropdown==false){
      this.toggleDropdown = true;
      this.counter = 0;
    }
    else{
      this.counter++;
      if (this.counter >= this.filteredData.length) {
        this.counter = 0;
      }
    }
  }

  goUp(){
    this.counter--;
    if (this.counter < 0) {
      this.counter = this.filteredData.length - 1;
    }
  }

  resetValues(){
    this.toggleDropdown = false;
    this.counter = -1;
    this.filteredData = this.data;
  }

  setSelectedValue(value){
    this.resetValues();
    
    this.selectedValue = value.name;
  }

}
