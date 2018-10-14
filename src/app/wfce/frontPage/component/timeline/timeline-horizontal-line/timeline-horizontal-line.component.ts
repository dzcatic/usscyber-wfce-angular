import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-horizontal-line',
  templateUrl: './timeline-horizontal-line.component.html',
  styleUrls: ['./timeline-horizontal-line.component.scss']
})
export class TimelineHorizontalLineComponent implements OnInit {

  @Input()
  leftOriented: boolean;

  @HostBinding('style.left') get styleLeft(): string {
    return this.leftOriented ?  "" : "50%";
  }

  @HostBinding('style.right') get styleRight(): string {
    //console.log(this.leftOriented)
    return this.leftOriented ?  "50%" : "";
  }

  constructor() { }

  ngOnInit() {
  }

}
