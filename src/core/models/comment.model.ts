import { Entity } from "./entity.model";
import { Events } from "./events.model";
import { User } from "./user.model";

export class Comment extends Entity<number> {
    commentText: string='';
    userID: number=0;
    eventID: number=0;

    user?:User;
    events?:Events;


}
