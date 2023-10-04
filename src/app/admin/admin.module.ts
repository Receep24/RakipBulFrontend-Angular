import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
