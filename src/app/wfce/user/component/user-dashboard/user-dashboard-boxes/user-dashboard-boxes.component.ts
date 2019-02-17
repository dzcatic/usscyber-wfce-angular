import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ModalService } from '../../../../shared-modules/modal/modal.service';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-user-dashboard-boxes',
  templateUrl: './user-dashboard-boxes.component.html',
  styleUrls: ['./user-dashboard-boxes.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({height: '100%', opacity: 1})),
      transition(':enter', [
        style({ height: '0%', opacity: 0 }),
        animate('.5s ease-in-out')
      ]),
      transition(':leave', [
        animate('.5s ease-in-out', style({height: '0%', opacity: 0}))
      ])
    ])
  ]
})
export class UserDashboardBoxesComponent implements OnInit {

  public openedModal = false;
  imageBaseUrl = environment.imageBaseUrl;

  get dayOfTheWeek() : string { return new Date().toLocaleString('en-us', {  weekday: 'long' }); }

  get year() : number {return new Date().getFullYear(); }

  get month() : string { return new Date().toLocaleString('en-us', {  month: 'long' }); }

  get dayOfTheMonth() : string { 
    let day = new Date().getDate();
    return day + this.getDayOfMonthSuffix(day);
  }
  getDayOfMonthSuffix(n) {
    if (n >= 11 && n <= 13) {
        return "th";
    }
    switch (n % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
  }
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.toggleModal$.subscribe((value)=>{
      this.openedModal = value;
    })
  }

  openModal(){
    this.modalService.openModal();
  }

}
