import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './components/products/products.component';
import { Page404Component } from './components/page404/page404.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterCategoryComponent } from './components/filter-category/filter-category.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderComponent } from './components/order/order.component';
import { ReturnComponent } from './components/return/return.component';
import { FilterCategoryManagerComponent } from './components/filter-category/filter-category-manager/filter-category-manager.component';


@NgModule({
  imports: [
        CommonModule,
    CoreModule,
    FormsModule,
    RouterModule,
    Ng2SearchPipeModule
  ],
  declarations: [
  ProductsComponent,
       Page404Component,
       ShoppingcartComponent,
       CartItemComponent,
       CartComponent,
       FilterCategoryComponent,
       OrderComponent,
       ReturnComponent,
       FilterCategoryManagerComponent,
      ],
  exports: [
    ShoppingcartComponent,
    CartItemComponent,
    CartComponent,
    FilterCategoryComponent,
    ProductsComponent,
      ]

})
export class ShoppingModule { }
