import { User } from './user.model';
import { Sports } from './sports.model';
import { Adress } from './adress.model';
import { Entity } from './entity.model';

export class Adverts extends Entity<number>{

  advertText?: string;
  userID?: number;
  sportID?: number;
  adressID?: number;

  adress: Adress[] = [];
  sport: Sports[] = [];
  user: User[] = [];
}
