import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    products = [
      {id: 1, name: "Computer", price: 2300, selected: true },
      {id: 2, name: "Printer", price: 1200, selected: false },
      {id: 3, name: "Smart phone", price: 1300, selected: true }
  ]
  constructor(){ }

  getAllProducts () {
    return this.products;
  }

  deleteProduct (product: any) {
      let v = confirm("Are you sure");
      if(v) {
        this.products = this.products.filter((p:any) => p.id != product.id);
      }
  }
}
