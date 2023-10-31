import { Events } from "./events.model";
import { User } from "./user.model";

export class UserEvents {
    userEventsID?: number;
    userID?: number;
    user?: User;
    eventID?: number;
    events?: Events;
}