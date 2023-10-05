import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-admin-yorum',
  templateUrl: './admin-yorum.component.html',
  styleUrls: ['./admin-yorum.component.css']
})
export class AdminYorumComponent {
  constructor(private readonly apiService: ApiService,
    private router: Router) { }

  comments: Comment[] = [];
  ngOnInit() {
    this.getComment();
  }

  getComment() {
    this.apiService.getAllEntities(Comment).subscribe((response) => {
      this.comments = response.data;
      console.log(this.comments)
    });

}
}
