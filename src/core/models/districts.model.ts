import { Adress } from './adress.model';
import { Cities } from './cities.model';
export class Districts {
  districtId: number = 0;
  districtName: string = '';
  cityId: number = 0;
  city: Cities | null = null;
  addresses: Adress[] = [];
}
