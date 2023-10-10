import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminIlanComponent } from './admin-ilan.component';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from 'src/core/services/api/api.service';
import { Advert } from 'src/core/models/advert.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { AdvertRequest } from 'src/core/models/request/advert-request.model';



@NgModule({
  declarations: [
    AdminIlanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:AdminIlanComponent}
    ])
  ]
})
export class AdminIlanModule {

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
