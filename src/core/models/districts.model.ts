
import { Cities } from "./cities.model";
export class Districts {
  id?:number;
  districtName?:string;
  cityId?:number;

  cities : Cities [] = [];
}