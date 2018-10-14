import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-line',
  templateUrl: './timeline-line.component.html',
  styleUrls: ['./timeline-line.component.scss']
})
export class TimelineLineComponent implements OnInit {

  constructor() { }

  @Input()
  height: string;

  ngOnInit() {
  }

}
