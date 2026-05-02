import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // localy
  //   products = [
  //     {id: 1, name: "Computer", price: 2300, selected: true },
  //     {id: 2, name: "Printer", price: 1200, selected: false },
  //     {id: 3, name: "Smart phone", price: 1300, selected: true }
  // ]
  
  // from backend
  constructor(private http : HttpClient){ }

  getAllProducts (){
    //localy
    // return this.products;
    
    // from backend
    return this.http.get("http://localhost:8083/products");
  }

  deleteProduct (product: any): Observable<any> {
      let v = confirm("Are you sure");
      if(v) {
        //localy
        // this.products = this.products.filter((p:any) => p.id != product.id);

        //from backend
        return this.http.delete("http://localhost:8083/products/" + product.id)
      }
      return new Observable();
  }
}
