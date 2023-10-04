import { Entity } from "./entity.model";

export interface Comment extends Entity<number> {
    commentText: string;
    userID: number;
    eventID: number; 
}