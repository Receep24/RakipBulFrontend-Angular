import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/core/models/advert.model';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-ilanlar',
  templateUrl: './ilanlar.component.html',
  styleUrls: ['./ilanlar.component.css']
})
export class IlanlarComponent {
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
