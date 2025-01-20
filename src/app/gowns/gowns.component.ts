import { Component } from '@angular/core';

@Component({
  selector: 'app-gowns',
  templateUrl: './gowns.component.html',
  styleUrls: ['./gowns.component.css']
})
export class GownsComponent {

   gownCategories = [
    {
      category: 'Wedding',
      gowns: [
        { name: 'Wedding Gown 1', price: 500, imageUrl: 'assets/wedding-1.jpg' },
        { name: 'Wedding Gown 2', price: 550, imageUrl: 'assets/wedding-2.jpg' },
        { name: 'Wedding Gown 3', price: 600, imageUrl: 'assets/wedding-3.jpg' },
        { name: 'Wedding Gown 4', price: 650, imageUrl: 'assets/wedding-4.jpg' },
        { name: 'Wedding Gown 5', price: 700, imageUrl: 'assets/wedding-5.jpg' },
        { name: 'Wedding Gown 6', price: 750, imageUrl: 'assets/wedding-6.jpg' },
        { name: 'Wedding Gown 7', price: 800, imageUrl: 'assets/wedding-7.jpg' },
        { name: 'Wedding Gown 8', price: 850, imageUrl: 'assets/wedding-8.jpg' },
        { name: 'Wedding Gown 9', price: 900, imageUrl: 'assets/wedding-9.jpg' },
        { name: 'Wedding Gown 10', price: 950, imageUrl: 'assets/wedding-10.jpg' }
      ]
    },
    {
      category: 'Debuts',
      gowns: [
        { name: 'Debut Gown 1', price: 400, imageUrl: 'assets/debut-1.jpg' },
        { name: 'Debut Gown 2', price: 450, imageUrl: 'assets/debut-2.jpg' },
        { name: 'Debut Gown 3', price: 500, imageUrl: 'assets/debut-3.jpg' },
        { name: 'Debut Gown 4', price: 550, imageUrl: 'assets/debut-4.jpg' },
        { name: 'Debut Gown 5', price: 600, imageUrl: 'assets/debut-5.jpg' },
        { name: 'Debut Gown 6', price: 650, imageUrl: 'assets/debut-6.jpg' },
        { name: 'Debut Gown 7', price: 700, imageUrl: 'assets/debut-7.jpg' },
        { name: 'Debut Gown 8', price: 750, imageUrl: 'assets/debut-8.jpg' },
        { name: 'Debut Gown 9', price: 800, imageUrl: 'assets/debut-9.jpg' },
        { name: 'Debut Gown 10', price: 850, imageUrl: 'assets/debut-10.jpg' }
      ]
    },
    {
      category: 'Prom',
      gowns: [
        { name: 'Prom Gown 1', price: 300, imageUrl: 'assets/prom-1.jpg' },
        { name: 'Prom Gown 2', price: 350, imageUrl: 'assets/prom-2.jpg' },
        { name: 'Prom Gown 3', price: 400, imageUrl: 'assets/prom-3.jpg' },
        { name: 'Prom Gown 4', price: 450, imageUrl: 'assets/prom-4.jpg' },
        { name: 'Prom Gown 5', price: 500, imageUrl: 'assets/prom-5.jpg' },
        { name: 'Prom Gown 6', price: 550, imageUrl: 'assets/prom-6.jpg' },
        { name: 'Prom Gown 7', price: 600, imageUrl: 'assets/prom-7.jpg' },
        { name: 'Prom Gown 8', price: 650, imageUrl: 'assets/prom-8.jpg' },
        { name: 'Prom Gown 9', price: 700, imageUrl: 'assets/prom-9.jpg' },
        { name: 'Prom Gown 10', price: 750, imageUrl: 'assets/prom-10.jpg' }
      ]
    }
  ];
}