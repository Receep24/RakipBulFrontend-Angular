import { Entity } from "./entity.model";

export class User extends Entity<number> {
  UserId?: number;
  Email?: string;
  UserName?: string;
  FirstName?: string;
  LastName?: string;
  Age?: number;
  UserImage?: string;
  PhoneNumber?: string;
  Password?: string;
  gender?: Gender;
  userType?: UserType;

}

export enum UserType {
  Admin,
  User,
}

export enum Gender {
  Male,
  Female,
}
