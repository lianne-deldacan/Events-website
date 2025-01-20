import { Component } from '@angular/core';

@Component({
  selector: 'app-souvenirs',
  templateUrl: './souvenirs.component.html',
  styleUrls: ['./souvenirs.component.css']
})
export class SouvenirsComponent {

    souvenirs = [
    {
      name: 'Picture Frame',
      description: 'A personalized photo frame to capture memories of the event.',
      imageUrl: 'assets/picture-frame.jpg'
    },
    {
      name: 'Mugs',
      description: 'Customized mugs with event themes or personal names.',
      imageUrl: 'assets/mug.jpg' 
    },
    {
      name: 'Keychains',
      description: 'Small, practical, and customizable keychains as a token of appreciation.',
      imageUrl: 'assets/keychain.jpg' 
    }
  ];
}