import { Component, OnInit, Input } from '@angular/core';
import { WorldMapService } from '../../services/world-map.service';
import { AreaSelectedService } from '../../services/area-selected.service';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({height: '100%', opacity: 1})),
      transition(':enter', [
        style({ height: '0%', opacity: 0 }),
        animate('.5s ease-in-out')
      ]),
      transition(':leave', [
        animate('.5s ease-in-out', style({height: '0%', opacity: 0}))
      ])
    ]),
    trigger('fadeInOut', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.5s ease-in-out')
      ]),
      transition(':leave', [
        animate('.5s ease-in-out', style({opacity: 0}))
      ])
    ])
  ],
  
})
export class WorldMapComponent implements OnInit {


  countryHover = '';
  countries = [];
  continents = [];
  viewbox: String = "0 0 2000 1000";
  displayCountries: boolean = false;
  isCountrySelected: boolean;
  displayCountriesList: boolean;
  selectingStarted: boolean = false;
  currentContinent;
  currentCountry;
  hoveredArea: String = "";

  constructor(private geoService: WorldMapService, private areaSelectedService: AreaSelectedService) {
    this.countries = this.geoService.getCountries();
    this.continents = this.geoService.getContinents();
  }
  
  clickedCountry(index) {
    this.areaSelectedService.setCurrentCountry(this.countries[index]);
  }

  clickedContinent(index){
    //this.viewbox = this.continents[index].viewbox;
    this.areaSelectedService.setCurrentContinent(this.continents[index]);
  }


  ngOnInit(){
    this.areaSelectedService.currentContinent$.subscribe((value)=>{
      this.currentContinent = value;
    });
    this.areaSelectedService.continentSelected$.subscribe((value)=>{
      this.displayCountries = value;
      if(!this.displayCountries){
        this.hoveredArea = "";
      }
    });
    this.areaSelectedService.currentCountry$.subscribe((value)=>{
      this.currentCountry = value;
    });
    this.areaSelectedService.countrySelected$.subscribe((value)=>{
      this.isCountrySelected = value;
    });
    this.areaSelectedService.toggleCountriesList$.subscribe((value)=>{
      this.displayCountriesList = value;
    });
  }

  firstClick(){
    this.selectingStarted = true;
  }

 /*  zoomIn(newView) {

        tl = new TimelineMax();
      
        tl.add("zIn");
        tl.fromTo(map, 1.5, {
          attr: { viewBox: this.viewbox}
        }, {
          attr: { viewBox: newView }
        }, "zIn");
      } */

}
