import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interface/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor() { }

  selectedProduct?: any;


  ngOnInit(): void {
  }

  title: string = 'Products List';

  showProduct: boolean = false;

  setTitle() {
    this.title = 'Product List Changed'
  }

  onSelect(product: any): void {
    console.log(11111, product);
    this.showProduct = true;
    this.selectedProduct = product;
  }

  products: any[] = [{
    id: 1, name: 'product 1',
  },
  {
    id: 2, name: 'product 2',
  }
  ]

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
