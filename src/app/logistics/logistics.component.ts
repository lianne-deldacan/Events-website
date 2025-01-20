import { Component } from '@angular/core';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent {

    logisticsPackages = [
    {
      name: 'Basic Package (Logistics & Transportation)',
      description: 'Basic transportation services for small events, including van rental and basic logistical support.',
      features: [
        '1x Van Rental (Up to 15 Seats)',
        'Driver & Assistant',
        'Basic Setup and Delivery',
        'Route Planning & Timely Delivery'
      ]
    },
    {
      name: 'Premium Package (Logistics & Transportation)',
      description: 'Complete logistics service for large events, including multiple vehicles and professional support.',
      features: [
        '2x Vans (Up to 30 Seats)',
        'Driver, Assistant, and Event Manager',
        'Complete Setup, Delivery, and Breakdown',
        'Route Planning with Real-Time Tracking',
        'Timely Delivery & Early Setup',
        'Emergency Support'
      ]
    }
  ];
}