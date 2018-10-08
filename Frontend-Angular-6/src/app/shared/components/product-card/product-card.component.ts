import { Component, OnInit, Input} from '@angular/core';
import { ProductService } from '../../services//product.service';
import { ActivatedRoute } from '@angular/router';
import { CartItemService } from '../../services/cart-item.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  products: any;
  cartid: number;
  category: string;
  // cartid;
  id = 0;
  term = '';
  items: any;
  Qty_products: any;
  Qty_items: number;
   constructor(
     private _productService: ProductService,
     private _activatedRoute: ActivatedRoute,
    ) {
     this._activatedRoute.queryParams.subscribe(params => {
       this.cartid = params['id'];
       this.category = params['category'];
       this.category === undefined ? this.get() : this.get_category();
      //  alert(this.category);
     });
     }

  ngOnInit() {
    // this.category === undefined ? this.get() : this.get_category();
    // this.get();
   }
  get() {
    this._productService.getAll().subscribe(product => {
      this.items = product;
      this.Qty_products = this.items.data.length;
      this.products = this.items.data;
    });
  }
  get_category() {
    const category = this.items.data.filter(c => c.categoryid.name === this.category );
    this.products = category;
    this.Qty_products = category.length;
    // console.log(category.length);

  }
  Qty(e) {
    // console.log(e);
    this.Qty_items = e;
  }
}
