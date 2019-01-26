import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public timelineData = [
    {
      title: "aboutUs",
      src: "assets/img/timeline/group24.png"
    },
    {
      title: "regulations",
      src: "assets/img/timeline/group14.png"
    },
    {
      title: "insurance",
      src: "assets/img/timeline/group24.png"
    },
    {
      title: "security",
      src: "assets/img/timeline/group14.png"
    },
    {
      title: "kyc",
      src: "assets/img/timeline/group24.png"
    }
  ];

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  openSignUp(){
    this._router.navigate(['signup'], { relativeTo: this._route });
  }

}
