import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  imageBaseUrl = environment.imageBaseUrl;
  public timelineData = [
    {
      title: "aboutUs",
      src: this.imageBaseUrl + "assets/img/timeline/group24.png"
    },
    {
      title: "regulations",
      src: this.imageBaseUrl + "assets/img/timeline/group14.png"
    },
    {
      title: "insurance",
      src: this.imageBaseUrl + "assets/img/timeline/group24.png"
    },
    {
      title: "security",
      src: this.imageBaseUrl + "assets/img/timeline/group14.png"
    },
    {
      title: "kyc",
      src: this.imageBaseUrl + "assets/img/timeline/group24.png"
    }
  ];

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  openSignUp(){
    this._router.navigate(['signup'], { relativeTo: this._route });
  }

}
