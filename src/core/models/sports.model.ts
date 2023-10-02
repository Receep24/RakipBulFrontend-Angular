
import { Entity } from "./entity.model";

export interface Sports extends Entity<number> {
    SportName: string;
    SportImage: string;  
}

export class Sports {
  id?:number
  sportName?:string;
  sportImage?:string;
}

