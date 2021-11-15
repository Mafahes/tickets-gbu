import {Product} from "./Products";

export interface Category {
  id: number;
  imgId?: any;
  img?: any;
  uid: string;
  expandable?: boolean;
  children?: Category[];
  parent: string;
  code: string;
  thisisGroup: boolean;
  name: string;
  text: string;
  products?: Product[];
  keyword: string;
}
