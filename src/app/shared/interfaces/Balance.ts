export interface Product {
  id: number;
  uid: string;
  code: string;
  name: string;
  vendorCode?: any;
  fullName: string;
  codePrice: string;
  groupePrice: string;
  typeFull: string;
  unit: string;
  cancellation: boolean;
  dateCancellation: Date;
  agentNome: boolean;
  thisisGroup: boolean;
  description: string;
  price: number;
  type: number;
  vaTrate: number;
  keyword: string;
  count: number;
  counProvider: number;
  reserve: number;
  photos?: any;
}

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
  inits: string;
  email: string;
}

export interface BusinessProcess {
  id: number;
  uid: string;
  name: string;
  keyword: string;
  order: number;
}

export interface OrderType {
  id: number;
  uid: string;
  representation: string;
  keyword: string;
  order: number;
}

export interface Morgue {
  id: number;
  morgID: string;
  name: string;
  type: string;
  address: string;
  city: string;
  code: string;
  isDelete: boolean;
}

export interface Oszn {
  id: number;
  uid: string;
  name: string;
  keyword: string;
  order: number;
}

export interface DocumentType {
  id: number;
  codePFR: string;
  uid: string;
  name: string;
  codeMVD: string;
  order: number;
}

export interface Document {
  id: number;
  imgId?: any;
  img?: any;
  documentIdType: number;
  documentType: DocumentType;
  seria: string;
  number: string;
  date: Date;
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
  dateOfDeath: Date;
  order: number;
}

export interface DocumentType2 {
  id: number;
  codePFR: string;
  uid: string;
  name: string;
  codeMVD: string;
  order: number;
}

export interface Document2 {
  id: number;
  imgId?: any;
  img?: any;
  documentIdType: number;
  documentType: DocumentType2;
  seria: string;
  number: string;
  date: Date;
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
  birthDate: Date;
  phone: string;
  mobilephone: string;
  family_relationshipId: number;
  family_relationship?: any;
  documentId: number;
  document: Document2;
  dateOfDeath: Date;
  order: number;
}

export interface Agent {
  id: number;
  imgId?: any;
  img?: any;
  agentID: string;
  fio: string;
  email: string;
  order: number;
}

export interface Courier {
  id: number;
  uid: string;
  name: string;
  number: string;
  isCourier: boolean;
  keyword: string;
  order: number;
}

export interface Product3 {
  id: number;
  uid: string;
  code: string;
  name: string;
  vendorCode?: any;
  fullName: string;
  codePrice: string;
  groupePrice: string;
  typeFull: string;
  unit: string;
  cancellation: boolean;
  dateCancellation: Date;
  agentNome: boolean;
  thisisGroup: boolean;
  description: string;
  price: number;
  type: number;
  vaTrate: number;
  keyword: string;
  count: number;
  reserve: number;
  photos?: any;
}

export interface Product2 {
  id: number;
  productId: number;
  product: Product3;
  nomenclature: string;
  department: string;
  count: number;
  price: number;
  amount: number;
  comment: string;
  order: number;
}

export interface Role2 {
  id: string;
  name: string;
  normalizedName: string;
  concurrencyStamp: string;
}

export interface User2 {
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
  role: Role2;
  inits: string;
  email: string;
}

export interface BusinessProcess2 {
  id: number;
  uid: string;
  name: string;
  keyword: string;
  order: number;
}

export interface OrderType2 {
  id: number;
  uid: string;
  representation: string;
  keyword: string;
  order: number;
}

export interface Morgue2 {
  id: number;
  morgID: string;
  name: string;
  type: string;
  address: string;
  city: string;
  code: string;
  isDelete: boolean;
}

export interface Oszn2 {
  id: number;
  uid: string;
  name: string;
  keyword: string;
  order: number;
}

export interface DocumentType3 {
  id: number;
  codePFR: string;
  uid: string;
  name: string;
  codeMVD: string;
  order: number;
}

export interface Document3 {
  id: number;
  imgId?: any;
  img?: any;
  documentIdType?: number;
  documentType: DocumentType3;
  seria: string;
  number: string;
  date: Date;
  issuer: string;
  codeissuer: string;
  identification_card: boolean;
  order: number;
}

