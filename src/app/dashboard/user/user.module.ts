import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserAdvertsModule } from './user-adverts/user-adverts.module';
import { UserEventModule } from './user-event/user-event.module';

@NgModule({
  declarations: [
    UserComponent,    
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    LayoutsModule,
    UserProfileModule,
    UserAdvertsModule,
    UserEventModule

  ],
  exports: [
    UserComponent
  ],
})
export class UserModule { }
