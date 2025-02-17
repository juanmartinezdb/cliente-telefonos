import { Supplier } from './../../../model/supplier';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../../../model/products';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { SupplierService } from '../../../service/supplier.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, ProductAlertsComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products = [...products]; //??
  supService = inject(SupplierService);
  suppliers: Supplier [] = [];

ngOnInit(): void {
    this.supService.supplier$.subscribe (s => this.suppliers = s);
}

supplierById(id: Number){
  return this.suppliers.find(s=> s.id==id);
}

  share() {
    window.alert('Esto es un window.alert emergente que se activa con la funcion share()!');
  }


  onNotify() {
    window.alert('Te avisa cuando este de oferta, esto es una lert de onNotify()');
  }
}

