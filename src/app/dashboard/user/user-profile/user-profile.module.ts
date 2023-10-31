import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',component:UserProfileComponent}
    ])
  ]
})
export class UserProfileModule { }
