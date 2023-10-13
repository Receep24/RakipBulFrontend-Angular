import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/core/models/advert.model';
import { AdvertRequest } from 'src/core/models/request/advert-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-user-adverts',
  templateUrl: './user-adverts.component.html',
  styleUrls: ['./user-adverts.component.css']
})
export class UserAdvertsComponent {
  messageService: any;
  constructor(private readonly apiService: ApiService,
    private router: Router) { }

  adverts: Advert[] = [];
  ngOnInit() {
    this.getAdverts();
  }

  getAdverts() {
    this.apiService.getAllEntities(Advert).subscribe((response) => {
      this.adverts = response.data;
      console.log(this.adverts)
    });
}

//İlan Sİlme
confirmDelete(id:any) {
  const confirmDelete = window.confirm("Silmek istiyor musunuz?");
  if(confirmDelete){
    let status= this.apiService.deleteEntity(id,Advert);
status.then((response)=>{
if (response?.status == ResponseStatus.Ok) {
  window.alert('İlan silindi!')
  this.getAdverts();
  this.router.navigate(['user/adverts']);
}
else{
  window.alert('Silme işleminde hata oluştu')
}
});
  }else{
    window.alert("Silme işlemi iptal edildi");
  }
}


showAddForm = false; // İlan ekleme formunu göstermek için bir bayrak
newAdvert: Advert = new Advert(); // Yeni ilan verisi
//İlan Ekleme
  addAdvert() {
    // Yeni ilanı API'ye göndermek için bir AdvertRequest oluşturun
    const advertRequest: AdvertRequest = {
      AdvertText: this.newAdvert.advertText,
      UserID: this.newAdvert.userID,
      SportID: this.newAdvert.sportID,
      AdressID: this.newAdvert.adressID
    };

    // API'ye yeni ilanı ekleyin
    this.apiService.createEntity(advertRequest, 'Advert')
      .then(response => {
        if (response?.status === ResponseStatus.Ok) {
          window.alert('İlan başarıyla eklendi!');
          this.getAdverts(); // İlanları güncelle
          this.cancelAdd(); // Ekleme formunu kapat
        } else {
          window.alert('İlan eklenirken hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Hata oluştu:', error);
        window.alert('İlan eklenirken hata oluştu.');
      });
  }
// Ekleme formunu kapat
  cancelAdd() {
  this.showAddForm = false;
  this.newAdvert = new Advert(); // Formu temizle
  }


  // TypeScript dosyanızda
selectedAdvert: Advert | null = null;

showUpdateForm(advert: Advert) {
  this.selectedAdvert = advert;
  // Diğer gerekli işlemleri burada yapabilirsiniz (örneğin, güncelleme formunu göstermek için bir bayrak ayarlamak).
}

updateAdvert() {
  if (this.selectedAdvert) {
    // Güncelleme verilerini API'ye gönderin
    this.apiService.updateEntity(this.selectedAdvert.id!, this.selectedAdvert, Advert).then(response => {
      if (response?.status === ResponseStatus.Ok) {
        window.alert('İlan başarıyla güncellendi!');
        // İlanları yeniden getirin veya güncel duruma göre ilanları güncelleyin
        this.getAdverts();
        this.cancelUpdate(); // Güncelleme formunu kapatın
      } else {
        window.alert('İlan güncellenirken hata oluştu.');
      }
    }).catch(error => {
      console.error('Hata oluştu:', error);
      window.alert('İlan güncellenirken hata oluştu.');
    });
  }
}


cancelUpdate() {
  this.selectedAdvert = null;
}
}
