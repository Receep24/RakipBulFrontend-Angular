import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IlanComponent } from './ilan/ilan.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { GirisComponent } from './giris/giris.component';

import { EtkinlikComponent } from './etkinlik/etkinlik.component';

import { SignComponent } from './sign/sign.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './admin/main/main.component';





const routes: Routes = [
  { path: "", component:AnasayfaComponent},
  { path: "ilanlar", component: IlanComponent},
  { path: "anasayfa", component: AnasayfaComponent},
  { path: "giris", component: GirisComponent},

  {path: "etkinlik",component: EtkinlikComponent},
  {path:"profildetail",component:ProfileComponent},
  {path:"admin/main",component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
