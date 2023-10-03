import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sports } from 'src/core/models/sports.model';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private readonly apiService: ApiService,
    private router: Router) { }

  sportses: Sports[] = [];
  ngOnInit() {
    this.getCard();

  }
  getCard() {
    this.apiService.getAllEntities(Sports).subscribe((response) => {
      this.sportses = response.data;
      console.log(this.sportses)
    });

}
}

