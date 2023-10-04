import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from 'src/core/models/user.model';
import { AuthService } from 'src/core/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  user: User | null;
  constructor(private authService: AuthService, private router: Router) {
    this.user =null
    this.authService.currentUser.subscribe(u=>{
        this.user=u
    })
    
  }

  canActivate(): boolean {
    if (
      this.authService.IsLoggedIn &&
      this.authService.getUserType() === this.user?.userType
    ) {
      return true; // Kullanıcı giriş yapmış ve admin ise erişime izin ver
    } else {
      this.router.navigate(['/unauthorized']); // Giriş yapılmamışsa veya admin değilse yetkilendirilmemiş sayfasına yönlendir
      return false; // Erişime izin verme
    }
  }
}
