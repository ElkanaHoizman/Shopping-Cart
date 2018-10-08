import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { ProductService } from '../shared/services/product.service';


import { ProductCardComponent } from './components/product-card/product-card.component';
import { PictureComponent } from './components/picture/picture.component';
import { MainComponent } from './components/main/main.component';

import { CoreModule } from '../core/core.module';
import { ShoppingModule } from '../shopping/shopping.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoreModule,
    ShoppingModule,
    Ng2SearchPipeModule
  ],
  declarations: [
  ProductCardComponent,
    PictureComponent,
    MainComponent,



    ],
  providers: [
    ProductService
  ],
  exports : [
    CommonModule,
    FormsModule,
    CommonModule,
    // ProductCardComponent
  ]
})
export class SharedModule { }
