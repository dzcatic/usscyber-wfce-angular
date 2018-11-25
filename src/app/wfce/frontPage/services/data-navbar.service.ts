import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataNavbarService {

  /**
   * Service for navigating between selected tabs for continent, country and fron page
   */

  public toggleData$ = new BehaviorSubject<any>({value: 'timeline',
                                                scroll: true});

  constructor() { }

  setToggleData(value){
    this.toggleData$.next(value);
  }
  
}