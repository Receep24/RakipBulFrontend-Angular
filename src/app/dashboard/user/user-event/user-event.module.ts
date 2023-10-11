import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEventComponent } from './user-event.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserEventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',component:UserEventComponent}
    ])
  ]
})
export class UserEventModule { }
