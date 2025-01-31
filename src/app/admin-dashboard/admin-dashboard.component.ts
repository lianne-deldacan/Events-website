import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, AfterViewInit {
  usersCount: number = 0;
  bookingsCount: number = 0;
  blogsCount: number = 0;

  // Arrays to store historical data
  userCounts: number[] = [];
  bookingCounts: number[] = [];
  blogsCounts: number[] = [];
  timeLabels: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData(); // Initial fetch
    this.setupRealTimeUpdates(); // Setup real-time fetching
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initCharts(); // Initialize chart after the first fetch
    }, 1000);
  }

  // Fetch count data from the backend
  fetchData() {
    // Fetch user count
    this.http.get<{ count: number }>('http://localhost:5000/api/auth/count').subscribe(data => {
      this.usersCount = data.count;
      this.userCounts.push(this.usersCount); // Add to historical data
    });

    // Fetch booking count
    this.http.get<{ count: number }>('http://localhost:5000/api/bookings/count').subscribe(data => {
      this.bookingsCount = data.count;
      this.bookingCounts.push(this.bookingsCount); // Add to historical data
    });

    // Fetch blog count
    this.http.get<{ count: number }>('http://localhost:5000/api/blogs/count').subscribe(data => {
      this.blogsCount = data.count;
      this.blogsCounts.push(this.blogsCount); // Add to historical data
    });

    this.timeLabels.push(new Date().toLocaleTimeString()); // Track time of fetch
  }

  // Set up real-time updates for the data
  setupRealTimeUpdates() {
    setInterval(() => {
      this.fetchData(); // Fetch new data every 5 seconds
      this.updateCharts(); // Update charts with new data
    }, 5000); // Update every 5 seconds (you can adjust this interval)
  }

  // Initialize charts
  initCharts() {
    const userChartCanvas = document.getElementById('userChart') as HTMLCanvasElement;
    const bookingChartCanvas = document.getElementById('bookingChart') as HTMLCanvasElement;

    if (userChartCanvas) {
      new Chart(userChartCanvas, {
        type: 'line',
        data: {
          labels: this.timeLabels,
          datasets: [{
            label: 'Users Count',
            data: this.userCounts,
            borderColor: '#776B5D',
            backgroundColor: 'rgba(119, 107, 93, 0.2)',
            fill: true,
            tension: 0.4
          }]
        }
      });
    }

    if (bookingChartCanvas) {
      new Chart(bookingChartCanvas, {
        type: 'line',
        data: {
          labels: this.timeLabels,
          datasets: [{
            label: 'Bookings Count',
            data: this.bookingCounts,
            borderColor: '#B0A695',
            backgroundColor: 'rgba(176, 166, 149, 0.2)',
            fill: true,
            tension: 0.4
          }]
        }
      });
    }
  }

  // Update the charts with new data
  updateCharts() {
    const userChartCanvas = document.getElementById('userChart') as HTMLCanvasElement;
    const bookingChartCanvas = document.getElementById('bookingChart') as HTMLCanvasElement;

    if (userChartCanvas) {
      const userChart = new Chart(userChartCanvas, {
        type: 'line',
        data: {
          labels: this.timeLabels,
          datasets: [{
            label: 'Users Count',
            data: this.userCounts,
            borderColor: '#776B5D',
            backgroundColor: 'rgba(119, 107, 93, 0.2)',
            fill: true,
            tension: 0.4
          }]
        }
      });
      userChart.update(); // Update chart with new data
    }

    if (bookingChartCanvas) {
      const bookingChart = new Chart(bookingChartCanvas, {
        type: 'line',
        data: {
          labels: this.timeLabels,
          datasets: [{
            label: 'Bookings Count',
            data: this.bookingCounts,
            borderColor: '#B0A695',
            backgroundColor: 'rgba(176, 166, 149, 0.2)',
            fill: true,
            tension: 0.4
          }]
        }
      });
      bookingChart.update(); // Update chart with new data
    }
  }
}
