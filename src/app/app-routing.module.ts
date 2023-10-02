import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IlanComponent } from './ilan/ilan.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { GirisComponent } from './giris/giris.component';
import { EtkinlikComponent } from './etkinlik/etkinlik.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './admin/main/main.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [

  { path: "", component:AnasayfaComponent},
  { path: "ilanlar", component: IlanComponent},
  { path: "anasayfa", component: AnasayfaComponent},
  { path: "giris", component: GirisComponent},
  {path: "etkinlik",component: EtkinlikComponent},
  {path:"profildetail",component:ProfileComponent},
  {path:"admin/main",component:MainComponent},
  {path:"comment",component:CommentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
