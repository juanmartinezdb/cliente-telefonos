import { Product, products } from './../../../model/products';
import { Supplier } from './../../../model/supplier';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SupplierService } from '../../../service/supplier.service';

@Component({
  selector: 'app-supplier-details',
  imports: [RouterLink],
  templateUrl: './supplier-details.component.html',
  styleUrl: './supplier-details.component.css'
})
export class SupplierDetailsComponent implements OnInit {
supService = inject(SupplierService);
  supplier: Supplier |null = null;
route = inject(ActivatedRoute);
phones: Product[] = [];

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
console.log("id de supplier: ",id);

this.chargeSuppliers(id);
  this.chargePhones(id);
}

chargePhones(id: number) {
  this.phones = products.filter(p=> p.supplier== id );
  console.log("telefonos",this.phones);

}
chargeSuppliers(id: number){
  this.supService.supplier$.subscribe( sup => {
    this.supplier = sup.find(s => s.id==id)||null;
  });
}
}
