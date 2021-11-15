export interface Role {
  description: string;
  dateAdd: Date;
  dateUpdate: Date;
  id: string;
  name: string;
  normalizedName: string;
  concurrencyStamp: string;
}
