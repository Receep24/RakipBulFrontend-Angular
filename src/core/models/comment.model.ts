import { Entity } from "./entity.model";

export class Comment extends Entity<number> {
    commentText: string ='';
    userID: number =0;
    eventID: number =0;
}
