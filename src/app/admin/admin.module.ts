import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    AdminComponent,
    MainComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
