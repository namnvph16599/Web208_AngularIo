import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,) {
  }

  checkoutForm = this.formBuilder.group({
    name: ''
  })

  onSubmit() {
    console.log(111111, this.checkoutForm);
    const product = {
      id: this.products[this.products.length - 1].id + 1,
      name: this.checkoutForm.value.name
    }
    this.products = this.products.concat(product)
    this.checkoutForm.reset()
  }

  selectedProduct?: any;


  ngOnInit(): void {
  }

  title: string = 'Products List';

  setTitle() {
    this.title = 'Product List Changed'
  }

  onSelect(product: any): void {
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
