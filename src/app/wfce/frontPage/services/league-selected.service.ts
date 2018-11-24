import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LeagueSelectedService {

  countryLeagues$ = new Subject();
  currentLeague$  = new Subject();
  constructor() { }

  setCurrentLeague(value){
    this.currentLeague$.next(value);
  }

  setCountryLeagues(value){
    this.countryLeagues$.next(value);
  }
}
