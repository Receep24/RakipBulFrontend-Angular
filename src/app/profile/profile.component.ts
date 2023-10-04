import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  
  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {

  }
}
