import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminYorumComponent } from './admin-yorum.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminYorumComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
       path: '', component: AdminYorumComponent
      }]),
  ],
})
export class AdminYorumModule {}
