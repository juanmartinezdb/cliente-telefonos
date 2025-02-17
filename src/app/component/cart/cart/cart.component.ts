import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { CartFormComponent } from '../cart-form/cart-form.component';
import { Product } from '../../../model/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartFormComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
cartService = inject(CartService);
  items: Product[] = [];

ngOnInit(): void {
  this.cartService.items$.subscribe( i => this.items= i);
}
}
