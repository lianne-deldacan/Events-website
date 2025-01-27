import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {
  bookings: any[] = []; // Array to hold booking data

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.getBookings(); // Fetch bookings when the component initializes
  }

  // Fetch all bookings from the backend
  getBookings(): void {
    this.bookingService.getAllBookings().subscribe(
      (response) => {
        console.log('API response:', response); // Log the API response for debugging
        // Check if response contains a bookings property or is an array
        if (Array.isArray(response)) {
          this.bookings = response; // If the response is directly an array of bookings
        } else if (response.bookings && Array.isArray(response.bookings)) {
          this.bookings = response.bookings; // Handle nested bookings property
        } else {
          this.bookings = []; // Fallback in case of unexpected structure
        }
      },
      (error) => {
        console.error('Error fetching bookings:', error); // Log errors
        alert('Failed to fetch bookings. Please try again later.');
      }
    );
  }

  // Edit booking logic (placeholder)
  editBooking(id: string): void {
    alert(`Edit booking with ID: ${id}`);
    // Implement your edit functionality here
  }

  // Delete booking by ID
  deleteBooking(id: string): void {
    if (confirm('Are you sure you want to delete this booking?')) {
      this.bookingService.deleteBooking(id).subscribe(
        () => {
          alert('Booking deleted successfully');
          this.getBookings(); // Refresh bookings after deletion
        },
        (error) => {
          console.error('Error deleting booking:', error); // Log errors
          alert('Failed to delete booking. Please try again.');
        }
      );
    }
  }
}
