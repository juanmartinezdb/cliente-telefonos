import { Component, inject } from '@angular/core';
import { SupplierService } from '../../../service/supplier.service';
import { Supplier } from '../../../model/supplier';
import { RouterLink } from '@angular/router';
import { Product, products } from '../../../model/products';

@Component({
  selector: 'app-supplier-list',
  imports: [RouterLink],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css'
})
export class SupplierListComponent {
supplierService = inject(SupplierService);
  suppliers: Supplier[] = [];


  ngOnInit(): void {
this.supplierService.supplier$.subscribe(s => this.suppliers=s);
console.log(this.suppliers);


}

chargePhones(id: number) {
  const phones = products.filter(p=> p.supplier= id );

  console.log(phones);
  return phones;

}

}
