import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
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
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './admin/main/main.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



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
    AdminComponent,
    MainComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
