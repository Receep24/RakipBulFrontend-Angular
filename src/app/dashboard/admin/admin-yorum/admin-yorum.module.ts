import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminYorumComponent } from './admin-yorum.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminYorumComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
       path: '', component: AdminYorumComponent 
      }]),
  ],
})
export class AdminYorumModule {}
