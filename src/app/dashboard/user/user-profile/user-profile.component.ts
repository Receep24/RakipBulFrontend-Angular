import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
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
    });
  }
}
