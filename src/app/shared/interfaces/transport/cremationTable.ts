export interface CremationTable {
  startTime: Date;
  endTime: Date;
  representation: string;
  hall: Hall;
  responsible: Responsible;
  accountable: string;
}

export interface Hall {
  uid: string;
  code: string;
  name: string;
  department: Department;
  workStartsTime: Date;
  workEndsTime: Date;
}

export interface Department {
  uid: string;
  code: string;
  name: string;
}

export interface Responsible {
  uid: string;
  name: string;
}
