import { CartService } from './../../../service/cart.service';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Shipping } from '../../../model/shipping';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LocalStorageHandlerService } from '../../../service/local-storage-handler.service';
import { Order } from '../../../model/order';

@Component({
  selector: 'app-cart-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cart-form.component.html',
  styleUrl: './cart-form.component.css'
})
export class CartFormComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  cartService = inject(CartService);
  local = inject(LocalStorageHandlerService);
  shippingCosts!: Observable<Shipping[]>;

  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    shippingMethod: ['', Validators.required]
  });

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
  calculateID(): number {
    let orders: Order[] = this.local.get<Order[]>('orders', []);
    console.log(orders);
    if (orders.length > 0) {
      return Number(orders[orders.length - 1].id) + 1;

    } else {
      return 1;
    }
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      if (this.cartService.getItems().length > 1) {
        console.log("carrito", this.cartService.getItems());

        let order: Order = {
          id: this.calculateID(),
          products: this.cartService.getItems(),
          client: this.checkoutForm.value.name!,
          adress: this.checkoutForm.value.address!,
          shippingMethod: this.checkoutForm.value.shippingMethod!


        }

        this.local.add('orders', order);
        this.cartService.clearCart();
        console.warn(' pedido enviado', this.checkoutForm.value);
        this.checkoutForm.reset();
      } else {
        alert('Cart empty, introduce items to the cart to end the purchase')
      }
    }
  }
}
