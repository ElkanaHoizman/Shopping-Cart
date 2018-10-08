import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrerComponent } from './components/registrer/registrer.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ShoppingModule } from '../shopping/shopping.module';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    // ShoppingModule
  ],
  declarations: [
  NavbarComponent,
    RegistrerComponent,
    LoginComponent],
  exports: [
    NavbarComponent,
    LoginComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
