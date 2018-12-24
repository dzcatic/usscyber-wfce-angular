import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { CheckoutService } from '../../../services/checkout.service';

@Component({
  selector: 'app-bill2',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
  animations: [
    trigger('flyInFromTop', [
      state('in', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(-230%)' }),
        animate(500)
      ])
    ])
  ]
})
export class Bill2Component implements OnInit {

  showModal = false;

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
      this.checkoutService.showSuccesModal$.subscribe((show) => {
          this.showModal = show;
      });
  }

  finishOrder() {
    this.showModal = true;
  }

}
