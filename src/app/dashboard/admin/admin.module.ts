import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminEtkinlikModule } from './admin-etkinlik/admin-etkinlik.module';
import { AdminUsersModule } from './admin-users/admin-users.module';
import { AdminIlanModule } from './admin-ilan/admin-ilan.module';
import { AdminYorumModule } from './admin-yorum/admin-yorum.module';
import { FormsModule } from '@angular/forms';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AdminEtkinlikModule,
    AdminIlanModule,
    AdminUsersModule,
    AdminYorumModule,

    FormsModule,

    LayoutsModule,


  ],
  exports:[
    AdminComponent,

  ]
})
export class AdminModule {}



// const routes : Routes = [
//   {
//     path: 'manage-users',
//     component: ManageUsersComponent
//   },

// ];
