import {Agent} from "../Order";
import {OrderById} from "../OrderById";

export interface TransportData {
  id: number;
  orderId: number;
  number: string;
  date: Date;
  customerOrder?: any;
  implementer?: any;
  deliveryTime: Date;
  timeDeparture: Date;
  index?: number;
  delivery: boolean;
  driverId: number;
  driver?: any;
  submissionOfTransport: boolean;
  porters: boolean;
  agent: Agent;
  order?: OrderById;
  deceasedFio?: string;
  agentFio?: string;
  routeTime: number;
  amountTransport: number;
  additionalAmount: number;
  totalAmount: number;
  outfitNumber: number;
  status: string;
  isComplex: boolean;
  numberOfPorters: number;
  addAccountNumber: string;
  shippingAmount: number;
  comment: string;
  transportOfPorters: string;
  clarificationSubsidies: string;
  subsidyType: string;
  auto?: any;
  typeDelivery: string;
  deliveryComment: string;
  numberOfPassengers: number;
  dateAdd: Date;
  dateUpdate: Date;
  warehouse?: any;
  address?: any;
  returnaddress?: any;
  singing?: any;
  washing?: any;
  church?: any;
  funeral?: any;
  countryfuneral?: any;
  countrymorg?: any;
}

export interface TransportList {
  pageNumber: number;
  pageSize: number;
  firstPage: string;
  lastPage: string;
  totalPages: number;
  totalRecords: number;
  nextPage?: any;
  previousPage?: any;
  data: TransportData[];
  succeeded: boolean;
  errors?: any;
  message?: any;
}
export interface CustomerOrder {
  id: number;
  uid: string;
  number: string;
  date: Date;
  order: number;
}

export interface Implementer {
  id: number;
  uid: string;
  code: string;
  name: string;
  contractor?: any;
  model?: any;
  thirdParty: boolean;
  price: number;
  order: number;
}

export interface Auto {
  id: number;
  uid: string;
  name: string;
  code: string;
  seriesNumber: string;
  regionCode?: any;
  order: number;
}

export interface AllTransport {
  id: number;
  orderId: number;
  number: string;
  date: Date;
  customerOrder: CustomerOrder;
  implementer: Implementer;
  deliveryTime: Date;
  timeDeparture: Date;
  delivery: boolean;
  driverId: number;
  driver?: any;
  submissionOfTransport: boolean;
  porters: boolean;
  routeTime: number;
  amountTransport: number;
  additionalAmount: number;
  totalAmount: number;
  outfitNumber: number;
  status: string;
  isComplex: boolean;
  complexId?: any;
  numberOfPorters: number;
  addAccountNumber: string;
  shippingAmount: number;
  comment: string;
  transportOfPorters: string;
  clarificationSubsidies: string;
  subsidyType: string;
  auto: Auto;
  typeDelivery: string;
  deliveryComment: string;
  numberOfPassengers: number;
  dateAdd: Date;
  dateUpdate: Date;
  warehouse: string;
  address: string;
  returnaddress: string;
  singing: string;
  washing: string;
  church: string;
  funeral: string;
  countryfuneral: string;
  countrymorg: string;
}
