import { Entity } from "./entity.model";

export interface Sports extends Entity<number> {
    SportName: string;
    SportImage: string;  
}