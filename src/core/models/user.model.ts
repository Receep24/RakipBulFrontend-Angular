export interface User {
  id: number;
  tc_no: string;
  UserName: string;
  Email: string;
  phone: string;
  userType: UserType;
}

export enum UserType {
  Admin,
  User,
}
