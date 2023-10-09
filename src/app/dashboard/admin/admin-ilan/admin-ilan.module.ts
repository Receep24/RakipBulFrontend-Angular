import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminIlanComponent } from './admin-ilan.component';
import { RouterModule } from '@angular/router';



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
export class AdminIlanModule { }
