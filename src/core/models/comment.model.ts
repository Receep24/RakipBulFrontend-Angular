import { Entity } from "./entity.model";
import { Events } from "./events.model";
import { User } from "./user.model";

export class Comment extends Entity<number> {
    commentText?: string;
    userID?: number;
    eventID?: number; 
    user?:User;
    events?:Events;

}
