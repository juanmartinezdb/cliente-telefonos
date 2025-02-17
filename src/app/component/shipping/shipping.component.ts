import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipping',
  imports: [CommonModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit{
cartService = inject(CartService);
  shippingCosts!: Observable <{type: string, price: number}[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
