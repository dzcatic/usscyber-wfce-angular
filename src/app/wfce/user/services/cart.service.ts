import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  private numberOfCartItems;

  constructor() { }

  public importCart(){
      this.numberOfCartItems = 15;
  }
  
  public getCartItems() {
    this.importCart();
    return this.numberOfCartItems;
  }
}