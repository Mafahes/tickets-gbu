export interface Role {
  id: string;
  name: string;
  normalizedName: string;
  concurrencyStamp: string;
}

export interface User {
  nummer: number;
  imgId?: any;
  img?: any;
  dateBirt?: any;
  secondName?: any;
  firstName?: any;
  patronymic?: any;
  sex?: any;
  dateBirth: Date;
  description?: any;
  city?: any;
  version: string;
  isDeleted: boolean;
  lastLogin: Date;
  isOnline: boolean;
  roleId: string;
  lockoutEnabled: boolean;
  role: Role;
  email: string;
}

export interface Document {
  id: number;
  imgId?: any;
  img?: any;
  type: string;
  seria: string;
  number: string;
  date: string;
  issuer: string;
  codeissuer: string;
  identification_card: boolean;
  order: number;
}

export interface Customer {
  id: number;
  imgId?: any;
  img?: any;
  firstname: string;
  lastname: string;
  middlename: string;
  sex: string;
  birthDate: Date;
  phone: string;
  mobilephone: string;
  family_relationshipId: number;
  family_relationship?: any;
  documentId: number;
  document: Document;
  order: number;
}

export interface Document2 {
  id: number;
  imgId?: any;
  img?: any;
  type: string;
  seria: string;
  number: string;
  date: string;
  issuer: string;
  codeissuer: string;
  identification_card: boolean;
  order: number;
}

export interface Deceased {
  id: number;
  imgId?: any;
  img?: any;
  firstname: string;
  lastname: string;
  middlename: string;
  sex: string;
  birthDate: any;
  phone: string;
  mobilephone: string;
  family_relationshipId: number;
  family_relationship?: any;
  documentId: number;
  document: Document2;
  order: number;
}

export interface Agent {
  id: number;
  imgId?: any;
  phone: string;
  img?: any;
  agentID: string;
  fio: string;
  email: string;
  order: number;
}

export interface Product2 {
  id: number;
  counProvider: number;
  uid: string;
  code: string;
  name: string;
  isExclusiveProduct: boolean;
  vendorCode: string;
  fullName: string;
  codePrice: string;
  groupePrice: string;
  typeFull: string;
  unit: string;
  count: number;
  cancellation: boolean;
  dateCancellation: Date;
  agentNome: boolean;
  thisisGroup: boolean;
  description: string;
  price: number;
  type: number;
  vaTrate: number;
  keyword: string;
  photos?: any;
}

export interface Product {
  id: number;
  productId: number;
  balance?: boolean | null;
  product: Product2;
  nomenclature: string;
  department: string;
  count: number;
  price: number;
  amount: number;
  comment?: any;
  order: number;
}

export interface Datum {
  id: number;
  user: User;
  status: string;
  date: Date;
  customerId: number;
  customer: Customer;
  deceasedId: number;
  deceased: Deceased;
  dateOfDeath: Date;
  agentId: number;
  agent: Agent;
  contract_number: string;
  validity_period: string;
  delivery_date: Date;
  delivery_location: string;
  subdivisionsId: number;
  subdivisions?: any;
  morgueId: number;
  morgue?: any;
  stationId: number;
  station?: any;
  products: Product[];
  order: number;
  dateAddHistory: Date;
  history?: any;
}

export interface OrderObject {
  pageNumber: number;
  pageSize: number;
  firstPage: string;
  lastPage: string;
  totalPages: number;
  totalRecords: number;
  nextPage: string;
  previousPage?: any;
  data: Datum[];
  succeeded: boolean;
  errors?: any;
  message?: any;
}
