export interface User {
  nummer: number;
  imgId?: any;
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
  role?: any;
  inits: string;
  email: string;
}

export interface User3 {
  nummer: number;
  imgId?: any;
  img?: any;
  dateBirt?: any;
  secondName: string;
  firstName: string;
  patronymic: string;
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
  role?: any;
  inits: string;
  email: string;
}

export interface User2 {
  id: number;
  chatRoomId: number;
  nummerUser: number;
  user: User3;
  dateAdd: Date;
}

export interface User4 {
  nummer: number;
  imgId?: any;
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
  role?: any;
  inits: string;
  email: string;
}

export interface Message {
  id: number;
  user: User4;
  chatRoomId: number;
  status: number;
  fileId?: any;
  file?: any;
  text: string;
  dateAdd: Date;
}

export interface ChatObject {
  id: number;
  user: User;
  dateAdd: Date;
  objType: number;
  objId: number;
  obj?: any;
  users: User2[];
  messages: Message[];
  lastMessage?: any;
  unreadMessages: number;
}
