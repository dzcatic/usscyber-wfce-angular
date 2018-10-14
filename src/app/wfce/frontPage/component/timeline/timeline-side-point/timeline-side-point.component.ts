import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-timeline-side-point',
  templateUrl: './timeline-side-point.component.html',
  styleUrls: ['./timeline-side-point.component.scss'],
  animations: [
    /* trigger('scaleOnEnterLeave', [
      state('in', style({transform: 'scale(1.1)', transformOrigin: "50% 50%", offset: 1})),
      transition(':enter', [
        style({transform: 'scale(0.1)', transformOrigin: "50% 50%", offset: 1}),
        animate('1s ease-in-out')
      ]),
      transition(':leave', [
        animate('1s ease-in-out', style({transform: 'scale(0.1)', transformOrigin: "50% 50%", offset: 1}))
      ])
    ]) *//* ,
    trigger('hovered', [
      state('small', style({transform: 'scale(0.1)'})),
      state('large', style({transform: 'scale(1.2'})),
      transition('small => large', 
      animate('1s ease-in-out')),
      transition('large => small',
      animate('1s ease-in-out'))
    ]) */
  ]
})
export class TimelineSidePointComponent implements OnInit {

  public hovered: string = "small";

  constructor() { }

  @Input()
  leftOriented: boolean;

  @Input()
  inViewPort: boolean;

  @HostBinding('style.left') get styleLeft(): string {
    return this.leftOriented ?  "20%" : "";
  }

  @HostBinding('style.right') get styleRight(): string {
    return this.leftOriented ?  "" : "20%";
  }

  ngOnInit() {
  }

  onDone($event) {
    if(this.hovered === 'small'){
      this.hovered =  'large';
    }
    else{
      this.hovered =  'small';
    }
    console.log(this.hovered)
  }

}
