import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminIlanComponent } from './admin-ilan.component';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from 'src/core/services/api/api.service';
import { Advert } from 'src/core/models/advert.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { AdvertRequest } from 'src/core/models/request/advert-request.model';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminIlanComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',component:AdminIlanComponent}
    ])
  ]
})
export class AdminIlanModule {

}
