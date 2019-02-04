import { Component, OnInit } from '@angular/core';
import { DataNavbarService } from '../../../services/data-navbar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  constructor(private dataNavbarService: DataNavbarService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  openDashobardTimeline(){
    this._router.navigate(['dashboard']);
    this.dataNavbarService.setToggleData({value: 'timeline',
                                          scroll: true});
  }

}

