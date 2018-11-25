import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Subject, forkJoin } from 'rxjs';
import { Country } from '../../model/interface/country';
import { WorldMapService } from '../world-map.service';

@Injectable()
export class FrontPageResolverService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    /* return forkJoin(
      this._worldMapService.loadCountries(),
      this._worldMapService.loadMostValuableTeams()
      ); */
      return this._worldMapService.loadCountries();
  }

  constructor(private _worldMapService: WorldMapService) {}

}
