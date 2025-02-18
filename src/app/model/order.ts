import { Product } from "./products";

export interface Order {
  id: number;
  products: Product[];
  client: string;
  adress: string;
  shippingMethod: string;

}
