import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'events-website';

    hideHeader = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      this.hideHeader = currentUrl.startsWith('/admin') || currentUrl === '/login' || currentUrl === '/signup';
    });
  }
}

