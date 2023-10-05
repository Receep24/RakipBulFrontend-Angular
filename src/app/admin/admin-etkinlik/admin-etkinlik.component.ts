import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from 'src/core/models/events.model';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-admin-etkinlik',
  templateUrl: './admin-etkinlik.component.html',
  styleUrls: ['./admin-etkinlik.component.css']
})
export class AdminEtkinlikComponent {
  constructor(private apiService: ApiService,
    private router: Router) {}

  events: Events[] = [];

  ngOnInit() {
    this.getEvents();
  }
  getEvents() {
    this.apiService.getAllEntities(Events).subscribe((response) => {
      this.events = response.data;
      console.log(this.events);
    });
  }
}
