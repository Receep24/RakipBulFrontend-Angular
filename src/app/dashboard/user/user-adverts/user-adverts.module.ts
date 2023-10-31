import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdvertsComponent } from './user-adverts.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserAdvertsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',component:UserAdvertsComponent}
    ])
  ]
})
export class UserAdvertsModule { }
