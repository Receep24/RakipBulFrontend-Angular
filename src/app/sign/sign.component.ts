import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/core/models/request/login-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { AuthService } from 'src/core/services/auth/auth.service';
import { ApiService } from 'src/core/services/api/api.service';
import { Gender } from 'src/core/models/user.model';
import { RegisterRequest } from 'src/core/models/request/register-request.model';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
})
export class SignComponent {
  public loginRequest: LoginRequest = <LoginRequest>{};
  public registerRequest: RegisterRequest = <RegisterRequest>{}; 

  constructor(
    private readonly authService: AuthService,
    private readonly apiService:ApiService,
    private readonly router: Router
  ) {}
  ngOnInit() {}

  async login() {
    let status = await this.authService.login(this.loginRequest);

    if (status == ResponseStatus.Ok) {
      await this.router.navigate(['/admin']);
    } else if (status == ResponseStatus.Invalid)
      this.loginRequest.Password = '';
  }

  async register() {
    

    this.registerRequest.gender = Gender.Male; // Cinsiyet varsayılan olarak "Male"
    this.registerRequest.Age = 26; // Yaş varsayılan olarak 26
    this.registerRequest.UserImage = 'default.jpg';

    let status = await this.authService.register(this.registerRequest);

    if (status == ResponseStatus.Ok) {
      await this.router.navigate(['']);
    } else if (status == ResponseStatus.Invalid) {
      this.registerRequest.Password = '';
    }
  }
 
}
