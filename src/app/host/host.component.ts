import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent {
  hosts = [
    {
      name: 'Maria Santos',
      imageUrl: '../../assets/host-1.jpg',
      background: 'Maria is known for her vibrant personality and expertise in hosting games. Her quick wit and charm make her a crowd favorite at casual and corporate events alike. She is also detail-oriented and ensures seamless transitions throughout the program.'
    },
    {
      name: 'Lara Gonzales',
      imageUrl: '../../assets/host-2.jpg',
      background: 'Lara is into formal events with a touch of elegance. She brings sophistication and professionalism to weddings, debuts, and gala nights. Her time management skills and calm demeanor ensure every event runs smoothly.'
    },
    {
      name: 'Juan Dela Cruz',
      imageUrl: '../../assets/host-3.jpg',
      background: 'Juan is a highly entertaining host who loves engaging with the audience. His energy and humor make him perfect for casual and family events. He is creative and knows how to keep the crowd entertained and involved.'
    }
  ];
}