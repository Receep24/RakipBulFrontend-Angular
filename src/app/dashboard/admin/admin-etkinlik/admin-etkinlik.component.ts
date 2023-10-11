import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from 'src/core/models/events.model';
import { EventsRequest } from 'src/core/models/request/events-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
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
    console.log(this.events);
  }

  //Etkinlikleri Getirme
  getEvents() {
    this.apiService.getAllEntities(Events).subscribe((response) => {
      this.events = response.data;
      console.log(this.events);
    });
  }

  //Id'ye Göre Etkinlik Silme
confirmDelete(id:any) {
  const confirmDelete = window.confirm("Silmek istiyor musunuz?");
  if(confirmDelete){
    let status= this.apiService.deleteEntity(id,Events);
status.then((response)=>{
if (response?.status == ResponseStatus.Ok) {
  window.alert('İlan silindi!')
  this.getEvents();
  this.router.navigate(['admin/events']);
}
else{
  window.alert('Silme işleminde hata oluştu')
}
});
  }else{
    window.alert("Silme işlemi iptal edildi");
  }
}

  //Etkinlik Ekleme
showAddForm = false; // İlan ekleme formunu göstermek için bir bayrak
newEvents: Events = new Events(); // Yeni ilan verisi

  addEvents() {
    // Yeni ilanı API'ye göndermek için bir AdvertRequest oluşturun

    const selectedDate = new Date(this.newEvents.eventDate);

    const eventsRequest: EventsRequest = {
      EventName: this.newEvents.eventName,
      EventDate: selectedDate,
      UserID: this.newEvents.userID,
      SportID: this.newEvents.sportID,
      AdressID: this.newEvents.adressID
    };
  
    // API'ye yeni ilanı ekleyin
    this.apiService.createEntity(eventsRequest, 'Events')
      .then(response => {
        if (response?.status === ResponseStatus.Ok) {
          window.alert('İlan başarıyla eklendi!');
          this.getEvents(); // İlanları güncelle
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
  this.newEvents = new Events(); // Formu temizle
  }





selectedEvents: Events | null = null;

showUpdateForm(events: Events) {
  this.selectedEvents = events;
}

updateEvents() {
  if (this.selectedEvents) {
    // Güncelleme verilerini API'ye gönderiyor
    this.apiService.updateEntity(this.selectedEvents.id!, this.selectedEvents, Events).then(response => {
      if (response?.status === ResponseStatus.Ok) {
        window.alert('İlan başarıyla güncellendi!');
        // İlanları yeniden getirin veya güncel duruma göre ilanları güncelleyin
        this.getEvents();
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
  this.selectedEvents = null;
}




  
}
