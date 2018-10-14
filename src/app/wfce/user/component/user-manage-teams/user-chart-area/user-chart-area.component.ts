import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-chart-area',
  templateUrl: './user-chart-area.component.html',
  styleUrls: ['./user-chart-area.component.scss']
})
export class UserChartAreaComponent implements OnInit {

  @Input()
  selectedTeam;

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;

  colorScheme = {
    domain: ['#69e881']
  };

  // line, area
  autoScale = true;

  constructor() { }

  ngOnInit() {
  }

}
