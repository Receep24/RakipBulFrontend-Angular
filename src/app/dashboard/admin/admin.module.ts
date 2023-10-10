import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminEtkinlikModule } from './admin-etkinlik/admin-etkinlik.module';
import { AdminIlanComponent } from './admin-ilan/admin-ilan.component';
import { AdminUsersModule } from './admin-users/admin-users.module';
import { AdminIlanModule } from './admin-ilan/admin-ilan.module';
import { AdminYorumModule } from './admin-yorum/admin-yorum.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AdminEtkinlikModule,
    AdminIlanModule,
    AdminUsersModule,
    AdminYorumModule,
    FormsModule
  ],
  exports:[
    AdminComponent
  ]
})
export class AdminModule {}
