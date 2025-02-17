import { Routes } from "@angular/router";
import { ProductListComponent } from "./component/product/product-list/product-list.component";
import { ProductDetailsComponent } from "./component/product/product-details/product-details.component";
import { SupplierListComponent } from "./component/supplier/supplier-list/supplier-list.component";
import { CartComponent } from "./component/cart/cart/cart.component";
import { ShippingComponent } from "./component/shipping/shipping.component";
import { SupplierDetailsComponent } from "./component/supplier/supplier-details/supplier-details.component";


const routes: Routes = [
    {path: '',component: ProductListComponent, title: 'Home page'},
    {path: 'cart',component: CartComponent, title: 'Cart'},
    {path: 'shipping',component: ShippingComponent, title: 'Shipping Prices'},
    {path: 'suppliers',component: SupplierListComponent, title: 'Suppliers'},
    {path: 'suppliers/:id',component: SupplierDetailsComponent, title: 'Supplier details'},
    {path: 'products/:productId',component: ProductDetailsComponent,title: 'Product details'}
  ];

    export default routes;
