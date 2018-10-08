import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CartItemService } from '../../../shared/services/cart-item.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as jspdf from 'jspdf';


@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
  @ViewChild('content') content: ElementRef;

  items: any;
  cartsid;
  cart: number;
  constructor(
    private _cartItemService: CartItemService,
      private _route: ActivatedRoute,
    private _router: Router
    ) {
    this._route.queryParams.subscribe(params => {
      this.cart = params['id'];
      // this.order.cartid = this.cart;
    });
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
     }
  Approval() {
    this._router.navigate(['/']);
  }
  public downloadPDF() {
    const doc = new jspdf();
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    const content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save('cart.pdf');
  }

}
