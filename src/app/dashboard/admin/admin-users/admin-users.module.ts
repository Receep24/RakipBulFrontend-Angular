import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUsersComponent } from './admin-users.component';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminUsersComponent,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',component:AdminUsersComponent}
    ])
   
  ]
})
export class AdminUsersModule { }
