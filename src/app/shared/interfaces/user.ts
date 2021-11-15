export interface Role {
  id: string;
  name: string;
  normalizedName: string;
  concurrencyStamp: string;
}

export interface User {
  nummer: number;
  imgId?: any;
  inits: string;
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
  email: string;
}
