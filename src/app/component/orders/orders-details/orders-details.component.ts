import { ActivatedRoute } from '@angular/router';
import { LocalStorageHandlerService } from '../../../service/local-storage-handler.service';
import { Order } from './../../../model/order';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../model/products';

@Component({
  selector: 'app-orders-details',
  imports: [],
  templateUrl: './orders-details.component.html',
  styleUrl: './orders-details.component.css'
})
export class OrdersDetailsComponent implements OnInit{
local = inject(LocalStorageHandlerService);
route = inject(ActivatedRoute);
order: Order|null = null;
products: Product[] = [];

ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.order = this.local.get<Order[]>('orders',[]).find(o=> o.id==id)||null;
    this.products = this.order!.products;
}
}
