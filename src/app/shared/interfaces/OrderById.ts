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
  uid: string;
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

export interface Subdivisions {
  id: number;
  imgId?: any;
  img?: any;
  sID: string;
  parent: string;
  name: string;
  type: number;
  order: number;
}

export interface Oszn {
  id: number;
  uid: string;
  name: string;
  keyword: string;
  order: number;
}

export interface FamilyRelationship {
  id: number;
  imgId?: any;
  img?: any;
  uid: string;
  rrid: string;
  representation: string;
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
  uid: string;
  img?: any;
  firstname: string;
  lastname: string;
  middlename: string;
  sex: string;
  birthDate: Date;
  phone: string;
  mobilephone: string;
  regAddress: string;
  subject: string;
  family_relationshipId: number;
  family_relationship: FamilyRelationship;
  preferentialCategoriesId?: any;
  preferentialCategories?: any;
  documentId: number;
  document: Document;
  dateOfDeath: Date;
  order: number;
  deathCertificates?: any;
}

export interface PreferentialCategories {
  id: number;
  uid: string;
  name: string;
  order: number;
}

export interface Document2 {
  id: number;
  imgId?: any;
  img?: any;
  documentIdType?: any;
  documentType?: any;
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
  uid: string;
  img?: any;
  firstname: string;
  lastname: string;
  middlename: string;
  sex: string;
  birthDate: Date;
  phone: string;
  mobilephone: string;
  regAddress: string;
  subject: string;
  family_relationshipId?: any;
  family_relationship?: any;
  preferentialCategoriesId: number;
  preferentialCategories: PreferentialCategories;
  documentId: number;
  document: Document2;
  dateOfDeath: Date;
  order: number;
  deathCertificates: any[];
}

export interface Agent {
  id: number;
  imgId?: any;
  img?: any;
  agentID: string;
  fio: string;
  email: string;
  phone?: any;
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

export interface TypesBurial {
  id: number;
  uid: string;
  name: string;
  order: number;
}

export interface Department {
  uid: string;
  code: string;
  name: string;
}

export interface Deceased2 {
  uid: string;
  name: string;
  birthDate: Date;
  dateOfDeath: Date;
  sex: string;
  burialInDifferentRegion: boolean;
  region: string;
  burialAddressInOtherRegion: string;
}

export interface PlanningCremation {
  department: Department;
  hall?: any;
  startTime: Date;
  endTime: Date;
  responsible?: any;
  accountable?: any;
  deceased: Deceased2;
  carModel?: any;
  registrationSign?: any;
}

export interface Department2 {
  uid?: any;
  code?: any;
  name?: any;
}

export interface Deceased3 {
  uid?: any;
  name?: any;
  birthDate: Date;
  dateOfDeath: Date;
  sex?: any;
  burialInDifferentRegion: boolean;
  region?: any;
  burialAddressInOtherRegion?: any;
}

export interface AnswerPlanningCremation {
  department: Department2;
  hall?: any;
  startTime: Date;
  endTime: Date;
  responsible?: any;
  accountable?: any;
  deceased: Deceased3;
  carModel?: any;
  registrationSign?: any;
}

export interface OrderById {
  id: number;
  user: User;
  status: string;
  date: Date;
  businessProcessId: number;
  businessProcess: BusinessProcess;
  uid: string;
  number?: any;
  numberОfContract?: any;
  lastSync?: any;
  orderTypeId: number;
  orderType: OrderType;
  morgueId: number;
  morgue: Morgue;
  morgueDeceasedId: number;
  morgueDeceased?: any;
  stationId?: any;
  station?: any;
  termContract: Date;
  deceased_location: string;
  delivery_date: Date;
  delivery_location: string;
  subdivisionsId: number;
  subdivisions: Subdivisions;
  osznId: number;
  oszn: Oszn;
  order_USZN_serial: string;
  order_USZN_numer: string;
  order_PF_serial: string;
  order_PF_numer: string;
  social_security: string;
  deathCertificate?: any;
  customerId: number;
  customer: Customer;
  deceasedId: number;
  deceased: Deceased;
  dateOfDeath: Date;
  agentId: number;
  agent: Agent;
  managerId: number;
  manager?: any;
  courierId: number;
  courier: Courier;
  informationAboutPlannedBurial: string;
  burialAnotherRegion: boolean;
  dateBuiralRegion: Date;
  cemeteryRegion: string;
  cemeteryComment: string;
  burialTypeRegion?: any;
  coffinSize: string;
  coffinSizeInternal: string;
  typesBurialId: number;
  typesBurial: TypesBurial;
  isSms: boolean;
  products: any[];
  dateAdd: Date;
  dateUpdate: Date;
  order: number;
  dateAddHistory: Date;
  orderId?: any;
  history: any[];
  dispatcher?: any;
  paymentType: number;
  email: string;
  ground: boolean;
  nisha: boolean;
  nishaAvailable: boolean;
  planningCremations: PlanningCremation[];
  objSection?: Columbar;
  answerPlanningCremations: AnswerPlanningCremation[];
}
export interface Department {
  uid: string;
  code: string;
  name: string;
}

export interface Recess {
  uid: string;
  code: string;
  name: string;
}

export interface Columbar {
  orderUID?: any;
  department: Department;
  recess: Recess;
  status: string;
}
