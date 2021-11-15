export interface CustomerOrder {
  id: number;
  uid: string;
  number: string;
  date: Date;
  order: number;
}

export interface CustomOrder {
  customerOrder: CustomerOrder;
}
