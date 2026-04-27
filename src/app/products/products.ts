// import { NgForOf } from '@angular/common';
// import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
})
// export class Products {
//   products = [
//     {id: 1, name: "Computer", price: 2300, selected: true },
//     {id: 2, name: "Printer", price: 1200, selected: true },
//     {id: 3, name: "Smart phone", price: 1300, selected: true }
//   ]
// }
export class Products implements OnInit {
  products : any;
  constructor(private productService : ProductService) {
    this.productService = productService;
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts () {
    this.products = this.productService.getAllProducts();
  }
  
  handelDelete (product: any) {
    this.productService.deleteProduct(product);
    this.getAllProducts();
  }
}
