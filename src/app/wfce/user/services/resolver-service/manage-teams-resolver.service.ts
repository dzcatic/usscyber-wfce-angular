import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Subject, forkJoin } from 'rxjs';
import { CartService } from '../cart.service';
import { TopTeamsService } from '../teams.service';

@Injectable()
export class ManageTeamsResolverService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
     /*  return forkJoin(
      this.teamsService.loadWatchedTeams();),
      this._worldMapService.loadMostValuableTeams()
      ); */
    return this.teamsService.loadWatchedTeams();
      //return this._cartService.loadCart();
  }

  constructor(private teamsService: TopTeamsService) {}

}
