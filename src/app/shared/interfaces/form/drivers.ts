export interface Driver {
  id: number;
  uid: string;
  name: string;
  comment: string;
  registrationDate: Date;
  terminationDate: Date;
  order: number;
}
