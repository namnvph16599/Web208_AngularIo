import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { Lab1Component } from './lab/lab1/lab1.component';
import { HeaderComponent } from './lab/lab2/header/header.component';
import { ProductlistComponent } from './lab/lab2/productlist/productlist.component';
import { ProductAddComponent } from './product-add/product-add.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductsComponent,
    Lab1Component,
    HeaderComponent,
    ProductlistComponent,
    ProductAddComponent,

  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
