import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IlanComponent } from './ilan/ilan.component';



const routes: Routes = [
  { path: "ilan", component: IlanComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
