import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CheckoutService } from '../../../services/checkout.service';
import { CartService } from '../../../services/cart.service';
import { Cart, Item } from '../../../../interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantity = 1;
  public cart: Cart;
  timeoutHandle;

  clubStyle={
    component: "image-rows",
    name: {},
    league: "small fade"
  };

  @ViewChild('quantityRef')
    quantityRef : ElementRef;

  constructor(private checkoutService: CheckoutService,
              private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cart$.subscribe((value)=>{
      this.cart = value;
      console.log("inside cart big", this.cart)
    })
  }

  onInputChange(value, item: Item){
    clearTimeout(this.timeoutHandle);
    this.timeoutHandle = setTimeout(()=>{
      item.amount = value;
      this.cartService.updateCart(item.teamId, item.amount);
    },500);
  }

  keyPress(char: KeyboardEvent, item: Item, value){
    clearTimeout(this.timeoutHandle);
    console.log(char);
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
        this.timeoutHandle = setTimeout(()=>{
          item.amount = value;
          this.cartService.updateCart(item.teamId, item.amount);
        },500);
    }

  }

  goToStep(step: string) {
    this.checkoutService.loadCheckoutStep$.next(step)
  }

  /**
   * when blur happen update model, we need to do this on blur because if we update model on every keydown strange behaviour occur with editablecontent
   */
  quantityValueBlur(item){
    this.quantity = +this.quantityRef.nativeElement.innerText;
  }

  /**
   * arrow down pressed, wait for a certain amount of time before sending api
   */
  arrowDownPressed(item: Item){
    clearTimeout(this.timeoutHandle);
    item.amount = item.amount == 1 ? 1 : item.amount - 1; //handle delete from cart
    this.timeoutHandle = setTimeout(()=>{
      this.cartService.updateCart(item.teamId, item.amount);
    },500);
  }

  /**
   * arrow up pressed, wait for a certain amount of time before sending api
   */
  arrowUpPressed(item: Item){
    clearTimeout(this.timeoutHandle);
    item.amount = item.amount + 1;
    this.timeoutHandle = setTimeout(()=>{
      this.cartService.updateCart(item.teamId, item.amount);
    },500);
  }

}
