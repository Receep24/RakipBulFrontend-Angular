import { Events } from "../events.model";
import { User } from "../user.model";

export class CommentRequest {
  commentText?: string;
  userID?: number;
  eventID?: number; 

}
