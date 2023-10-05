import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IlanComponent } from './ilan/ilan.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { GirisComponent } from './giris/giris.component';
import { EtkinlikComponent } from './etkinlik/etkinlik.component';
import { ProfileComponent } from './profile/profile.component';
import { CommentComponent } from './comment/comment.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './admin/header/header.component';
import { SearchbarComponent } from './admin/searchbar/searchbar.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AdminIlanComponent } from './admin/admin-ilan/admin-ilan.component';
import { AdminEtkinlikComponent } from './admin/admin-etkinlik/admin-etkinlik.component';

const routes: Routes = [

  { path: "", component:AnasayfaComponent},
  { path: "ilan", component: IlanComponent},
  { path: "anasayfa", component: AnasayfaComponent},
  { path: "giris", component: GirisComponent},
  {path: "etkinlik",component: EtkinlikComponent},
  {path:"profildetail",component:ProfileComponent},
  {path:"comment",component:CommentComponent},
  {path:"admin",component:AdminComponent},
  {path:"admin/header",component:HeaderComponent},
  {path:"admin/searchbar",component:SearchbarComponent},
  {path:"admin/sidebar",component:SidebarComponent},
  {path:"admin/admin-ilan",component:AdminIlanComponent},
  {path:"admin/admin-etkinlik",component:AdminEtkinlikComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
