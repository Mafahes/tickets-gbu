export interface File {
  id: number;
  fileName: string;
  fileSize: number;
  fileType: number;
  fullUrl: string;
}

export interface Photo {
  id: number;
  fileId: number;
  file: File;
  dateAdd: Date;
  type?: boolean;
}

export interface Product {
  id: number;
  uid: string;
  code: string;
  count: number;
  counProvider: number;
  name: string;
  isExclusiveProduct: boolean;
  vendorCode: string;
  fullName: string;
  codePrice: string;
  groupePrice: string;
  typeFull: string;
  unit: string;
  reserveProvider: number;
  cancellation: boolean;
  dateCancellation: Date;
  agentNome: boolean;
  thisisGroup: boolean;
  description: string;
  price: number;
  type: number;
  vaTrate: number;
  keyword: string;
  photos: Photo[];
}
