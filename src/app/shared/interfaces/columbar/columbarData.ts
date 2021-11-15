export interface ColumbarTable {
  UID: string;
  Code: string;
  Name: string;
  Department: Department;
  ColumbariumPassport: ColumbariumPassport;
  TypesOfColumbariums: string;
  VerticalInversion: boolean;
  HorizontalInversion: boolean;
}

export interface ColumbariumPassport {
  uid: string;
  name: string;
  code: string;
  TypeColumbariumPassport: null | string;
  ViewColumbarium: string;
  Width: number;
  Longitude: number;
  AddressObject: string;
  TotalArea: number;
  BuildingArea: number;
  NumberOfWalls: number;
  ColumbariumNumber: string;
}

export interface Department {
  UID: string;
  Code: string;
  Name: string;
}
export interface CurrentColumbar {
  uid: string;
  code: string;
  name: string;
  section: Section;
  rowNumber: number;
  numberInRow: number;
  nonStandard: boolean;
  count: number;
  responsible: null;
  status: string;
  price: number;
  yearMaintenance: number;
  registrarType: string;
  numberOfWithdrawals: number;
}

export interface Section {
  uid: string;
  code: string;
  name: string;
  department: Department;
  columbariumPassport: ColumbariumPassport;
  typesOfColumbariums: string;
  verticalInversion: boolean;
  horizontalInversion: boolean;
}
