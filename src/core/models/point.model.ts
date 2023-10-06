import { Entity } from "./entity.model";
import { Events } from "./events.model";
import { User } from "./user.model";

export class Point extends Entity<number> {
    points?: number;
    userID?: number;
    eventID?: number;

    user?:User;
    events?:Events;

}
