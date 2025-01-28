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
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';

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
    SignUpComponent,
    AdminLayoutComponent,
    AdminDashboardComponent,
    SidebarComponent,
    AdminBookingsComponent,
    UsersComponent,
    CategoryComponent,
    BlogsComponent,
    AdminBlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    
  ],
  exports: [RouterModule, SidebarComponent],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
