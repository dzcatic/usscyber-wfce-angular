import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class AreaSelectedService {

  continentSelected$ = new BehaviorSubject<boolean>(false);
  countrySelected$ = new BehaviorSubject<boolean>(false);
  toggleCountriesList$ = new BehaviorSubject<boolean>(false);
  currentContinent$  = new Subject();//change this to object maybe
  currentCountry$ = new Subject();//change this to object maybe
  
  constructor() { }

  setCurrentContinent(value){
    if(value != ""){
      this.setContinentSelected(true);
    }
    else{
      this.setContinentSelected(false);
      this.toggleCountriesList(false);
      this.setCurrentCountry("");
    }
    this.currentContinent$.next(value);
  }

  setCurrentCountry(value){
    if(value != ""){
      this.setCountrySelected(true);
    }
    else{
      this.setCountrySelected(false);
    }
    this.currentCountry$.next(value);
  }

  setCountrySelected(value){
    this.countrySelected$.next(value);
  }

  setContinentSelected(value){
    this.continentSelected$.next(value);
  }

  toggleCountriesList(value){
    if(value){
      this.setCurrentCountry("");
    }
    this.toggleCountriesList$.next(value);
  }

}
