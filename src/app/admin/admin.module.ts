import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HeaderComponent } from './header/header.component';
import { AdminIlanComponent } from './admin-ilan/admin-ilan.component';
import { AdminEtkinlikComponent } from './admin-etkinlik/admin-etkinlik.component';
import { AdminYorumComponent } from './admin-yorum/admin-yorum.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';




@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    SearchbarComponent,
    HeaderComponent,
    AdminIlanComponent,
    AdminEtkinlikComponent,
    AdminYorumComponent,
    AdminUsersComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class AdminModule { }
