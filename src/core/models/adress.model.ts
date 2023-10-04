import { Cities } from "./cities.model";
import { Districts } from "./districts.model";


export class Adress {
  id:number =0;
  adressName:string ='';
  cityId:number =0;
  districtId:number =0;

  cities:Cities [] = [];
  districts:Districts [] = [];

}
