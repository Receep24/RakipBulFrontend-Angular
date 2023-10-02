import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Adverts } from 'src/core/models/advert.model';
import { ApiService } from 'src/core/services/api/api.service';


@Component({
  selector: 'app-ilan',
  templateUrl: './ilan.component.html',
  styleUrls: ['./ilan.component.css']
})
export class IlanComponent {
  constructor(private readonly apiService: ApiService,
    private router: Router) { }

  adverts: Adverts[] = [];
  ngOnInit() {
    this.getAdverts();
  }

  getAdverts() {
    this.apiService.getAllEntities(Adverts).subscribe((response) => {
      this.adverts = response.data;
      console.log(this.adverts)
    });
}

}

