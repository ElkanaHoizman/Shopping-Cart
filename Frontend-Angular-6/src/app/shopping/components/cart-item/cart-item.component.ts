import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItemService } from '../../../shared/services/cart-item.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Output() paernt: EventEmitter<any> = new EventEmitter();

  @Input() productid;
  // @Input() category;
  data: any = {
    productid: '',
    amount: '',
    cartid: ''
  };
  cart: number;
  items: any;
  total_amount: number;
  Qty: any;
  // cartsid;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cartItemService: CartItemService,
  ) {
    this._activatedRoute.queryParams.subscribe(params => {
      this.cart = params['id'];
    });
    // console.log(this.products)
   }

  ngOnInit() {
     this.get();
  }
  plus(id, quantity , cart) {
    quantity.value++;
    this.data.productid = id;
    this.data.amount = quantity.value;
    this.data.cartid = cart;
    const cartsid = this.items.data.filter(c => c.cartid._id === this.data.cartid && c.productid._id === this.data.productid);
    // console.log(cartsid);
    cartsid.length > 0 ? this.put() : this.add();
  }


  minus(id, quantity, cart) {
    quantity.value--;
    this.data.productid = id;
    this.data.amount = quantity.value;
    this.data.cartid = cart;
    const cartsid = this.items.data.filter(c => c.cartid._id === this.data.cartid);
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
  get() {
    this._cartItemService.get().subscribe(item => {
      this.items = item;
      const Qty = this.items.data.filter(c => c.cartid._id === this.cart && c.productid._id === this.productid   );
      this.Qty = Qty;
      this. get_total_Qty();

});
  }
  get_total_Qty() {

    const cartsid = this.items.data.filter(c => c.cartid._id === this.cart);
     this.total_amount = 0;
    for (let i = 0; i < cartsid.length; i++) {
      this.total_amount += cartsid[i].amount;
    }
    this.paernt.emit(this.total_amount);
    return this.total_amount;

  }
}
