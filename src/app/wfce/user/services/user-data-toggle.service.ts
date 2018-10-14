import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserDataToggleService {

  public toggleUserData$ = new BehaviorSubject<string>('dashboard');

  constructor() { }

  setToggleUserData(value){
    this.toggleUserData$.next(value);
  }
  
}