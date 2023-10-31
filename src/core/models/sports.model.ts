import { Entity } from './entity.model';

export class Sports extends Entity<number> {
  sportName?: string;
  sportImage?: string;
}
