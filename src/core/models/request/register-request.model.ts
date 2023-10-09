
export interface RegisterRequest {
  Email: string;
  Password: string;
  UserName: string;
  FirstName: string;
  LastName: string;
  Age: number;
  UserImage: string; 
  PhoneNumber: string;
  gender: Gender;
  userType:UserType;
}
export enum UserType {
 Admin,
 User

}
export enum Gender {
  Male,
  Female,

}

