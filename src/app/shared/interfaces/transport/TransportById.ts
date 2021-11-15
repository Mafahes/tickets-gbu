import {Agent} from "../Order";

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

export interface Driver {
  id: number;
  uid: string;
  name: string;
  comment: string;
  registrationDate: Date;
  terminationDate: Date;
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

export interface TransportById {
  id: number;
  agent: Agent;
  transportServiceId: number;
  porterServiceId: number;
  needTransport: boolean;
  phoneBrigadir: string;
  nameBrigadir: string;
  orderId: number;
  morg: string;
  checkinAddress: string;
  cemetryOrCrematorium: string;
  otherAdditional: string;
  funeralDate: Date;
  number: string;
  date: Date;
  customerOrder: CustomerOrder;
  implementer: Implementer;
  deliveryTime: Date;
  kindMovers: string;
  timeDeparture: Date;
  delivery: boolean;
  driverId: number;
  driver: Driver;
  submissionOfTransport: boolean;
  porters: boolean;
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
  commentAuto: string;
  complexId: string;
  transportOfPorters: string;
  clarificationSubsidies: string;
  subsidyType: string;
  auto: Auto;
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
