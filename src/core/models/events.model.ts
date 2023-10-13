import { Adress } from './adress.model';
import { Entity } from './entity.model';
import { Sports } from './sports.model';
import { User } from './user.model';

export class Events extends Entity<number> {
  eventName: string = '';
  eventDate?: Date ;
  sportID: number = 0;
  adressID: number = 0;
  
  sports?:Sports;
  user?:User;
  adress?:Adress;


}
