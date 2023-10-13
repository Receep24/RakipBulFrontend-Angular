import { Component } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-admin-adress',
  templateUrl: './admin-adress.component.html',
  styleUrls: ['./admin-adress.component.css']
})
export class AdminAdressComponent {

constructor(private apiService:ApiService,private authService:AuthService) {
  
}
}
