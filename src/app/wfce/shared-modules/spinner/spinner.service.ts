import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class SpinnerService {

  public toggleSpinner$ = new BehaviorSubject<boolean>(true);

  constructor() { }

  closeSpinner(){
      console.log("close")
    this.toggleSpinner$.next(false);
  }

  openSpinner(){
    this.toggleSpinner$.next(true);
  }
}