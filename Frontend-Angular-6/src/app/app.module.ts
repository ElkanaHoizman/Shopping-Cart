import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { ProductService } from './shared/services/product.service';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule} from './core/core.module';
import { ShoppingModule } from './shopping/shopping.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';


import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
// import { SearchComponent } from './ahared/components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    // SearchComponent,
    // CoreModule
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ShoppingModule,
    SharedModule,
    AdminModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
