import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, transition, animate, keyframes, style, state } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timeline-end',
  templateUrl: './timeline-end.component.html',
  styleUrls: ['./timeline-end.component.scss'],
  animations: [
    trigger('bounceIn', [
      state('in', style({transform: 'translateY(0)'})),
      transition(':enter', [
        animate('3s ease-in-out', keyframes([
          style({opacity: 0, transform: 'translateY(-50%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(0%)',  offset: 0.2}),
          style({opacity: 1, transform: 'translateY(-25%)',     offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0%)',  offset: 1.0}),
        ]))
      ]),
      transition(':leave', [
        animate('.5s ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class TimelineEndComponent implements OnInit {

  inViewPort: boolean;

  constructor(private elementRef: ElementRef, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  @HostListener('document:scroll', ['$event'])
  onScroll(event) {
    if(!this.inViewPort){
      let rect = this.elementRef.nativeElement.getBoundingClientRect();
      this.inViewPort = this.elementInViewport(rect);
    }
    
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

  openSignUp(){
    this._router.navigate(['signup'], { relativeTo: this._route });
  }

}
