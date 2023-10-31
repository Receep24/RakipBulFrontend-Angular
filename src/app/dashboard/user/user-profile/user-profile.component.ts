import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Adress } from 'src/core/models/adress.model';
import { Cities } from 'src/core/models/cities.model';
import { Districts } from 'src/core/models/districts.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user: User | null;
  city: Cities | null;
  district: Districts | null;
  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router,
    private readonly authService: AuthService,
    private modalService: NgbModal
  ) {
    this.user = null;
    this.district=null;
    this.city=null;
  }
  ngOnInit() {
    this.getUser();
    
  }

  getUser() {
    this.authService.currentUser.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }

  openEditProfileModal(content: any) {
    this.modalService.open(content, { size: 'lg' }); // 'lg' sets the size to large; you can change it as needed
  }

  updateUser() {
    if (this.user) {
      // Güncelleme verilerini API'ye gönderin
      this.apiService
        .updateEntity(this.user.id!, this.user, User)
        .then((response) => {
          if (response?.status === ResponseStatus.Ok) {
            window.alert('Kullanıcı başarıyla güncellendi!');
            // İlanları yeniden getirin veya güncel duruma göre ilanları güncelleyin
            let user = this.getUser();
          } else {
            window.alert('Kullanıcı güncellenirken hata oluştu.');
          }
        })
        .catch((error) => {
          console.error('Hata oluştu:', error);
          window.alert('Kullanıcı güncellenirken hata oluştu.');
        });
    }
  }
}
