import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    console.log('product Services');
  }
  getProductData() {
    return [
      { name: 'Shah', Id: 101 },
      { name: 'Shah', Id: 101 },
      { name: 'Shah', Id: 101 },
      { name: 'Shah', Id: 101 },
    ];
  }
}