export interface Customer2 {
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
  document: Document3;
  dateOfDeath: Date;
  order: number;
}

export interface DocumentType4 {
  id: number;
  codePFR: string;
  uid: string;
  name: string;
  codeMVD: string;
  order: number;
}

export interface Document4 {
  id: number;
  imgId?: any;
  img?: any;
  documentIdType?: number;
  documentType: DocumentType4;
  seria: string;
  number: string;
  date: Date;
  issuer: string;
  codeissuer: string;
  identification_card: boolean;
  order: number;
}

export interface Deceased2 {
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
  document: Document4;
  dateOfDeath: Date;
  order: number;
}

export interface Agent2 {
  id: number;
  imgId?: any;
  img?: any;
  agentID: string;
  fio: string;
  email: string;
  order: number;
}

export interface Courier2 {
  id: number;
  uid: string;
  name: string;
  number: string;
  isCourier: boolean;
  keyword: string;
  order: number;
}

export interface OrderHistory {
  id: number;
  uid?: any;
  user: User2;
  status: string;
  date: Date;
  businessProcessId: number;
  businessProcess: BusinessProcess2;
  orderTypeId: number;
  orderType: OrderType2;
  morgueId: number;
  morgue: Morgue2;
  morgueDeceasedId?: any;
  morgueDeceased?: any;
  stationId?: any;
  station?: any;
  termContract: Date;
  deceased_location: string;
  delivery_date: Date;
  delivery_location: string;
  subdivisionsId?: any;
  subdivisions?: any;
  osznId: number;
  oszn: Oszn2;
  order_USZN_serial?: any;
  order_USZN_numer?: any;
  order_PF_serial?: any;
  order_PF_numer?: any;
  deathCertificate: string;
  customerId: number;
  customer: Customer2;
  deceasedId: number;
  deceased: Deceased2;
  dateOfDeath: Date;
  agentId: number;
  agent: Agent2;
  managerId?: any;
  manager?: any;
  courierId: number;
  courier: Courier2;
  informationAboutPlannedBurial: string;
  burialAnotherRegion: boolean;
  dateBuiralRegion: Date;
  cemeteryRegion: string;
  burialTypeRegion: string;
  products: any[];
  dateAdd: Date;
  dateUpdate: Date;
  order: number;
  dateAddHistory: Date;
  orderId?: any;
  history?: any;
  dispatcher?: any;
}

export interface History {
  id: number;
  userId: string;
  orderId: number;
  order?: any;
  orderIdHistory?: number;
  orderHistory: OrderHistory;
  description: string;
  dateAdd: Date;
  dateUpdate: Date;
}

export interface Order {
  id: number;
  uid?: any;
  user: User;
  status: string;
  date: Date;
  businessProcessId: number;
  businessProcess: BusinessProcess;
  orderTypeId: number;
  orderType: OrderType;
  morgueId: number;
  morgue: Morgue;
  morgueDeceasedId?: number;
  morgueDeceased?: any;
  stationId?: any;
  station?: any;
  termContract: Date;
  deceased_location: string;
  delivery_date: Date;
  delivery_location: string;
  subdivisionsId?: any;
  subdivisions?: any;
  osznId: number;
  oszn: Oszn;
  order_USZN_serial?: any;
  order_USZN_numer?: any;
  order_PF_serial?: any;
  order_PF_numer?: any;
  deathCertificate: string;
  customerId: number;
  customer: Customer;
  deceasedId: number;
  deceased: Deceased;
  dateOfDeath: Date;
  agentId: number;
  agent: Agent;
  managerId?: any;
  manager?: any;
  courierId: number;
  courier: Courier;
  informationAboutPlannedBurial: string;
  burialAnotherRegion: boolean;
  dateBuiralRegion: Date;
  cemeteryRegion: string;
  burialTypeRegion: string;
  products: Product2[];
  dateAdd: Date;
  dateUpdate: Date;
  order: number;
  dateAddHistory: Date;
  orderId?: any;
  history: History[];
  dispatcher?: any;
}

export interface Balance {
  id: number;
  productId: number;
  product: Product;
  orderId?: number;
  order: Order;
  name: string;
  comment: string;
  isSee: boolean;
  status: string;
}
