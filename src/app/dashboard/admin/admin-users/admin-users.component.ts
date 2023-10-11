import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
})
export class AdminUsersComponent implements OnInit {
  constructor(
    private readonly authservice: AuthService,
    private apiService: ApiService,
    private readonly httpClient: HttpClient
  ) {}
  formOpen: boolean = false;
  isPopupOpen: boolean = false;
  userId: number | undefined;
  users: User[] = [];
  editedUser: User | null = null;
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.users = response.data;
      console.log(this.users);
    });
  }

  showUpdateForm(user:User){
    this.editedUser = user;
  }
 
  updateUser() {
    if (this.editedUser) {
      // Güncelleme verilerini API'ye gönderin
      this.apiService
        .updateEntity(this.editedUser.id!, this.editedUser, User)
        .then((response) => {
          if (response?.status === ResponseStatus.Ok) {
            window.alert('Kullanıcı başarıyla güncellendi!');
            // İlanları yeniden getirin veya güncel duruma göre ilanları güncelleyin
            let user = this.getUsers();
            this.cancelUpdate(); // Güncelleme formunu kapatın
            this.formOpen=false;
            console.log(user);
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
  cancelUpdate() {
    this.editedUser = null;
  }

  onDelete(id: number | undefined) {
    if (id !== undefined) {
      this.userId = id; // Store the user ID to delete
      const message = 'Are you sure you want to delete this user?';
      this.openPopup(message);
    }
  }

  confirmDelete() {
    if (this.userId !== undefined) {
      this.delete(this.userId).then((response) => {
        if (response?.status == ResponseStatus.Ok) {
          this.getUsers();
        }
      });
    }
    this.closePopup();
  }
  async delete(id: number): Promise<any> {
    // Implement the delete logic here
    return await this.apiService.deleteEntity(id, User);
  }

  cancelDelete() {
    this.closePopup();
  }

  openPopup(message: string) {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }
}
