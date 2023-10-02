import { Cities } from "./cities.model";
import { Districts } from "./districts.model";


export class Adress {
  id?:number;
  adressName?:string;
  cityId?:number;
  districtId?:number;

  cities:Cities [] = [];
  districts:Districts [] = [];

}
