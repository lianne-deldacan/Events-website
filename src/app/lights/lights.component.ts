import { Component } from '@angular/core';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent {

    packages = [
    {
      name: 'Basic Package',
      description: 'A standard setup for small to medium events with essential sound and lighting features.',
      features: [
        '2x Speakers',
        '1x Microphone',
        'Basic Lighting Setup',
        'DJ Equipment',
        'Standard Cables'
      ]
    },
    {
      name: 'Premium Package',
      description: 'For larger events or special occasions, providing enhanced sound and lighting experience.',
      features: [
        '4x Speakers',
        '2x Wireless Microphones',
        'Advanced Lighting Setup (LED & Stage Lighting)',
        'Mixing Console',
        'DJ Equipment',
        'Special Effects (Fog, Lasers)',
        'High-End Audio Cables'
      ]
    }
  ];
}