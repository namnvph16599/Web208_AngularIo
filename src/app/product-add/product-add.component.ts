import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  @Output() onAddProduct = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  productAdd: any = {
    name: ''
  }

  addProduct() {
    this.onAddProduct.emit(this.productAdd)
  }

}
