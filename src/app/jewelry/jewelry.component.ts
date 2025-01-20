import { Component } from '@angular/core';

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.css']
})
export class JewelryComponent {

  rings = [

    { name: 'Baguette Ring', price: 1200, description: 'A sleek, rectangular-cut stone, perfect for minimalist designs.', imageUrl: 'assets/baguette.jpg' },
    { name: 'Oval Ring', price: 1700, description: 'An elegant oval-shaped gemstone, offering a classic and timeless design.', imageUrl: 'assets/oval.jpg' },
    { name: 'Radiant Ring', price: 2200, description: 'A stunning ring with a brilliant-cut stone, offering sparkle and vibrancy.', imageUrl: 'assets/radiant.jpg' },
    { name: 'Cushion Ring', price: 1800, description: 'A square or rectangular shape with rounded edges, exuding vintage charm.', imageUrl: 'assets/cushion.jpg' },
    { name: 'Asscher Ring', price: 2500, description: 'A square-cut with deep facets, offering a unique and striking look.', imageUrl: 'assets/asscher.jpg' },
    { name: 'Emerald Ring', price: 3000, description: 'A rectangular-cut stone with rich color, perfect for a sophisticated and refined style.', imageUrl: 'assets/emerald.jpg' },
    { name: 'Pear Ring', price: 2300, description: 'A teardrop-shaped gemstone, elegant and flattering on the finger.', imageUrl: 'assets/pear.jpg' },
    { name: 'Princess Ring', price: 2000, description: 'A square-cut gemstone offering a contemporary and brilliant design.', imageUrl: 'assets/princess.jpg' },
    { name: 'Round Ring', price: 1200, description: 'A classic round-cut stone, the most popular shape, known for its brilliance.', imageUrl: 'assets/round.jpg' },
    { name: 'Marquise Ring', price: 2100, description: 'An elongated oval shape with pointed ends, offering a bold and distinctive look.', imageUrl: 'assets/marquise.jpg' }
  ];
}
