import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CheckoutService } from '../../../services/checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantity = 1;



  @ViewChild('quantityRef')
    quantityRef : ElementRef;

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {

  }

  keyPress(char: KeyboardEvent){
    // max 4 digits quantity can have
    if(this.quantityRef.nativeElement.innerText.length > 3 && !(char.keyCode == 8 || char.keyCode == 46)) {
      event.preventDefault();
      return;
    }
    if(!(+char.keyCode == 8 || +char.keyCode == 46 || +char.keyCode == 37 || +char.keyCode == 39)){
      const pattern = /[0-9]/;
      let inputChar = char.key;


        if (!pattern.test(inputChar) ) {
            // invalid character, prevent input
            event.preventDefault();
            return;
        }
    }

  }

  goToStep(step: string) {
    this.checkoutService.loadCheckoutStep$.next(step)
  }

  /**
   * when blur happen update model, we need to do this on blur because if we update model on every keydown strange behaviour occur with editablecontent
   */
  quantityValueBlur(){
    this.quantity = +this.quantityRef.nativeElement.innerText;
  }



}
