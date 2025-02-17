import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../model/products';

@Component({
  selector: 'app-product-alerts',
  imports: [],
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;

  @Output() notificacion = new EventEmitter();
}
