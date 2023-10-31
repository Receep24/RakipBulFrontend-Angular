import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';
import { JwtInterceptor } from 'src/core/services/interceptor/jwt.interceptor';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User | null;

  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    this.user = null;
  }
  ngOnInit() {
    this.authService.currentUser.subscribe((user) => {
      this.user = user;
      if (!this.user) {
        this.router.navigate(['/giris']);
      }
    });
  }
}
