import { Component, inject, OnInit } from '@angular/core';
import { LocalStorageHandlerService } from '../../../service/local-storage-handler.service';
import { Order } from '../../../model/order';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  imports: [RouterLink],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css'
})
export class OrdersListComponent implements OnInit{
local = inject(LocalStorageHandlerService);
orders: Order[] = [];

ngOnInit(): void {
  this.orders = this.local.get('orders', []);
}


}
