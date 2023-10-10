import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    LayoutsModule
  ],
  exports: [
    UserComponent
  ],
})
export class UserModule { }
