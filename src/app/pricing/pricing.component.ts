import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {

    packages = [
    {
      name: 'Bronze Package',
      price: 500,
      categories: {
        pork: ['Tonkatsu', 'Pork BBQ'],
        chicken: ['Grilled Chicken', 'Chicken Teriyaki'],
        beef: ['Beef Stew', 'Beef Bulgogi'],
        seafood: ['Shrimp Tempura', 'Fried Fish'],
        veggies: ['Stir-fried Vegetables', 'Vegetable Tempura'],
        sideDish: ['Mashed Potatoes', 'Garlic Bread'],
        dessert: ['Fruit Salad', 'French Pastries'],
        drinks: ['Iced Tea', 'Lemonade'],
      },
    },
    {
      name: 'Silver Package',
      price: 800,
      categories: {
        pork: ['Tonkatsu', 'Pork BBQ', 'Pork Sisig'],
        chicken: ['Grilled Chicken', 'Chicken Teriyaki', 'Chicken Bulgogi'],
        beef: ['Beef Stew', 'Beef Bulgogi', 'Beef Stroganoff'],
        seafood: ['Shrimp Tempura', 'Fried Fish', 'Grilled Salmon'],
        veggies: ['Stir-fried Vegetables', 'Vegetable Tempura', 'Roasted Vegetables'],
        sideDish: ['Mashed Potatoes', 'Garlic Bread', 'French Fries'],
        dessert: ['Fruit Salad', 'French Pastries', 'Crème Brûlée'],
        drinks: ['Iced Tea', 'Lemonade', 'Fresh Juice'],
      },
    },
    {
      name: 'Gold Package',
      price: 1200,
      categories: {
        pork: ['Tonkatsu', 'Pork BBQ', 'Pork Sisig', 'Grilled Pork Belly'],
        chicken: [
          'Grilled Chicken',
          'Chicken Teriyaki',
          'Chicken Bulgogi',
          'Chicken Yakitori',
        ],
        beef: [
          'Beef Stew',
          'Beef Bulgogi',
          'Beef Stroganoff',
          'Roast Beef with Gravy',
        ],
        seafood: [
          'Shrimp Tempura',
          'Fried Fish',
          'Grilled Salmon',
          'Lobster Thermidor',
        ],
        veggies: [
          'Stir-fried Vegetables',
          'Vegetable Tempura',
          'Roasted Vegetables',
          'Creamed Spinach',
        ],
        sideDish: [
          'Mashed Potatoes',
          'Garlic Bread',
          'French Fries',
          'Stuffed Mushrooms',
        ],
        dessert: [
          'Fruit Salad',
          'French Pastries',
          'Crème Brûlée',
          'Tiramisu',
        ],
        drinks: [
          'Iced Tea',
          'Lemonade',
          'Fresh Juice',
          'Mocktail Beverages',
        ],
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}