import {Product3} from './Balance';
import {Product} from "./Products";

export interface ProdPostavka {
  id: number;
  nummerUser: number;
  productId: number;
  product: Product;
  name: string;
  available: number;
  inReserve: number;
  comment: string;
  order: number;
}
