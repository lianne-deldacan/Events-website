import { Component } from '@angular/core';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent {

  dessertPackages = [
    {
      name: 'Bronze Package',
      price: 400,
      categories: {
        donutWall: 'Up to 50 donuts',
        desserts: {
          count: 3,
          list: ['Chocolate Mousse', 'Fruit Salad', 'Panna Cotta'],
        },
        pastries: {
          count: 2,
          list: ['Mini Croissants', 'Eclairs'],
        },
        picaPica: {
          count: 3,
          list: ['Mini Sausage Rolls', 'Cheese Sticks', 'Quiche Bites'],
        },
      },
      inclusions: ['Setup and Styling', 'Plates and Utensils'],
    },
    {
      name: 'Silver Package',
      price: 600,
      categories: {
        donutWall: 'Up to 100 donuts',
        desserts: {
          count: 5,
          list: [
            'Chocolate Mousse',
            'Fruit Salad',
            'Panna Cotta',
            'Cheesecake Squares',
            'Mini Tiramisu Cups',
          ],
        },
        pastries: {
          count: 3,
          list: ['Mini Croissants', 'Eclairs', 'Macarons'],
        },
        picaPica: {
          count: 4,
          list: [
            'Mini Sausage Rolls',
            'Cheese Sticks',
            'Quiche Bites',
            'Mini Pizzas',
          ],
        },
      },
      inclusions: ['Setup and Styling', 'Plates and Utensils', 'Themed Decorations'],
    },
    {
      name: 'Gold Package',
      price: 1000,
      categories: {
        donutWall: 'Up to 200 donuts',
        desserts: {
          count: 7,
          list: [
            'Chocolate Mousse',
            'Fruit Salad',
            'Panna Cotta',
            'Cheesecake Squares',
            'Mini Tiramisu Cups',
            'Chocolate Lava Cake',
            'Seasonal Fruits',
          ],
        },
        pastries: {
          count: 5,
          list: ['Mini Croissants', 'Eclairs', 'Macarons', 'Tarts', 'Danish Pastries'],
        },
        picaPica: {
          count: 5,
          list: [
            'Mini Sausage Rolls',
            'Cheese Sticks',
            'Quiche Bites',
            'Mini Pizzas',
            'Spring Rolls',
          ],
        },
      },
      inclusions: [
        'Setup and Styling',
        'Plates and Utensils',
        'Themed Decorations',
        'Custom Dessert Labels',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
