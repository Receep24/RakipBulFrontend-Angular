import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {
  BaseResponse,
  ResponseStatus,
} from '../models/response/base-response.model';
import { Utilities } from '../utilities';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private readonly messageService: MessageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((res) => {
        if (
          request.url.startsWith(environment.api_url) &&
          res instanceof HttpResponse
        ) {
          const baseResponse = res.body as BaseResponse;

          if (baseResponse.status !== ResponseStatus.Ok && baseResponse.message != null
          ) {
            this.messageService.add({
              severity: Utilities.toMessageType(baseResponse.status),
              detail: baseResponse.message,
            });
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Server Error',
          detail: error.message,
        });

        return throwError(() => error.message);
      })
    );
  }
}
