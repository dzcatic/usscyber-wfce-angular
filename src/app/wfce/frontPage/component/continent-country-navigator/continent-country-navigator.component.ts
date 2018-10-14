import { Component, OnInit, Input } from '@angular/core';
import { AreaSelectedService } from '../../services/area-selected.service';

@Component({
  selector: 'app-continent-country-navigator',
  templateUrl: './continent-country-navigator.component.html',
  styleUrls: ['./continent-country-navigator.component.scss']
})
export class ContinentCountryNavigatorComponent implements OnInit {

  @Input()
  currentContinent;

  constructor(private areaSelectedService: AreaSelectedService) { }

  ngOnInit() {
  }

  close() {
    this.areaSelectedService.toggleCountriesList(false);
  }

  selectCountry(country){
    this.areaSelectedService.setCurrentCountry(country);
  }

}
