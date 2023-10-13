import { Component, OnInit } from '@angular/core';
import { Events } from 'src/core/models/events.model';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-etkinlik',
  templateUrl: './etkinlik.component.html',
  styleUrls: ['./etkinlik.component.css'],
})
export class EtkinlikComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  events: Events[] = [];
  eventsToShow: Events[] = [];
  selectedSport: string = 'Tümü';

  ngOnInit() {
    this.getEvents();
  }
  getEvents() {
    this.apiService.getAllEntities(Events).subscribe((response) => {
      this.events = response.data;
      console.log(this.events);
    });
  }

  filterEvents() {
    if (this.selectedSport === 'Tümü') {
      this.eventsToShow = this.events;
    } else if (this.selectedSport === 'Futbol') {
      this.eventsToShow = this.events.filter((event) => event.sportID === 1);
    } else if (this.selectedSport === 'Voleybol') {
      this.eventsToShow = this.events.filter((event) => event.sportID === 2);
    } else if (this.selectedSport === 'Basketbol') {
      this.eventsToShow = this.events.filter((event) => event.sportID === 3);
    } else if (this.selectedSport === 'Tenis') {
      this.eventsToShow = this.events.filter((event) => event.sportID === 4);
    }
  }
}
