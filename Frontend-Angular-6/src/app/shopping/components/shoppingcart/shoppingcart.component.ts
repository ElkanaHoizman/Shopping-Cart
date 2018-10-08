import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingcartService } from '../../../shared/services/shoppingcart.service';
import { UsersService } from '../../../shared/services/users.service';
import { OrderService } from '../../../shared/services/order.service';
import { CartItemService } from '../../../shared/services/cart-item.service';
// import { formatDate } from '@angular/common';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit  {
  data: any = {
  userid : '',
  };
  cart: any;
  // getuserid;
  starts_user;
  purchase_number;
  message: string;
  order;
  lest_order;
  lest_order_id: number;
  shoppings;
  shopping;
  shopping_id: number;
  items: any;
  total_amount: number;
  constructor(
    private _router: Router,
    private _shoppingcartService: ShoppingcartService,
    private _orderService: OrderService,
    private _cartItemService: CartItemService
  ) { }

  ngOnInit() {
    this.data.userid = localStorage.getItem('id');
    this.starts_users();
  }

  starts_users() {
    this.get_order();
    this.get_shopping();
this._shoppingcartService.get().subscribe(shopping => {
  this.starts_user = shopping;
  const user = this.starts_user.data.filter(u => u.userid._id === this.data.userid);
  if (user.length === 0 ) {
    this.message = 'Welcome to your first purchase!';
  }
  if (user.length > 0 && this.lest_order_id === this.shopping_id ) {
    this.message = `Your last purchase was made on : ${this.lest_order.orderdate}  In a Total Price : ${this.lest_order.finalprice}`;
  }
  if (user.length > 0 && this.lest_order_id !== this.shopping_id) {
    this.message = `Cart is active :  ${this.shopping.date }`;
    this.get_total_Qty();
  }
});
  }
  get_order() {
    this._orderService.get().subscribe(order => {
      this.order = order;
      const orders = this.order.data.filter(o => o.userid === this.data.userid);
        for (let i = 0; i < orders.length; i++) {
          this.lest_order = orders[i];
          this.lest_order_id = this.lest_order.cartid;
        }
    });
  }
  get_shopping() {
    this._shoppingcartService.get().subscribe(shopping => {
      this.shoppings = shopping;
      const user = this.shoppings.data.filter(u => u.userid._id === this.data.userid);
      for (let i = 0; i < user.length; i++) {
        this.shopping = user[i];
        this.shopping_id = this.shopping._id;
      }

    });
  }
  start() {
      this._shoppingcartService.Add(this.data).subscribe(d => {
        this.product();
      });

  }
  Continue() {
    this._shoppingcartService.put( this.shopping_id , this.data).subscribe(d => {
       this._router.navigate(['/product'], { queryParams: { id: this.shopping_id } });
     });
  }
  product() {
  this._shoppingcartService.get().subscribe(data => {
    this.cart = data;
    const start = this.cart.data.filter(cart => cart.userid._id === this.data.userid);
    for (let i = 0; i < start.length; i++) {
     start ? this._router.navigate(['/product'], { queryParams: { id: start[i]._id } }) : console.log('') ;
    }
  });
  }
  get_total_Qty() {
 this._cartItemService.get().subscribe(item => {
   this.items = item;
   const cartsid = this.items.data.filter(c => c.cartid._id === this.shopping._id);
     this.total_amount = 0;
    for (let i = 0; i < cartsid.length; i++) {
      this.total_amount += cartsid[i].amount;
    }
    return this.total_amount;
 });
  }
}
