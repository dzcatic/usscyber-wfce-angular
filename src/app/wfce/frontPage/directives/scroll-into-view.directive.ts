import { Directive, ElementRef } from '@angular/core';
import { LeagueSelectedService } from '../services/league-selected.service';
import { TimelineService } from '../services/timeline.service';
import { DataNavbarService } from '../services/data-navbar.service';

@Directive({
  selector: '[appScrollIntoView]'
})
export class ScrollIntoViewDirective {

  constructor(private elementRef: ElementRef, private dataNavbarService: DataNavbarService) { 
    this.dataNavbarService.toggleData$.subscribe((value)=>{
      if(value.scroll)
      { 
        this.scrollIntoViewStart();
      }
    })
  }

  scrollIntoViewStart(){
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "start"});
  }

}
