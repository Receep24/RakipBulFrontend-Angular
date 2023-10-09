import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { SignComponent } from './sign/sign.component';
import { CardComponent } from './card/card.component';
import { ContentComponent } from './content/content.component';
import { IlanComponent } from './ilan/ilan.component';
import { RouterModule } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { IlanlarComponent } from './ilanlar/ilanlar.component';
import { GirisComponent } from './giris/giris.component';
import { EtkinlikComponent } from './etkinlik/etkinlik.component';
import { ProfileComponent } from './profile/profile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CommentComponent } from './comment/comment.component';
import { JwtInterceptor } from 'src/core/services/interceptor/jwt.interceptor';
import { NotfoundComponent } from './notfound/notfound.component';

import { DashboardModule } from './dashboard/dashboard.module';

import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './layouts/layouts.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    SignComponent,
    CardComponent,
    ContentComponent,
    IlanComponent,
    AnasayfaComponent,
    IlanlarComponent,
    GirisComponent,
    EtkinlikComponent,
    ProfileComponent,
    CommentComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    DashboardModule,
    LayoutsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
