import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Subject } from 'rxjs';
import { Country } from '../../model/interface/country';
import { WorldMapService } from '../world-map.service';

@Injectable()
export class FrontPageResolverService implements Resolve<Country[]> {

  menuCards;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country[]> {
      return this._worldMapService.loadCountries();
  }

  constructor(private _worldMapService: WorldMapService) {}

}
