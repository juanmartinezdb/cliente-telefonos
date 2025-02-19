import { Injectable, OnInit } from '@angular/core';
import { Product, productos, products } from '../model/products';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productSubject = new BehaviorSubject<Product[]>([]);
  products$: Observable<Product[]> = this.productSubject.asObservable();


  constructor() {
    this.cargarProductos();

   }
  // this.http.get<Registro[]>(this.registrosUrl).subscribe({
  //   next: registros => this.registrosSubject.next(registros),
  //   error: err => console.error("Error al obtener registros:", err)
  // });
  cargarProductos() {


    let productosFinal = [];
    productosFinal = [...products];
    let id = productosFinal[productosFinal.length - 1].id;
    for (let prod of productos) {
      id++;
      let newProduct = {
        id: id,
        supplier: prod.supplier,
        name: prod.product_name,
        price: prod.cost,
        description: prod.details
      }
      productosFinal.push(newProduct);
    }
    this.productSubject.next(productosFinal);
  }


}
