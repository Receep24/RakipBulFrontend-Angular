import { User } from './user.model';
import { Sports } from './sports.model';
import { Adress } from './adress.model';
import { Entity } from './entity.model';

export class Advert extends Entity<number> {
  advertText: string = '';
  userID: number = 0;
  sportID: number = 0;
  adressID: number = 0;
  sportName: string = '';
  adress: Adress[] = [];
  // swagger da [ varsa liste olarak karşılıyorsun , { tekil olarak karşılıyorsun  -- html tarafınıda düzenle
  sport?: Sports;
  user: User[] = [];

}
