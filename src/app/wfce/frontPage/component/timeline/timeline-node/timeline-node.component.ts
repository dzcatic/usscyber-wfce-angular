import { Component, OnInit, HostListener, Input, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-timeline-node',
  templateUrl: './timeline-node.component.html',
  styleUrls: ['./timeline-node.component.scss'],
  animations: [
    trigger('connect', [
      state('in', style({width: '30%'})),
      transition(':enter', [
        style({ width: '0%' }),
        animate('1s ease-in-out')
      ]),
      transition(':leave', [
        animate('1s ease-in-out', style({width: '0%'}))
      ])
    ]),
    trigger('fadeInOut', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3s ease-in-out')
      ]),
      transition(':leave', [
        animate('3s ease-in-out', style({opacity: 0}))
      ])
    ])],
})
export class TimelineNodeComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  active: boolean;
  inViewPort: boolean;

  @Input()
  leftOriented: boolean;

  @Input()
  data;

  @HostListener('document:scroll', ['$event'])
  onScroll(event) {
    let rect = this.elementRef.nativeElement.getBoundingClientRect();
    this.inViewPort = this.elementInViewport(rect);
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

  public handleMouseOver($event){
    this.active = true;
  }

  public handleMouseLeave($event){
    this.active = false;
  }

}
