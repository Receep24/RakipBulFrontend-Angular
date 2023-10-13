import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAdressComponent } from './admin-adress.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminAdressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',component:AdminAdressComponent}
    ])
  ]
})
export class AdminAdressModule { }
