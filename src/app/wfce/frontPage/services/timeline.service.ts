import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TimelineService {

  toggleTimeline$ = new BehaviorSubject<boolean>(false);
  scrollTimeline$ = new BehaviorSubject<boolean>(false);
  timelineSelected = false;

  constructor() { }

  toggleTimeline(){
    //this.toggleTimeline$.next(!this.timelineSelected);
    //this.timelineSelected = !this.timelineSelected;
    this.toggleTimeline$.next(true);
  }

  scrollToTimeline(value){
    this.scrollTimeline$.next(value);
  }
}
