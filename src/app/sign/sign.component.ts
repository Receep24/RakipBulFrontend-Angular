import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/core/models/request/login-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { User } from 'src/core/models/user.model';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
})
export class SignComponent {
register() {
throw new Error('Method not implemented.');
}
  public loginRequest: LoginRequest = <LoginRequest>{};
registerRequest: any;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  async login() {
    let status = await this.authService.login(this.loginRequest);

    if (status == ResponseStatus.Ok) {
      await this.router.navigate(['/anasayfa']);
    } else if (status == ResponseStatus.Invalid)
      this.loginRequest.Password = '';
  }
}
