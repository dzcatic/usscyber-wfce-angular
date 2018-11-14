import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-teams-filter',
  templateUrl: './user-teams-filter.component.html',
  styleUrls: ['./user-teams-filter.component.scss']
})
export class UserTeamsFilterComponent implements OnInit {

  continents= [
    {
      id: 5,
      viewbox: "800 0 500 400",
      name: 'Europe',
      countries: []
    },
    {
      id: 3,
      viewbox: "1000 0 900 700",
      name: 'Asia',
      countries: []
    },
    {
      id: 1,
      viewbox: "800 300 500 500",
      name: 'Africa',
      countries: []
    },
    {
      id: 6,
      viewbox: "0 0 1000 600",
      name: 'North America',
      countries: []
    },
    {
      id: 7,
      viewbox: "0 400 900 600",
      name: 'South America',
      countries: []
    },
    {
      id: 4,
      viewbox: "1500 500 800 400",
      name: 'Australia',
      countries: []
    },
    {
      id: 8,
      viewbox: "1500 500 800 400",
      name: 'Oceania',
      countries: []
    }
    ];;

  constructor() { }

  ngOnInit() {
  }

}
