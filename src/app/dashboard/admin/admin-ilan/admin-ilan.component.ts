import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/core/models/advert.model';
import { AdvertRequest } from 'src/core/models/request/advert-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
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

//Yorum Sİlme
confirmDelete(id:any) {
  const confirmDelete = window.confirm("Silmek istiyor musunuz?");
  if(confirmDelete){
    let status= this.apiService.deleteEntity(id,Advert);
status.then((response)=>{
if (response?.status == ResponseStatus.Ok) {
  window.alert('İlan silindi!')
  this.getAdverts();
  this.router.navigate(['admin/adverts']);
}
else{
  window.alert('Silme işleminde hata oluştu')
}
});
  }else{
    window.alert("Silme işlemi iptal edildi");
  }
}


public advertRequest: AdvertRequest =<AdvertRequest>{};


}
