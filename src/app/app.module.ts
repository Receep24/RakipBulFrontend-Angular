import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
<<<<<<< HEAD
import { SignComponent } from './sign/sign.component';
=======
import { CardComponent } from './card/card.component';
import { ContentComponent } from './content/content.component';
import { IlanComponent } from './ilan/ilan.component';
import { RouterModule } from '@angular/router';
>>>>>>> 3c997239c9ba14e0c85e0e4a8a78d47eb73d9adc

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
<<<<<<< HEAD
    SignComponent
=======
    CardComponent,
    ContentComponent,
    IlanComponent,

>>>>>>> 3c997239c9ba14e0c85e0e4a8a78d47eb73d9adc
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
