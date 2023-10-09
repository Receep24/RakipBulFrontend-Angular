import { Component, OnInit } from '@angular/core';
import { User } from 'src/core/models/user.model';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  currentUser: User | null = null;
  /**
   *
   */
  constructor(private authService:AuthService) {   
    
  }
  ngOnInit(){
    this.authService.currentUser.subscribe(user=>{
      this.currentUser=user;
    })
  }
}
