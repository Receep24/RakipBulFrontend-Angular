import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEtkinlikComponent } from './admin-etkinlik.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminEtkinlikComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:AdminEtkinlikComponent}
    ])
  ]
})
export class AdminEtkinlikModule { }
