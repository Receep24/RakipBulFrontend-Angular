import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IlanComponent } from './ilan/ilan.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { GirisComponent } from './giris/giris.component';
import { EtkinlikComponent } from './etkinlik/etkinlik.component';
import { ProfileComponent } from './profile/profile.component';
import { CommentComponent } from './comment/comment.component';

import { AuthGuard } from './auth-guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminYorumComponent } from './dashboard/admin/admin-yorum/admin-yorum.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { UserComponent } from './dashboard/user/user.component';

const routes: Routes = [
  { path: '', component: AnasayfaComponent },
  { path: 'ilan', component: IlanComponent },
  { path: 'anasayfa', component: AnasayfaComponent },
  { path: 'giris', component: GirisComponent },
  { path: 'etkinlik', component: EtkinlikComponent },
  { path: 'profildetail', component: ProfileComponent },
  { path: 'comment', component: CommentComponent },


//   path: 'admin': Bu rota, "/admin" URL'sine eşlenir. Yani, bu rota sadece "/admin" URL'sinde çalışır.

// component: AdminComponent: Bu rota "/admin" URL'sine yönlendirildiğinde gösterilecek olan ana yönetici (admin) bileşenini belirtir.

// canActivate: [AuthGuard]: Bu rota, AuthGuard adlı güvenlik denetimi tarafından korunur. canActivate ile belirtilen denetim, bu rotaya erişim izni verip vermemek konusunda karar verir. Yani, sadece yetkilendirilmiş kullanıcılar bu rotaya erişebilir.

// children: Bu özellik, "admin" rotasının alt rotalarını tanımlar. Burada dört farklı alt rota tanımlanmıştır: "users", "events", "adverts" ve "comments". Her biri farklı modülleri yükler ve ilgili alt bileşenleri görüntüler.

// loadChildren: Bu özellik, ilgili rotaya erişildiğinde yüklenmesi gereken modülü belirtir. Dinamik olarak modül yüklemesi yapar ve modül yüklendikten sonra ilgili alt bileşenler görüntülenir. Bu, uygulamanın başlangıcında tüm modülleri yüklemek yerine sadece ihtiyaç duyulduğunda yüklemeyi sağlar, bu da uygulamanın performansını artırabilir.
  {

    /*
    
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'all',
    loadChildren: () =>
      import('./all/all.module').then((m) => m.AllModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./teacher/teacher.module').then((m) => m.TeacherModule),
    canActivate: [AuthGuard]
  }
  */

  
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('src/app/dashboard/admin/admin-users/admin-users.module').then(
            (m) => m.AdminUsersModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import(
            'src/app/dashboard/admin/admin-etkinlik/admin-etkinlik.module'
          ).then((m) => m.AdminEtkinlikModule),
      },
      {
        path: 'adverts',
        loadChildren: () =>
          import('src/app/dashboard/admin/admin-ilan/admin-ilan.module').then(
            (m) => m.AdminIlanModule
          ),
      },
      {
        path: 'comments',
        loadChildren: () =>
          import('src/app/dashboard/admin/admin-yorum/admin-yorum.module').then(
            (m) => m.AdminYorumModule
          ),
      },
    ],
  },
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   canActivate: [AuthGuard],
  //   children: [{

  //   }],
  // },

  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
