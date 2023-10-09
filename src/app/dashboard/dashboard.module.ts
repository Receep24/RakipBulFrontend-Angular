import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from '../app-routing.module';
import { UserModule } from './user/user.module';




@NgModule({
  declarations: [
 
  ],
  imports: [
    CommonModule,
    AdminModule,   
    UserModule,
    AppRoutingModule
  ]
})
export class DashboardModule { }
