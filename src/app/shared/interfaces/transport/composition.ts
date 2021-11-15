export interface Nomenclature {
  uid: string;
  name: string;
  code: string;
  vendorCode: string;
  fullName: string;
}

export interface AnalyticalGroup {
  uid: string;
  name: string;
  code?: any;
  description: string;
}

export interface Composition {
  nomenclature: Nomenclature;
  quantity: number;
  price: number;
  total: number;
  analyticalGroup: AnalyticalGroup;
}
