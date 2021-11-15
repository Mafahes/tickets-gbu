export interface Contractor {
  id: number;
  uid: string;
  name: string;
  inn: string;
  kpp: string;
  order: number;
}

export interface Model {
  id: number;
  uid: string;
  name: string;
  code: string;
  order: number;
}

export interface Implementer {
  id: number;
  uid: string;
  code: string;
  name: string;
  contractor: Contractor;
  model: Model;
  thirdParty: boolean;
  price: number;
  order: number;
}
