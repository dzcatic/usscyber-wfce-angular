import { Directive, ElementRef } from '@angular/core';
import {TweenLite, Power2, TimelineMax, TweenMax} from "gsap";
import { AreaSelectedService } from '../services/area-selected.service';
import { Continent } from '../model/interface/continent';

@Directive({
  selector: '[appAnimateSvg]'
})
export class AnimateSvgDirective {

  timeline;
  continentZoom: boolean;
  originalContinentViewbox = "0 0 2000 1000";
  continentViewbox = "0 0 2000 1000";

  constructor(private map: ElementRef, private areaSelectedService: AreaSelectedService) { 
    //this.zoomInOutContinent(this.continentViewbox, this.originalContinentViewbox);
    this.areaSelectedService.continentSelected$.subscribe((value)=>{
      this.continentZoom = value;
    });
    this.areaSelectedService.currentContinent$.subscribe((value: Continent)=>{
      if(this.continentZoom)
      {
        this.continentViewbox = value.viewbox;
        this.zoomInOutContinent(this.originalContinentViewbox, value.viewbox)
      }
      else{
        this.zoomInOutContinent(this.continentViewbox, this.originalContinentViewbox)
      }
    })
  }

  zoomInOutContinent(oldView, newView){
    let timeline = new TimelineMax();
    timeline.fromTo(this.map.nativeElement, 1.5, {
      attr: { viewBox: oldView}
    }, {
      attr: { viewBox: newView }
    }, "zIn");

  }

}
