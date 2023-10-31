import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCommentComponent } from './user-comment.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'',component:UserCommentComponent}
    ])
  ]
})
export class UserCommentModule { }
