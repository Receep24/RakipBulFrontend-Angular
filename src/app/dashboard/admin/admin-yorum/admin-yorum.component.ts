import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/core/models/comment.model';
import { Events } from 'src/core/models/events.model';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-admin-yorum',
  templateUrl: './admin-yorum.component.html',
  styleUrls: ['./admin-yorum.component.css'],
})
export class AdminYorumComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  comments: Comment[] = [];
  user: User[] = [];
  events: Events[] = [];

  ngOnInit() {
    this.getComments();
    this.getUsers();
    this.getEvents();
  }
  getComments() {
    this.apiService.getAllEntities(Comment).subscribe((response) => {
      this.comments = response.data;
    });
  }
  getUsers() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.user = response.data;
      console.log(this.user);
    });
  }
  getEvents() {
    this.apiService.getAllEntities(Events).subscribe((response) => {
      this.events = response.data;
      console.log(this.events);
    });
  }
}
