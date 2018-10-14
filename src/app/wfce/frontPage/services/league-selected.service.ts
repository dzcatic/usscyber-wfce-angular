import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LeagueSelectedService {

  currentLeague$  = new Subject();
  constructor() { }

  setCurrentLeague(value){
    this.currentLeague$.next(value);
  }
}
