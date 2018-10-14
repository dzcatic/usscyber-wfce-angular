import { Component, OnInit } from '@angular/core';
import { WorldMapService } from '../../../services/world-map.service';

@Component({
  selector: 'app-world-map-image',
  templateUrl: './world-map-image.component.html',
  styleUrls: ['./world-map-image.component.scss']
})
export class WorldMapImageComponent implements OnInit {

  countries = [];

  constructor(private geoService: WorldMapService) {
    this.countries = this.geoService.getCountries();
  }

  ngOnInit() {
  }

}
