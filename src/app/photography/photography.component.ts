import { Component } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent {

     pricingPlans = [
    {
      name: 'Bronze Package',
      price: 49,
      currency: 'PHP',
      duration: 'month',
      features: [
        'Basic floral arrangements (bouquets, centerpieces, and entrance decor)',
        'Minimalistic stage backdrop design',
        'Table runners and basic linens',
        'Guest table centerpieces for up to 5 tables',
        'Floral decorations for cake table',
        'Standard signage (welcome board)',
      ],
    },
    {
      name: 'Silver Package',
      price: 99,
      currency: 'PHP',
      duration: 'month',
      features: [
        'Elegant floral arrangements with seasonal flowers',
        'Customized stage backdrop with lighting accents',
        'Enhanced table settings with premium linens, napkins, and centerpieces for up to 10 tables',
        'Floral decorations for cake and gift tables',
        'Decorative aisle design',
        'Upgraded signage and photo booth floral accents',
      ],
    },
    {
      name: 'Gold Package',
      price: 199,
      currency: 'PHP',
      duration: 'month',
      features: [
        'Luxurious floral arrangements with exotic and seasonal blooms',
        'Fully customized stage design with premium props, drapery, and lighting effects',
        'Grand entrance decor with arches or floral walls',
        'Premium table settings for up to 15 tables with charger plates, candles, and centerpieces',
        'Aisle floral runners',
        'Photo area with a floral backdrop',
        'Floral enhancements for all signage and key areas',
      ],
    },
  ];

}
