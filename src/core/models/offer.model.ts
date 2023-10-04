import { Entity } from "./entity.model";

export interface Offer extends Entity<number> {
    offerText: string;
    advertID: number;
    userID: number;  
}