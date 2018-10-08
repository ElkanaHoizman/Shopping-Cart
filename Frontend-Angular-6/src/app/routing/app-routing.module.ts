import { NgModule } from '@angular/core';
import { AuthGuardService } from '../shared/services/auth-guard.service';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { ProductsComponent } from '../shopping/components/products/products.component';
import { AddProductComponent } from '../admin/components/add-product/add-product.component';
import { Page404Component } from '../shopping/components//page404/page404.component';
import { RegistrerComponent } from '../core/components/registrer/registrer.component';
import { MainComponent } from '../shared/components/main/main.component';
import { ShoppingcartComponent } from '../shopping/components/shoppingcart/shoppingcart.component';
import { CartComponent } from '../shopping/components/cart/cart.component';
import { EditComponent } from '../admin/components/edit/edit.component';
import { OrderComponent } from '../shopping/components/order/order.component';
import { ReturnComponent } from '../shopping/components/return/return.component';

const routes: Routes = [
  { path: 'registrer', component: RegistrerComponent },

  // { path: 'Products_Manager', component: ProductsComponent },
  { path: 'add', component: AddProductComponent, canActivate: [AuthGuardService]},
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuardService]  },


  // { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'product', component: ProductCardComponent, canActivate: [AuthGuardService]  },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuardService] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuardService]},
  { path: 'return', component: ReturnComponent, canActivate: [AuthGuardService] },
  { path: '', component: MainComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false } ) ,
   ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
