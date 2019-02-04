import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable()
export class TeamsSelectedService {

  numberOfPages: number;
  mostValuableTeams$ = new ReplaySubject();
  /* currentLeague$  = new Subject(); */
  constructor() { }

  /* setCurrentLeague(value){
    this.currentLeague$.next(value);
  } */

  setMostValuableTeams(value){
    this.mostValuableTeams$.next(value);
  }

  setNumberOfPages(value){
    this.numberOfPages = value;
  }

  getNumberOfPages(){
    return this.numberOfPages;
  }
}
