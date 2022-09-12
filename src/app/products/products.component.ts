import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interface/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };

  products: any[] = [{
    id: 1, name: 'product 1',
  },
  {
    id: 2, name: 'product 2',
  }
  ]
}
