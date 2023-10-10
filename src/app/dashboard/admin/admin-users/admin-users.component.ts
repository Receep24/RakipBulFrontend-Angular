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

  isPopupOpen: boolean = false;
  userIdToDelete: number | undefined;
  users: User[] = [];
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.users = response.data;
      console.log(this.users);
    });
  }

  // onDelete(id: number | undefined) {
  //   if (id !== undefined) {
  //     this.delete(id).then((response) => {
  //       if (response?.status == ResponseStatus.Ok) {
  //         this.getUsers();
  //       }
  //     });
  //   }
  // }
  // delete(id: number) {
  //   return this.apiService.deleteEntity(id, User);
  // }

  onDelete(id: number | undefined) {
    if (id !== undefined) {
      this.userIdToDelete = id; // Store the user ID to delete
      const message = 'Are you sure you want to delete this user?';
      this.openPopup(message);
    }
  }

  confirmDelete() {
    if (this.userIdToDelete !== undefined) {
      this.delete(this.userIdToDelete).then((response) => {
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
