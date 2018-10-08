import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItemService } from '../../../shared/services/cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  data: any = {
    productid: '',
    amount: '',
    cartid: ''
  };
  cart: number;
  cartsid: any;
  items: any;
  total_price: any;
  total_amount: number;
  constructor(
    private __activatedRoute: ActivatedRoute,
    private _cartItemService: CartItemService,
  ) {
    this.__activatedRoute.queryParams.subscribe(params => {
      this.cart = params['id'];
    });
    console.log(this.cartsid);
   }

  ngOnInit() {
   this.get();
  }
  get() {
    this._cartItemService.get().subscribe(data => {
      this.items = data;
          this.display(data);
    });
  }
  display(d) {
  this.cartsid = d.data.filter(c => c.cartid._id === this.cart);
  // console.log(this.cartsid);
    this.total_amount = this.get_total_Qty(this.cartsid);
    this.total_price = this.get_total_price(this.cartsid);
  }
  get_total_Qty(cartsid) {
    let total_amount = 0;
    for (let i = 0; i < cartsid.length; i++) {
      total_amount += cartsid[i].amount;
    }
    return total_amount;
  }
  get_total_price( cartsid) {
    let total_price = 0;
    for (let i = 0; i < cartsid.length; i++) {
      total_price += cartsid[i].generalprice;
    }
    return total_price;
  }

  plus(id, quantity, cart) {
    quantity.value++;
    this.data.productid = id;
    this.data.amount = quantity.value;
    this.data.cartid = cart;
    const cartsid = this.items.data.filter(c => c.cartid._id === this.data.cartid && c.productid._id === this.data.productid);

    cartsid.length > 0 ? this.put() : this.add();
  }
  minus(id, quantity, cart) {
    quantity.value--;
    this.data.productid = id;
    this.data.amount = quantity.value;
    this.data.cartid = cart;
    const cartsid = this.items.data.filter(c => c.cartid._id === this.data.cartid && c.productid._id === this.data.productid);

    cartsid.length > 0 ? this.put() : this.add();
  }
  put() {
    const product = this.items.data.filter(p => p.productid._id === this.data.productid && p.cartid._id === this.data.cartid);
    for (let i = 0; i < product.length; i++) {
      this._cartItemService.put(product[i]._id, this.data).subscribe(p => {
        this.get();
      });
    }
  }
  add() {
    this._cartItemService.Add(this.data).subscribe(c => {
      this.get();
    });
  }
  clear_item(id) {
    const remove = this.cartsid.filter(product => product._id !== id);
    this.cartsid = remove;
    this._cartItemService.delete(id).subscribe();
    this.total_amount = this.get_total_Qty(this.cartsid);
    this.total_price = this.get_total_price(this.cartsid);
     console.log(this.cartsid);
  }
  clearAll() {
    const clear = this.cartsid.filter(product => product.cartid._id === this.cart);
    for (let i = 0; i < clear.length; i++) {
      this._cartItemService.delete(clear[i]._id).subscribe();
    }
    const clear_display = this.cartsid.filter(product => product.cartid._id !== this.cart);
    this.cartsid = clear_display;
     this.total_amount = this.get_total_Qty(this.cartsid);
    this.total_price = this.get_total_price(this.cartsid);

    }
  }

