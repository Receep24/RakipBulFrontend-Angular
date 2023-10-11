import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/core/models/request/login-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { AuthService } from 'src/core/services/auth/auth.service';
import { ApiService } from 'src/core/services/api/api.service';
import { User } from 'src/core/models/user.model';
import {
  RegisterRequest,
  UserType,
  Gender,
} from 'src/core/models/request/register-request.model';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
})
export class SignComponent {
  public loginRequest: LoginRequest = <LoginRequest>{};
  public registerRequest: RegisterRequest = <RegisterRequest>{};
  user?: User | null = null;

  constructor(
    private readonly authService: AuthService,
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {}
  ngOnInit() {}

  async login() {
    let status = await this.authService.login(this.loginRequest);
    this.authService.currentUser.subscribe((response) => {
      this.user = response;
    });

    if (status == ResponseStatus.Ok && this.user?.userType === 0) {
      await this.router.navigate(['/admin']);
    }
    if (status == ResponseStatus.Ok && this.user?.userType === 1) {
      await this.router.navigate(['/anasayfa']);
    } 
    else if (status == ResponseStatus.Invalid)
      this.loginRequest.Password = '';
  }

  async register() {
    this.registerRequest.UserType=UserType.User;//auth register dtoya usertype ve gender eklenecek
    this.calculateAge();
    this.registerRequest.UserImage = 'default.jpg';
    // this.registerRequest.userType = UserType.User;

    let status = await this.authService.register(this.registerRequest);

    if (status == ResponseStatus.Ok) {
      await this.router.navigate(['']);
    } else if (status == ResponseStatus.Invalid) {
      this.registerRequest.Password = '';
    }
  }
  calculateAge() {
    if (this.registerRequest.Age) {
      let birthDate = new Date(this.registerRequest.Age);
      let currentDate = new Date();
      let age = currentDate.getFullYear() - birthDate.getFullYear();

      // Doğum günü bu yıl geçtiyse yaşını bir azalt
      if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      this.registerRequest.Age = age;
    }
  }
}
