import { Advert } from './advert.model';
import { Cities } from './cities.model';
import { Districts } from './districts.model';
import { Entity } from './entity.model';
import { Events } from './events.model';

export class Adress extends Entity<number> {
  adressName: string = '';
  cityId: number = 0;
  districtId: number = 0;
  // cities:Cities [] = [];
  // districts:Districts [] = [];
  city?: Cities;
  district?: Districts;

  events: Events[] = [];
  adverts: Advert[] = [];
}
