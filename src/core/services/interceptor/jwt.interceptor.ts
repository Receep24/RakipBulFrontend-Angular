import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Eğer istek, API URL'si ile başlıyorsa ve "RefreshToken" ifadesini içermiyorsa devam eder
    if (request.url.startsWith(environment.api_url) && !request.url.includes('RefreshToken')) {
    55

      // Saklanan JWT'nin geçerliliğini kontrol eder
      const expiration = Date.parse(JSON.parse(<string>sessionStorage.getItem('token_expiration')));

      // Eğer JWT geçerliliğini yitirmişse, yenilemeye çalışır veya kullanıcıyı oturumu kapatır
      if (expiration != null && Date.now() > expiration) {
        this.authService.refreshToken().then((result) => {
          if (result) {
            request = this.setRequest(request);
          } else {
            this.authService.logOut();
          }
        });
      }
      // İstek üzerine kimlik doğrulama başlığını ekler
      request = this.setRequest(request);
    }
    
    // İsteği devam ettirir
    return next.handle(request);
  }

  // İsteğe kimlik doğrulama başlığını ekler
  private setRequest(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${JSON.parse(<string>sessionStorage.getItem('access_token'))}`,
      },
    });
  }
}
