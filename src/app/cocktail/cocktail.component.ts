import { Component } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent {
  cocktailPackages = [
    {
      name: 'Bronze Package',
      price: 400,
      categories: {
        cocktails: {
          count: 8,
          list: [
            'Mojito',
            'Martini',
            'Pina Colada',
            'Tequila Sunrise',
            'Margarita',
            'Cosmopolitan',
            'Old Fashioned',
            'Whiskey Sour',
          ],
        },
        wines: {
          count: 2,
          list: ['Red Wine', 'White Wine'],
        },
        addOns: ['Fruit Garnishes', 'Ice Cubes'],
      },
    },
    {
      name: 'Silver Package',
      price: 600,
      categories: {
        cocktails: {
          count: 12,
          list: [
            'Mojito',
            'Martini',
            'Pina Colada',
            'Tequila Sunrise',
            'Margarita',
            'Cosmopolitan',
            'Old Fashioned',
            'Whiskey Sour',
            'Bloody Mary',
            'Mai Tai',
            'Daiquiri',
            'Manhattan',
          ],
        },
        wines: {
          count: 4,
          list: ['Red Wine', 'White Wine', 'Rose Wine', 'Sparkling Wine'],
        },
        addOns: ['Fruit Garnishes', 'Ice Cubes', 'Custom Glassware'],
      },
    },
    {
      name: 'Gold Package',
      price: 1000,
      categories: {
        cocktails: {
          count: 16,
          list: [
            'Mojito',
            'Martini',
            'Pina Colada',
            'Tequila Sunrise',
            'Margarita',
            'Cosmopolitan',
            'Old Fashioned',
            'Whiskey Sour',
            'Bloody Mary',
            'Mai Tai',
            'Daiquiri',
            'Manhattan',
            'Negroni',
            'Singapore Sling',
            'Tom Collins',
            'Long Island Iced Tea',
          ],
        },
        wines: {
          count: 6,
          list: [
            'Red Wine',
            'White Wine',
            'Rose Wine',
            'Sparkling Wine',
            'Dessert Wine',
            'Port Wine',
          ],
        },
        addOns: [
          'Fruit Garnishes',
          'Ice Cubes',
          'Custom Glassware',
          'Themed Cocktail Presentation',
        ],
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}