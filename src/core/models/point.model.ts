import { Entity } from "./entity.model";

export interface Point extends Entity<number> {
    Points: number;
    UserID: number;
    EventID: number;
 
}