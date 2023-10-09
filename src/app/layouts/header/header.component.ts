import { Component, HostListener, OnInit } from '@angular/core';
import { User } from 'src/core/models/user.model';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentUser: User | null = null;
  isSidebarOpen = true;

  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.currentUser.subscribe((user) => {
      this.currentUser = user;
    });
    this.checkScreenWidth();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  checkScreenWidth() {
    if (window.innerWidth <= 768) {
      this.isSidebarOpen = false; // Ekran küçüldüğünde yan menüyü kapat
    }
  }
}
