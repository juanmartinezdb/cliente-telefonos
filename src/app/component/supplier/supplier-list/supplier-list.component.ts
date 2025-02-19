import { ProductService } from './../../../service/product.service';
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
productService = inject(ProductService);
  suppliers: Supplier[] = [];


  ngOnInit(): void {
this.supplierService.supplier$.subscribe(s => this.suppliers=s);
console.log(this.suppliers);


}

chargePhones(id: number) {
  let phones; //revisar si hace falta tipar al final
  this.productService.products$.subscribe( products => {
    phones=  products.filter(p=> p.supplier= id );
  })

  console.log(phones);
  return phones;

}

}
