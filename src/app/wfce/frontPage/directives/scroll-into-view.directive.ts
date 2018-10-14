import { Directive, ElementRef } from '@angular/core';
import { LeagueSelectedService } from '../services/league-selected.service';
import { TimelineService } from '../services/timeline.service';

@Directive({
  selector: '[appScrollIntoView]'
})
export class ScrollIntoViewDirective {

  constructor(private elementRef: ElementRef, private leagueSelected: LeagueSelectedService, private timelineService: TimelineService) { 
    this.leagueSelected.currentLeague$.subscribe((value)=>{
      if(value)
      { 
        this.scrollIntoViewStart();
      }
    });
    this.timelineService.toggleTimeline$.subscribe((value)=>{
      if(value)
      { 
        this.scrollIntoViewStart();
      }
    });
  }

  scrollIntoViewStart(){
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "start"});
  }

}
