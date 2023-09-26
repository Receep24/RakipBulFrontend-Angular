import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AdminComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
