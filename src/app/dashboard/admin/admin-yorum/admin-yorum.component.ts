import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/core/models/comment.model';
import { Events } from 'src/core/models/events.model';
import { CommentRequest } from 'src/core/models/request/comment-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-admin-yorum',
  templateUrl: './admin-yorum.component.html',
  styleUrls: ['./admin-yorum.component.css'],

})
export class AdminYorumComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  comments: Comment[] = [];
  user: User[] = [];
  events: Events[] = [];

  commentRequest: CommentRequest = new CommentRequest();

  showCommentForm: boolean = false;



  ngOnInit() {
    this.getComments();
    this.getUsers();
    this.getEvents();
  }
  getComments() {
    this.apiService.getAllEntities(Comment).subscribe((response) => {
      this.comments = response.data;
    });
  }
  getUsers() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.user = response.data;
      console.log(this.user);
    });
  }
  getEvents() {
    this.apiService.getAllEntities(Events).subscribe((response) => {
      this.events = response.data;
      console.log(this.events);
    });
  }

  showCommentFormOnClick() {
    this.showCommentForm = true;
  }



  //Yorum Sİlme
  confirmDelete(id:any) {
    const confirmDelete = window.confirm("Silmek istiyor musunuz?");
    if(confirmDelete){
      let status= this.apiService.deleteEntity(id,Comment);
status.then((response)=>{
  if (response?.status == ResponseStatus.Ok) {
    window.alert('Yorum silindi!')
    this.getComments();
    this.router.navigate(['admin/comments']);
  }
  else{
    window.alert('silme işleminde hata oluştu')
  }
});
    }else{
      window.alert("Silme işlemi iptal edildi");
    }

}

// Yorum Ekleme
async addComment() {
  if (this.commentRequest?.commentText != undefined && this.commentRequest?.userID != undefined && this.commentRequest?.eventID != undefined) {
    let status = await this.apiService.createEntity<CommentRequest>(this.commentRequest, "Comment");
    if (status?.status == ResponseStatus.Ok) {
      alert("Yorum Ekleme Başarılı");
      this.getComments();
      this.showCommentForm = false;
      console.log(status);
      
    } else {
      alert("Yorum Ekleme Başarısız");
    }
  } else {
    alert("Lütfen tüm alanları doldurun");
  }
}

//YORUM GÜNCELLEME

selectedComment: Comment | null = null;

showUpdateForm(comment: Comment) {
  this.selectedComment = comment;

}

updateComment() {
  if (this.selectedComment) {
    // Güncelleme verilerini API'ye gönderin
    this.apiService.updateEntity(this.selectedComment.id!, this.selectedComment, Comment).then(response => {
      if (response?.status === ResponseStatus.Ok) {
        window.alert('İlan başarıyla güncellendi!');
        // İlanları yeniden getirin veya güncel duruma göre ilanları güncelleyin
        this.getComments();
        this.cancelUpdate(); // Güncelleme formunu kapat
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
  this.selectedComment = null;
}


}
