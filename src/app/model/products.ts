import { Supplier } from './supplier';
export interface Product {
  id: number;
  supplier : number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    supplier: 2,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    supplier: 3,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    supplier: 2,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
]
export const productos = [

  {
    product_id: 1,
    supplier: 2,
    product_name: 'Telefono Nokia',
    cost: 50,
    details: 'Duradero'
  },
  {
    product_id: 2,
    supplier: 2,
    product_name: 'Motorola',
    cost: 79,
    details: 'de estos ya hay pocos'
  },
  {
    product_id: 3,
    supplier: 2,
    product_name: 'Bq Aquaris',
    cost: 129,
    details: 'De estos ya no los hacen tampoco'
  }
  ]
