import { Component } from '@angular/core';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent {

    makeupArtists = [
    {
      name: 'Anna Bautista',
      imageUrl: '../../assets/makeup-1.jpg',
      background: 'Anna has over 6 years of experience as a professional makeup artist. She specializes in natural and bridal looks, ensuring her clients feel confident and beautiful for any occasion.'
    },
    {
      name: 'Camille Reyes',
      imageUrl: '../../assets/makeup-2.jpg',
      background: 'Camille is known for her artistic touch and creativity in makeup. With 7 years of experience, she excels in creating bold and glamorous looks for proms, debuts, and photoshoots.'
    }
  ];

    hairStylists = [
    {
      name: 'Aira Villanueva',
      background: 'Aira specializes in bridal and event hair styling. With 6 years of experience, she is known for her elegant and timeless styles.',
      imageUrl: 'assets/stylist-1.jpg',
    },
    {
      name: 'Liana Cruz',
      background: 'Liana focuses on creative and trendy hairstyles, perfect for proms and formal events. She has 8 years of expertise in the field.',
      imageUrl: 'assets/stylist-2.jpg',
    },
    {
      name: 'Marissa Ramos',
      background: 'Marissa excels in casual and everyday hairstyling. Her 7 years of experience have made her a go-to stylist for quick yet stunning looks.',
      imageUrl: 'assets/stylist-3.jpg',
    },
    {
      name: 'Juan Carlos Reyes',
      background: 'Juan specializes in men’s grooming and modern haircuts. With 5 years of experience, he delivers stylish and polished results.',
      imageUrl: 'assets/stylist-4.jpg',
    },
  ];
}