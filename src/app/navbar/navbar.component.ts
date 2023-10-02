import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/core/models/user.model';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentUser: User | null = null;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {  }

  ngOnInit() { 
    this.authService.currentUser.subscribe((user) => {
      this.currentUser = user;
      this.isLoggedIn = user !==null
    });     
  
  }
  async logOut() {
    sessionStorage.clear();
    await this.router.navigate(['']);
    location.reload();
  }  

}

