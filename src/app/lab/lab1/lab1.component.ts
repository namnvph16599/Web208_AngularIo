import { Component, OnInit } from '@angular/core';
import { Inventor, IProduct } from 'src/interface/lab1';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.scss']
})
export class Lab1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  student: any = {
    name: 'Ngo Van Nam',
    age: 20,
    gender: 'Male',
    avatar: 'https://res.cloudinary.com/vannam042/image/upload/v1649386797/ecma_asm/z3058808865820_6bb511c3b414d15db5f34b4d536c55ce_dwgxsf.jpg'
  }

  inventors: Inventor[] = [
    {
      id: 1,
      first: 'Tien si',
      last: '1',
      year: 1989,
      passed: 2000
    },
    {
      id: 2,
      first: 'Tien si',
      last: '2',
      year: 1989,
      passed: 2000
    },
    {
      id: 3,
      first: 'Tien si',
      last: '3',
      year: 1989,
      passed: 2000
    },

  ]

  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "San pham 1",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 2,
      "productName": "San pham 2",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 3,
      "productName": "San pham3",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
  ]

}
