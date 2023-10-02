import { Entity } from "./entity.model";

export interface Advert extends Entity<number> {
    advertText: string;
    userID: number;
    sportID: number;
    adressID: number;   
}

