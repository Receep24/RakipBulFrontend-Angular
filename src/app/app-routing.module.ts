import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IlanComponent } from './ilan/ilan.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { GirisComponent } from './giris/giris.component';
import { SignComponent } from './sign/sign.component';




const routes: Routes = [
  { path: "", component:AnasayfaComponent},
  { path: "ilanlar", component: IlanComponent},
  { path: "anasayfa", component: AnasayfaComponent},
  { path: "giris", component: GirisComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
