import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-timeline-coin',
  templateUrl: './timeline-coin.component.html',
  styleUrls: ['./timeline-coin.component.scss'],
  animations: [
    /* trigger('bounceIn', [
      state('in', style({transform: 'translateY(0)'})),
      transition(':enter', [
        animate('.5s ease-in-out', keyframes([
          style({opacity: 0, transform: 'translateY(-50%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(0%)',  offset: 0.2}),
          style({opacity: 1, transform: 'translateY(-25%)',     offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0%)',  offset: 0.7}),
          style({opacity: 1, transform: 'translateY(-10%)',     offset: 1.0})
        ]))
      ]),
      transition(':leave', [
        animate('.5s ease-in-out', style({opacity: 0}))
      ])
    ]), */
   /*  trigger('rotateIn', [
      state('in', style({transform: 'rotateY(0deg)'})),
      transition(':enter', [
        animate('.5s ease-in-out', keyframes([
          style({opacity: 1, transform: 'rotateY(-90deg)', offset: 0}),
          style({opacity: 1, transform: 'rotateY(0deg)',  offset: 0.2}),
          style({opacity: 1, transform: 'rotateY(-180deg)',     offset: 0.5}),
          style({opacity: 1, transform: 'rotateY(-45deg)',  offset: 1})
        ]))
      ]),
      transition(':leave', [
        animate('.5s ease-in-out', style({transform: 'rotateY(-90deg)'}))
      ])
    ]), */
    trigger('rotateIn', [
      state('visible', style({transform: 'rotateY(0deg)'})),
      state('invisible', style({transform: 'rotateY(-90deg)'})),
      transition('invisible => visible', 
      animate('.5s ease-in-out', keyframes([
        style({opacity: 1, transform: 'rotateY(-90deg)', offset: 0}),
        style({opacity: 1, transform: 'rotateY(0deg)',  offset: 0.2}),
        style({opacity: 1, transform: 'rotateY(-180deg)', offset: 0.5}),
        style({opacity: 1, transform: 'rotateY(-45deg)',  offset: 1})
      ]))),
      transition('visible => visible',
      animate('.5s ease-in-out', style({transform: 'rotateY(-90deg)'})))
    ])
  ]
})
export class TimelineCoinComponent implements OnInit {
  
  active: boolean;
  inViewPort: string;
  imageBaseUrl = environment.imageBaseUrl;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  handleMouseOver($event){
    this.active=true;
  }

  handleMouseLeave($event){
    this.active=false;
  }

  @HostListener('document:scroll', ['$event'])
  onScroll(event) {
    let rect = this.elementRef.nativeElement.getBoundingClientRect();
    this.inViewPort = this.elementInViewport(rect) ? "visible" : "invisible";
  }

  private elementInViewport(rect) {

    if (rect.top > 0) {
      return (
        rect.top < (window.pageYOffset + window.innerHeight) &&
        (window.innerHeight - rect.top > rect.height / 2)
      );
    }
    else {
      return (
        rect.top < (window.pageYOffset + window.innerHeight) &&
        (rect.top + rect.height) > rect.height / 2
      );
    }
  }
}
