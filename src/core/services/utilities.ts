import { ResponseStatus } from '../models/response/base-response.model';

export class Utilities {
  static toMessageType(responseStatus: ResponseStatus): string {
    let messageType;

    switch (responseStatus) {
      case ResponseStatus.Ok:
        messageType = 'success';
        break;
      case ResponseStatus.Forbidden |
        ResponseStatus.Unauthorized |
        ResponseStatus.Invalid |
        ResponseStatus.NotFound:
        messageType = 'warn';
        break;
      default:
        messageType = 'error';
        break;
    }

    return messageType;
  }
}
