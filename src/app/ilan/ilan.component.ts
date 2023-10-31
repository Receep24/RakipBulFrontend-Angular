import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/core/models/advert.model';
import { Events } from 'src/core/models/events.model';
import { UserEventsRequest } from 'src/core/models/request/user-events-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { Sports } from 'src/core/models/sports.model';
import { User } from 'src/core/models/user.model';
import { UserEvents } from 'src/core/models/userevents.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-ilan',
  templateUrl: './ilan.component.html',
  styleUrls: ['./ilan.component.css'],
})
export class IlanComponent {
  constructor(
    private readonly apiService: ApiService,
    private router: Router,
    private authService: AuthService
  ) {}

  adverts: Advert[] = [];
  sport: Sports[] = [];
  user: User | null = null;
  userEvents: UserEvents[] = [];
  events: Events[] = [];
  ngOnInit() {
    this.getAdverts();
    this.authService.currentUser.subscribe((u) => {
      this.user = u;
    });
    this.getEvents();
    this.getUserEvents();
  }
  userControl() {
    // Eğer user null veya user.id null ise, true döndür
    if (!this.user || this.user.id === null) {
      return false;
    }
    // Aksi takdirde, false döndür
    return true;
  }

  getEvents() {
    this.apiService.getAllEntities(Events).subscribe((response) => {
      this.events = response.data;
      console.log(this.events);
    });
  }
  getAdverts() {
    this.apiService.getAllEntities(Advert).subscribe((response) => {
      this.adverts = response.data;
      console.log(this.adverts);
    });
  }
  getSports() {
    this.apiService.getAllEntities(Sports).subscribe((response) => {
      this.sport = response.data;
    });
  }
  getUserEvents() {
    this.apiService.getAllEntities(UserEvents).subscribe((response) => {
      this.userEvents = response.data;
    });
  }

  selectedAdvert: Advert | null = null;

  selectAdvert(advert: Advert) {
    this.selectedAdvert = advert;
  }
  async addUserEvent() {
    const selectedAdvert = this.selectedAdvert;
    const matchingEvent = this.events.find((event) => {
      return event.adressID === selectedAdvert?.adressID;
    });

    if (matchingEvent) {
      const userEventRequest: UserEventsRequest = {
        userID: this.user?.id,
        eventID: matchingEvent.id, // Use the ID of the matching event
      };

      const status = await this.apiService.createEntity<UserEventsRequest>(
        userEventRequest,
        'UserEvents'
      );

      if (status?.status === ResponseStatus.Ok) {
        alert('UserEvents Ekleme Başarılı');
      } else {
        alert('UserEvents Ekleme Başarısız');
      }
    } else {
      alert('No matching event found for the selected advert.');
    }
  }
}
