import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { CareersComponent } from './careers/careers.component';
import { BookComponent } from './book/book.component';
import { FloristComponent } from './florist/florist.component';
import { PhotographyComponent } from './photography/photography.component';
import { DessertComponent } from './dessert/dessert.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { HostComponent } from './host/host.component';
import { GownsComponent } from './gowns/gowns.component';
import { MakeupComponent } from './makeup/makeup.component';
import { LightsComponent } from './lights/lights.component';
import { CateringComponent } from './catering/catering.component';
import { SouvenirsComponent } from './souvenirs/souvenirs.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PricingComponent,
    CareersComponent,
    BookComponent,
    FloristComponent,
    PhotographyComponent,
    DessertComponent,
    CocktailComponent,
    JewelryComponent,
    HostComponent,
    GownsComponent,
    MakeupComponent,
    LightsComponent,
    CateringComponent,
    SouvenirsComponent,
    LogisticsComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
