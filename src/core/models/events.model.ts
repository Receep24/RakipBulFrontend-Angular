import { Entity } from './entity.model';

export class Events extends Entity<number> {
  eventName: string = '';
  eventDate: string = '';
  sportID: number = 0;
  userID: number = 0;
  adressID: number = 0;
}
