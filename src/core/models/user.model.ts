import { Entity } from "./entity.model";

export interface User extends Entity<number> {
  Email: string;
  UserName: string;
  FirstName: string;
  LastName: string;
  Age: number;
  UserImage: string ;
  phoneNumber: string;
  Password:string;
  UserType: UserType;
  Gender: Gender;  
}

export enum UserType {
  Admin,
  User,
}
export enum Gender {
  Male,
  Female,
}
