import { Component, OnInit } from '@angular/core';
import { DataNavbarService } from '../../../services/data-navbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  imageBaseUrl = environment.imageBaseUrl;
  constructor(private dataNavbarService: DataNavbarService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  openDashobardTimeline(){
    this._router.navigate(['']);
    this.dataNavbarService.setLateScroll({value: 'timeline',
    scroll: true});
    /* this.dataNavbarService.setToggleData({value: 'timeline',
                                          scroll: true}); */
  }

}

