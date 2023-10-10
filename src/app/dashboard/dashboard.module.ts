import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from '../app-routing.module';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AdminModule,
    UserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    AppRoutingModule
  ],
  exports:[

  ]
})
export class DashboardModule { }
