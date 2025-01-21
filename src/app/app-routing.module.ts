import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
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
import { BookComponent } from './book/book.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'service', component: PricingComponent},
  { path: 'book', component: BookComponent},
  { path: 'career', component: CareersComponent},
  { path: 'florist', component: FloristComponent},
  { path: 'photography', component: PhotographyComponent},
  { path: 'dessert', component: DessertComponent},
  { path: 'cocktail', component: CocktailComponent},
  { path: 'jewelry', component: JewelryComponent},
  { path: 'host', component: HostComponent},
  { path: 'gowns', component: GownsComponent},
  { path: 'makeup', component: MakeupComponent},
  { path: 'lights', component: LightsComponent},
  { path: 'catering', component: CateringComponent},
  { path: 'souvenirs', component: SouvenirsComponent},
  { path: 'logistics', component: LogisticsComponent},
  { path: 'catering', component: CateringComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
