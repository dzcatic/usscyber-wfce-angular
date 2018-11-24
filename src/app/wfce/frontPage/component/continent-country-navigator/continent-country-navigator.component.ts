import { Component, OnInit, Input } from '@angular/core';
import { AreaSelectedService } from '../../services/area-selected.service';
import { WorldMapService } from '../../services/world-map.service';

@Component({
  selector: 'app-continent-country-navigator',
  templateUrl: './continent-country-navigator.component.html',
  styleUrls: ['./continent-country-navigator.component.scss']
})
export class ContinentCountryNavigatorComponent implements OnInit {

  @Input()
  currentContinent;

  public countries;

  constructor(private areaSelectedService: AreaSelectedService, private worldMapService: WorldMapService) { }

  ngOnInit() {
    this.countries = this.worldMapService.getCountriesByContinentId(this.currentContinent.id);
  }

  close() {
    this.areaSelectedService.toggleCountriesList(false);
  }

  selectCountry(country){
    this.areaSelectedService.setCurrentCountry(country);
  }

}
