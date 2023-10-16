// user-event.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Adress } from 'src/core/models/adress.model';
import { Cities } from 'src/core/models/cities.model';
import { Districts } from 'src/core/models/districts.model';
import { Events } from 'src/core/models/events.model';
import { AdressRequest } from 'src/core/models/request/adress-request.model';
import { EventsRequest } from 'src/core/models/request/events-request.model';
import { UserEventsRequest } from 'src/core/models/request/user-events-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { Sports } from 'src/core/models/sports.model';
import { User } from 'src/core/models/user.model';
import { UserEvents } from 'src/core/models/userevents.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css'],
})
export class UserEventComponent implements OnInit {
  selectedCityId: number = 1;
  selectedDistrictId: number = 1;
  districts: Districts[] = [];
  cities: Cities[] = [];
  sports: Sports[] = [];
  user: User | null = null;
  events: Events[] = [];
  userEvents: UserEvents[] = [];
  adressToShow: Adress[] = [];
  filteredUserEvents: UserEvents[] = [];
 
  constructor(
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getEvents();
    this.getUserEvents();
    this.getAdresses();
    this.getSports();
    this.authService.currentUser.subscribe((user) => {
      this.user = user;     
    });  
    
  }
  getSports() {
    this.apiService.getAllEntities(Sports).subscribe((response) => {
      this.sports = response.data;
    });
  }
  getAdresses() {
    this.apiService.getAllEntities(Adress).subscribe((response) => {
      this.adressToShow = response.data;
    });
  }
  //Etkinlikleri Getirme
  getEvents() {
    this.apiService.getAllEntities(Events).subscribe((response) => {
      this.events = response.data;
      console.log(this.events);
    });
  }

  getUserEvents() {
    this.apiService.getAllEntities(UserEvents).subscribe((response) => {
      this.userEvents = response.data;
      this.filteredUserEvents = this.userEvents.filter(
        (userEvent) => userEvent.user?.id === this.user?.id
      );
      console.log(this.filteredUserEvents);
    });
  }

 

  //Id'ye Göre Etkinlik Silme
  confirmDelete(id: any) {
    const confirmDelete = window.confirm('Silmek istiyor musunuz?');
    if (confirmDelete) {
      let status = this.apiService.deleteEntity(id, Events);
      status.then((response) => {
        if (response?.status == ResponseStatus.Ok) {
          window.alert('İlan silindi!');
          this.getEvents();
          this.router.navigate(['admin/events']);
        } else {
          window.alert('Silme işleminde hata oluştu');
        }
      });
    } else {
      window.alert('Silme işlemi iptal edildi');
    }
  }

  //Etkinlik Ekleme
  showAddForm = false; // İlan ekleme formunu göstermek için bir bayrak
  newUserEvents: UserEvents = new UserEvents();
  newAdress: Adress = new Adress();
  newEvents: EventsRequest = new EventsRequest();

  async addEvents() {
    const eventsRequest: EventsRequest = {
      EventName: this.newEvents.EventName,
      EventDate: this.newEvents.EventDate,
      AdressID: this.newEvents.AdressID,
      SportID: this.newEvents.SportID,
    };

    let status = await this.apiService.createEntity<EventsRequest>(
      eventsRequest,
      'Events'
    );
    if (status?.status == ResponseStatus.Ok) {
      alert('Etkinlik Ekleme Başarılı');
      this.getEvents();
      console.log(status);
    } else {
      alert('Etkinlik Ekleme Başarısız');
    }
    setTimeout(() => {
      this.addUserEvent();
    }, 2000);
  }
  async addUserEvent() {
    const latestEvent = this.events[this.events.length - 1];
    this.authService.currentUser.subscribe((user) => {
      this.user = user;
    });

    const userEventRequest: UserEventsRequest = {
      userID: this.user?.id,
      eventID: latestEvent.id,
    };
    let status = await this.apiService.createEntity<UserEventsRequest>(
      userEventRequest,
      'UserEvents'
    );
    if (status?.status === ResponseStatus.Ok) {
      alert('UserEvents Ekleme Başarılı');
      this.showAddForm = false;
      console.log(status);
    } else {
      alert('UserEvents Ekleme Başarısız');
    }
  }
  // Ekleme formunu kapat
  cleanEvent: Events = new Events();
  cancelAdd() {
    this.showAddForm = false;
    this.cleanEvent = new Events(); // Formu temizle
  }

  selectedEvents: Events | null = null;
  selectedUserEvents: UserEvents | null = null;
  updateShowForm: boolean = false;
  showUpdateForm(user: UserEvents) {
    this.updateShowForm = true;
    this.selectedUserEvents = user;
  }

  updateEvents() {
    if (this.selectedEvents) {
      // Güncelleme verilerini API'ye gönderiyor
      this.apiService
        .updateEntity(this.selectedEvents.id!, this.selectedEvents, Events)
        .then((response) => {
          if (response?.status === ResponseStatus.Ok) {
            window.alert('İlan başarıyla güncellendi!');
            // İlanları yeniden getirin veya güncel duruma göre ilanları güncelleyin
            this.getEvents();
            this.cancelUpdate(); // Güncelleme formunu kapatın
          } else {
            window.alert('İlan güncellenirken hata oluştu.');
          }
        })
        .catch((error) => {
          console.error('Hata oluştu:', error);
          window.alert('İlan güncellenirken hata oluştu.');
        });
    }
  }

  cancelUpdate() {
    this.selectedEvents = null;
  }
}
