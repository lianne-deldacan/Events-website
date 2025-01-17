import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  statistics = [
    { label: 'Clients', value: 200, currentValue: 0},
    { label: 'Employees', value: 50, currentValue: 0},
    { label: 'Branches', value: 6, currentValue: 0},
    { label: 'Hosted Events', value: 180, currentValue: 0},
    { label: 'Catered Events', value: 350, currentValue: 0},
    { label: 'Managed Events', value: 560, currentValue: 0},
  ];

    services = [
    { id: 1, name: 'Nathan Designs & Florist', image: 'assets/service-1.png', description: 'Creative floral designs for every occasion from ceilings to floor.' },
    { id: 2, name: 'Portrait Photography Videography', image: 'assets/service-2.png', description: 'Capturing memories in stunning photos and videos in high quality.' },
    { id: 3, name: 'Bake O\'Clock Cake & Dessert', image: 'assets/service-3.png', description: 'Delicious cakes and desserts for any event as pica-pica.' },
    { id: 4, name: 'Thirsty cocktail and wine', image: 'assets/service-4.png', description: 'Refreshing cocktails and premium wines for guests.' },
    { id: 5, name: 'Rebecca Jewelry', image: 'assets/service-5.png', description: 'Elegant and timeless jewelry designs rich from silver to diamonds.' },
    { id: 6, name: 'Host By Nics', image: 'assets/service-6.png', description: 'Professional event hosting services for a casual and formal parties.' },
    { id: 7, name: 'Fiona Gowns & Suits', image: 'assets/service-7.png', description: 'Exquisite gowns and suits for special occasions perfect suit for any sizes.' },
    { id: 8, name: 'Diana Lopez Hair and Makeup', image: 'assets/service-8.png', description: 'Beauty services for your "Aphrodite" look in affordability.' },
    { id: 9, name: 'Tune On Light and Sound Operators', image: 'assets/service-9.png', description: 'Professional sound and lighting setups for premium beats and snaps.' },
    { id: 10, name: 'Timeless Dine Catering Services', image: 'assets/service-10.png', description: 'Exquisite catering services for events with different cuisine.' },
    { id: 11, name: 'Type Souvenirs & Invitations', image: 'assets/service-11.png', description: 'Unique remarkable souvenirs and personalized invitations.' },
    { id: 12, name: 'Leonard Logistics and Transportation', image: 'assets/service-12.png', description: 'Reliable and faster logistics and transportation services.' },
  ];

  faqs = [
    {
      question: 'How do I book an event with Timeless Events PH?',
      answer: 'You can easily book an event by visiting our website and filling out the booking form. Our team will get in touch with you to discuss details and availability.',
    },
    {
      question: 'Do you provide custom event themes?',
      answer: 'Yes, we specialize in creating personalized and custom event themes to suit the needs and preferences of our clients. We work with you to ensure the theme reflects your vision.',
    },
    {
      question: 'Is there a minimum or maximum number of guests for an event?',
      answer: 'We cater to both small intimate gatherings and large events. There are 50 minimum to 500 maximum guests that we accept; we tailor each event to your requirements.',
    },
    {
      question: 'How far in advance should I book an event?',
      answer: 'It’s recommended to book at least 3-6 months in advance to ensure availability. We are not accepting last-minute booking for events',
    },
    {
      question: 'Do you provide seasonal promos?',
      answer: 'Yes, we offer promos to achieve cost-saving dream event of our clients',
    },
  ];

   gallery = Array.from({ length: 18 }, (_, index) => `assets/gallery-${index + 1}.png`);

  constructor() { }
  
  ngOnInit(): void {
    this.animateCount();
  }

animateCount(): void {
  this.statistics.forEach((stat) => {
    const step = Math.max(1, Math.floor(stat.value / 100)); // Ensure step is at least 1
    const interval = setInterval(() => {
      if (stat.currentValue < stat.value) {
        stat.currentValue = Math.min(stat.currentValue + step, stat.value);
        stat.currentValue = Math.floor(stat.currentValue); // Ensure no decimals
      } else {
        stat.currentValue = stat.value; // Final value correction
        clearInterval(interval);
      }
    }, 30); // Adjust interval timing for animation speed
  });
}


}
