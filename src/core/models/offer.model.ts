import { Entity } from "./entity.model";

export interface Offer extends Entity<number> {
    OfferText: string;
    AdvertID: number;
    UserID: number;  
}