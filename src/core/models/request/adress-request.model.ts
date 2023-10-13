import { Cities } from '../cities.model';
import { Districts } from '../districts.model';

export class AdressRequest {
  id?: number;
  adressName?: string;
  cityId?: number;
  districtId?: number;
  city?: Cities;
  district?: Districts;
}
