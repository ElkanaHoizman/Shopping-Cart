import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RouterModule } from '@angular/router';
import {  FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // NgForm,
    FormsModule,

  ],
  declarations: [AddProductComponent, EditComponent],

  exports: [
    CommonModule,
  ]
})


export class AdminModule { }
