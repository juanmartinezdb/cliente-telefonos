import { CartService } from './../../../service/cart.service';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-form',
  imports: [ReactiveFormsModule],
  templateUrl: './cart-form.component.html',
  styleUrl: './cart-form.component.css'
})
export class CartFormComponent {
  formBuilder = inject(FormBuilder);
  cartService = inject(CartService);

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit() : void  {
    this.cartService.clearCart();
    console.warn(' pedido enviado', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
