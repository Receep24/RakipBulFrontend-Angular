import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/core/models/advert.model';
import { ApiService } from 'src/core/services/api/api.service';


@Component({
  selector: 'app-admin-ilan',
  templateUrl: './admin-ilan.component.html',
  styleUrls: ['./admin-ilan.component.css']
})
export class AdminIlanComponent {
  messageService: any;
  constructor(private readonly apiService: ApiService,
    private router: Router) { }

  adverts: Advert[] = [];
  ngOnInit() {
    this.getAdverts();
  }

  getAdverts() {
    this.apiService.getAllEntities(Advert).subscribe((response) => {
      this.adverts = response.data;
      console.log(this.adverts)
    });

}

}
