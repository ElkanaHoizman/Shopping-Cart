import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  category: string;
  term: string;
  items: any;
  Qty_products: any;
  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute
    ) {
    this._activatedRoute.queryParams.subscribe(params => {
      this.category = params['category'];
      this.category === undefined ? this.get() : this.get_category();
    });
   }

  ngOnInit() {
         }
  get() {
    this._productService.getAll().subscribe(product => {
      this.items = product;
      console.log(product);
      this.Qty_products = this.items.data.length;
      this.products = this.items.data;
    });
  }
  get_category() {
    const category = this.items.data.filter(c => c.categoryid.name === this.category);
    this.products = category;
    this.Qty_products = category.length;
  }
    }





