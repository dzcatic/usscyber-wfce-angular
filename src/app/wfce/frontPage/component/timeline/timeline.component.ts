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
      title: "About us",
      description: "WFCE is a trademark of World Sports Coin Exchange. World Footbal Coin Exchange or WFCE for short is the first innovation of cryptocurrency for sports.", 
      src: "assets/img/timeline/group24.png"
    },
    {
      title: "Regulations",
      description: "As the WSCE and WFCE are regulated public companies, that comply with all local and international laws. As this is the case, we required the same information that most financial institutions ask for when opening accounts. ",
      src: "assets/img/timeline/group14.png"
    },
    {
      title: "Insurance",
      description: "There are two kinds of insurance, sales protection insurance, and price protection insurance.",
      src: "assets/img/timeline/group24.png" 
    },
    {
      title: "Security",
      description: "WSCE takes security very seriously; we implement many security related technologies to protect our clients, WSCE and our assets.",
      src: "assets/img/timeline/group14.png" 
    },
    {
      title: "Know Your Customer (KYC)",
      description: "Due to regulatory compliance, we require a reasonable amount of information on our clients before permitting them to access our system.",
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
