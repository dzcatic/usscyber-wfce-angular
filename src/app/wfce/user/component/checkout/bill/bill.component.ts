import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { CheckoutService } from '../../../services/checkout.service';

@Component({
  selector: 'app-bill',
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
export class BillComponent implements OnInit {

  @Input()
  selectedStringQr;

  showModal = false;

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
      this.checkoutService.showSuccesModal$.subscribe((show) => {
          this.showModal = show;
      });
      console.log(this.selectedStringQr)
  }

  finishOrder() {
    this.showModal = true;
  }

  goToStep(step: string) {
    this.checkoutService.loadCheckoutStep$.next(step);
  }

}
