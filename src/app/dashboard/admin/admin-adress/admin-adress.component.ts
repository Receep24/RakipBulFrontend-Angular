import { Component, OnInit } from '@angular/core';
import { Adress } from 'src/core/models/adress.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-admin-adress',
  templateUrl: './admin-adress.component.html',
  styleUrls: ['./admin-adress.component.css'],
})
export class AdminAdressComponent implements OnInit {
  adresses:Adress[]=[]
  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}
  ngOnInit(){
   this.getAdresses();
  }
  getAdresses(){
    this.apiService.getAllEntities(Adress).subscribe(res=>{
      this.adresses=res.data;
      console.log(this.adresses);
      
    })
  }
  
}
