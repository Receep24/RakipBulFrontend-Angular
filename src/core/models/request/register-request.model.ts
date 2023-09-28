export interface RegisterRequest {
  Email: string;
  Password: string;
  UserName: string;
  FirstName: string;
  LastName: string;
  Age: number; //
  UserImage: string; // 
  PhoneNumber: string;

  gender: Gender; //
   


}

export enum Gender {
  Male,
  Female,
}

