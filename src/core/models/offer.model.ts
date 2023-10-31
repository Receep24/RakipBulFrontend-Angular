import { Advert } from "./advert.model";
import { Entity } from "./entity.model";
import { User } from "./user.model";

export interface Offer extends Entity<number> {
    offerText: string;
    advertID: number;
    userID: number;
    advert?:Advert;
    user?:User;
}
