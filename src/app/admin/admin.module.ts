import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HeaderComponent } from './header/header.component';
import { AdminIlanComponent } from './admin-ilan/admin-ilan.component';
import { AdminEtkinlikComponent } from './admin-etkinlik/admin-etkinlik.component';




@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    SearchbarComponent,
    HeaderComponent,
    AdminIlanComponent,
    AdminEtkinlikComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class AdminModule { }
