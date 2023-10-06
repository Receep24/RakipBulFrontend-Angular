import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private readonly authservice: AuthService,private readonly apiservice: ApiService,private readonly httpClient: HttpClient ){}

users: User[]=[];
ngOnInit() {
  this.getEvents();
}
getEvents() {
  this.apiservice.getAllEntities(User).subscribe((response) => {
    this.users = response.data;
    console.log(this.users);
  });
}

}
