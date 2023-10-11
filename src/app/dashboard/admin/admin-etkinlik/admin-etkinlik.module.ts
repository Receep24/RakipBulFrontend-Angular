import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEtkinlikComponent } from './admin-etkinlik.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminEtkinlikComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',component:AdminEtkinlikComponent}
    ])
  ]
})
export class AdminEtkinlikModule { }
