// import { NgForOf } from '@angular/common';
// import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
  constructor() {

  }
  ngOnInit(): void {
    this.products = [
      {id: 1, name: "Computer", price: 2300, selected: true },
      {id: 2, name: "Printer", price: 1200, selected: false },
      {id: 3, name: "Smart phone", price: 1300, selected: true }
    ]
  }
  
  handelDelete (product: any) {
    let v = confirm("Are you sure");
    if(v) {
      this.products = this.products.filter((p:any) => p.id != product.id);
    }
  }
}
