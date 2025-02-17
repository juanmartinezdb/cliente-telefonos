import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../model/products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private itemsSubject = new BehaviorSubject<Product[]>([]);
items$ = this.itemsSubject.asObservable();
http: HttpClient = inject(HttpClient);
  // items : Product[] = [];
  constructor(
  ) { }

  addToCart( product: Product) {
    this.itemsSubject.next([...this.getItems(), product]);
  }

  getItems() {
    return this.itemsSubject.getValue();;
  }

  clearCart() {
return this.itemsSubject.next([]);
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/shipping.json')
  }

}
