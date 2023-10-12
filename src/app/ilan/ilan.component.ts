import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/core/models/advert.model';
import { Sports } from 'src/core/models/sports.model';

import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-ilan',
  templateUrl: './ilan.component.html',
  styleUrls: ['./ilan.component.css'],
})
export class IlanComponent {
  constructor(
    private readonly apiService: ApiService,
    private router: Router
  ) {}

  adverts: Advert[] = [];
  sport: Sports[] = [];
  ngOnInit() {
    this.getAdverts();
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
}
