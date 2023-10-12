// user-event.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Adress } from 'src/core/models/adress.model';
import { Cities } from 'src/core/models/cities.model';
import { Districts } from 'src/core/models/districts.model';
import { AdressRequest } from 'src/core/models/request/adress-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';




@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css'],
})
export class UserEventComponent implements OnInit {
  selectedCityId: number = 1; // Seçilen ilin kimliği
  districts: Districts[] = [];
  newAddress: Adress = new Adress();
  cities: Cities[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Şehirleri API'den çek
    this.apiService.getAllEntities(Cities).subscribe((response) => {
       {
        this.cities = response.data;
      } 
    });
  }

  // İl değiştiğinde bu fonksiyonu çağırın
  onCityChange() {
    this.apiService.getDistricts(this.selectedCityId).subscribe((response) => {
      this.districts = response.data;
      
      // You can access selectedCityId here
      console.log("Selected City ID:", this.selectedCityId);
    });
  }

  // Adresi kaydetmek için bu fonksiyonu çağırın
  saveAddress() {
    this.newAddress.cityId = this.selectedCityId;
    // Diğer adres alanlarını ayarlayın
    this.apiService.createEntity(this.newAddress, 'Adress').then((response) => {
      
    });
  }
}
