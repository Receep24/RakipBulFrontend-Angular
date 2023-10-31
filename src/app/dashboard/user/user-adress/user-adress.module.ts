import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdressComponent } from './user-adress.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserAdressComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: UserAdressComponent }]),
  ],
})
export class UserAdressModule {}
