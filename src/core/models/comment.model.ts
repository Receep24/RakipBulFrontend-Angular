import { Entity } from "./entity.model";

export interface Comment extends Entity<number> {
    CommentText: string;
    UserID: number;
    EventID: number; 
}