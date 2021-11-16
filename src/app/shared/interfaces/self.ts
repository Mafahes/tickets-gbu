export interface Session {
  id: number;
  roomId: number;
  room?: any;
  dateStart: Date;
  dateOver?: any;
  dateAdd: Date;
  pause?: any[];
  mainCategory?: any;
  secondCategory?: any;
}
