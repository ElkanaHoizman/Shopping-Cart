import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItemService } from '../../../shared/services/cart-item.service';
import { OrderService } from '../../../shared/services/order.service';
import { UsersService } from '../../../shared/services/users.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order = {
    userid: '',
    cartid: 0,
    finalprice: 0,
    city: '',
    street: '',
    shippingdate: '',
    digits: '',
  };


  cart: number;
  cartsid: any;
  items: any;
  total_price: any;
  total_amount: number;
  getuser;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cartItemService: CartItemService,
    private _orderService: OrderService,
    private _usersService: UsersService,
    private _router: Router
  ) {
    this._activatedRoute.queryParams.subscribe(params => {
      this.cart = params['id'];
      this.order.cartid = this.cart;
    });
  }

  ngOnInit() {
    this.get();
    this._usersService.get().subscribe(data => {
      // console.log(data);
      this.getuser = data;
    });
  }
  get() {
    this._cartItemService.get().subscribe(data => {
      this.items = data;
      this.display(data);
    });
  }
  display(d) {
    this.cartsid = d.data.filter(c => c.cartid._id === this.cart);
    // console.log(this.cartsid[0].cartid.userid);
    this.total_amount = this.get_total_Qty(this.cartsid);
    this.total_price = this.get_total_price(this.cartsid);

    this.order.userid = this.cartsid[0].cartid.userid;
    this.order.finalprice = this.total_price;

  }
  get_total_Qty(cartsid) {
    let total_amount = 0;
    for (let i = 0; i < cartsid.length; i++) {
      total_amount += cartsid[i].amount;
    }
    return total_amount;
  }
  get_total_price(cartsid) {
    let total_price = 0;
    for (let i = 0; i < cartsid.length; i++) {
      total_price += cartsid[i].generalprice;
    }
       return total_price;
  }
  orders(data) {
    this.order.city = data.city;
    this.order.street = data.street;
    this.order.shippingdate = data.shippingdate;
    this.order.digits = data.digits;
    console.log(this.order);
    this._orderService.Add(this.order).subscribe(order => {
      this._router.navigate(['/return'], { queryParams: { id: this.cart }});
    });
  }
  user() {
    const user = this.getuser.data.filter(data => data._id === this.order.userid);
    this.order.city = user[0].city;
    this.order.street = user[0].street;
  }

}
