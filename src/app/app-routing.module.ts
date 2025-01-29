import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  // Public-facing routes
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: PricingComponent },
  { path: 'book', component: BookComponent },
  { path: 'career', component: CareersComponent },
  { path: 'florist', component: FloristComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'dessert', component: DessertComponent },
  { path: 'cocktail', component: CocktailComponent },
  { path: 'jewelry', component: JewelryComponent },
  { path: 'host', component: HostComponent },
  { path: 'gowns', component: GownsComponent },
  { path: 'makeup', component: MakeupComponent },
  { path: 'lights', component: LightsComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'souvenirs', component: SouvenirsComponent },
  { path: 'logistics', component: LogisticsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'blogs', component: BlogsComponent },

  // Admin layout routes
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'users', component: UsersComponent }, // Replace with actual UsersComponent
      { path: 'books', component: AdminBookingsComponent }, // Replace with actual BooksComponent
      { path: 'blogs', component: AdminBlogsComponent }, // Replace with actual BlogsComponent
      { path: 'categories', component: CategoryComponent }, // Replace with actual CategoriesComponent
    ]
  },

  // Wildcard route for 404
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
