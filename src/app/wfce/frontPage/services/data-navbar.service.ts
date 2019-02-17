import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataNavbarService {

  /**
   * Service for navigating between selected tabs for continent, country and front page
   */

  private toggleData;
  private lateScroll;

  public toggleData$ = new BehaviorSubject<any>({value: 'timeline',
                                                scroll: true});

  constructor() { }

  setToggleData(value){
    this.toggleData = value;
    this.toggleData$.next(value);
  }

  getToggleData(){
    return this.toggleData;
  }

  setLateScroll(value){
    this.toggleData = value;
    this.lateScroll = true;
  }

  checkAndDoLateScroll(){
    if(this.lateScroll){
      this.setToggleData(this.toggleData);
    }
    this.lateScroll = false;
  }

  
}