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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
