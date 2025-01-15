import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('navAnimation', [
      transition(':enter', [
        animate(
          '0.5s ease-in',
          keyframes([
            style({ transform: 'translateY(-20px)', opacity: 0, offset: 0 }),
            style({ transform: 'translateY(0)', opacity: 1, offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent {}
