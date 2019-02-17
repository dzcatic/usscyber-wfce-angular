import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class NavbarIndicatorService {

  public toggleIndicator$ = new BehaviorSubject<boolean>(false);
  public data$ = new Subject;

  constructor() { }

  closeIndicator(){
    this.toggleIndicator$.next(false);
  }

  openIndicator(){
    this.toggleIndicator$.next(true);
    setTimeout(()=>{
        this.closeIndicator();
    }, 3000);
  }

  setIndicatorData(value){
      this.data$.next(value);
  }
  
}