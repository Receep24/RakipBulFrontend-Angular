import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adress } from 'src/core/models/adress.model';
import { Cities } from 'src/core/models/cities.model';
import { Districts } from 'src/core/models/districts.model';
import { AdressRequest } from 'src/core/models/request/adress-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-admin-adress',
  templateUrl: './admin-adress.component.html',
  styleUrls: ['./admin-adress.component.css'],
})
export class AdminAdressComponent implements OnInit {
  adresses: Adress[] = [];
  showAddForm: boolean = false;
  districts: Districts[] = [];
  cities: Cities[] = [];
  selectedCity: number = 0;
  selectedDistrict: number = 0;
  selectedCityDistricts: Districts[] = [];
  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private readonly router:Router
  ) {}
  ngOnInit() {
    this.getAdresses();
    this.getCities();
    this.getDistricts();
  }
  getAdresses() {
    this.apiService.getAllEntities(Adress).subscribe((res) => {
      this.adresses = res.data;
      console.log(this.adresses);
    });
  }
  getCities() {
    this.apiService.getAllEntities(Cities).subscribe((res) => {
      this.cities = res.data;
      console.log(this.cities);
    });
  }
  getDistricts() {
    this.apiService.getAllEntities(Districts).subscribe((res) => {
      this.districts = res.data;
      console.log(this.districts);
    });
  }
  newAdress: AdressRequest = new AdressRequest();
  async addAdress() {
    const adressRequest: AdressRequest = {
      adressName: this.newAdress.adressName,
      cityId: this.newAdress.cityId,
      districtId: this.newAdress.districtId,
    };
    let status = await this.apiService.createEntity<AdressRequest>(
      adressRequest,
      'Adress'
    );
    if (status?.status == ResponseStatus.Ok) {
      alert('Adress Ekleme Başarılı');
      this.getAdresses();
      console.log(status);
      this.showAddForm = false;
    } else {
      alert('Etkinlik Ekleme Başarısız');
    }
  }
  showDistrictSelect: boolean = false;
  onCitySelected() {
    // Seçilen şehir kimliğini al veya varsayılan olarak 0 kullan
    const selectedCityId: number = this.newAdress.cityId || 0;
    console.log(selectedCityId);
    // Bu adımda, kullanıcının seçtiği şehir kimliğini alıyoruz ve 0 olarak ayarlıyoruz (seçim yapılmamışsa). 
    // Ayrıca, seçilen şehir kimliğini konsola yazdırıyoruz.

    // İlgili servisi kullanarak ilçeleri getir
    this.apiService.getDistrictsByCityId(selectedCityId).subscribe((data) => {
      this.selectedCityDistricts = data;
      // Şehir kimliği ile ilçeleri filtreledikten sonra bu verileri kullanabilirsiniz.
      console.log(this.selectedCityDistricts);
      // Bu kısımda, seçilen şehrin kimliği kullanılarak ilçeleri bir API servisi aracılığıyla getiriyoruz.
      // Elde edilen ilçe verilerini 'selectedCityDistricts' değişkenine atıyoruz ve bu verileri konsola yazdırıyoruz.
      
      this.showDistrictSelect = true;
      // Son olarak, ilçe seçimini göstermek için 'showDistrictSelect' değişkenini true olarak ayarlıyoruz.
    });
}

  cancelAdd() {
    this.showAddForm = false;
  }
  updateShowForm: boolean = false;

  confirmDelete(id: any) {
    const confirmDelete = window.confirm('Silmek istiyor musunuz?');
    if (confirmDelete) {
      let status = this.apiService.deleteEntity(id, Adress);
      status.then((response) => {
        try {
          if (response?.status == ResponseStatus.Ok) {
            window.alert('Adres silindi!');
            this.getAdresses();
            this.router.navigate(['admin/adress']);
          } else {
            window.alert('Silme işleminde hata oluştu');
          }
        } catch (error) {
          console.error('Hata oluştu:', error);
        }
      });
    } else {
      window.alert('Silme işlemi iptal edildi');
    }
  }
}  
