import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUsersComponent } from './admin-users.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:AdminUsersComponent}
    ])
  ]
})
export class AdminUsersModule { }
