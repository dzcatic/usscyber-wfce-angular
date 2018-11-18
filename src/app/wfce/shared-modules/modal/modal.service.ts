import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class ModalService {

  public toggleModal$ = new BehaviorSubject<boolean>(false);
  public data$ = new Subject;

  constructor() { }

  closeModal(){
    this.toggleModal$.next(false);
  }

  openModal(){
    this.toggleModal$.next(true);
  }

  setModalData(value){
      this.data$.next(value);
  }
  
}