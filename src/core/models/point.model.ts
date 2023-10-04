import { Entity } from "./entity.model";

export class Point extends Entity<number> {
    points?: number;
    userID?: number;
    eventID?: number;
 
}