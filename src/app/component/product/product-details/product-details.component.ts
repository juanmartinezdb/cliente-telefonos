import { SupplierService } from './../../../service/supplier.service';
import { Component, inject } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, products } from '../../../model/products';
import { CommonModule } from '@angular/common';
import { Supplier } from '../../../model/supplier';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
private route = inject(ActivatedRoute);
private cartService = inject(CartService);
supService = inject( SupplierService);
productService = inject(ProductService);
product: Product | undefined;


  ngOnInit() {
    const routeId = Number(this.route.snapshot.paramMap.get('productId'));
    console.log(routeId);

    this.productService.products$.subscribe(products=> {
      this.product = products.find(p => p.id==routeId);
    })


  }
  addToCart(product : Product) {
    this.cartService.addToCart(product);
    window.alert('Producto añadido al carro');
  }

  supplierById(id: number){
    let supplier: Supplier;
    this.supService.supplier$.subscribe(s=> supplier = s.find(sup=> sup.id==id)!);
    return supplier!;
  }
}
