import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {
  bookings: any[] = []; // Array to hold booking data
  loading: boolean = true; // For loading state
  errorMessage: string | null = null; // To display errors

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.getBookings(); // Fetch bookings when the component initializes
  }

  // Fetch all bookings from the backend
getBookings(): void {
  this.bookingService.getAllBookings().subscribe(
    (response) => {
      console.log('API response:', response);

      if (response && response.data && Array.isArray(response.data)) {
        this.bookings = response.data; // Extract bookings from response
        console.log('Bookings array:', this.bookings); // Log extracted bookings
      } else {
        this.bookings = [];
        console.error('Unexpected API response structure.');
      }
    },
    (error) => {
      console.error('Error fetching bookings:', error);
    }
  );
}


  // Edit booking logic (placeholder)
  editBooking(id: string): void {
    alert(`Edit booking with ID: ${id}`);
    // Implement edit functionality
  }

  // Delete booking by ID
  deleteBooking(id: string): void {
    if (confirm('Are you sure you want to delete this booking?')) {
      this.bookingService.deleteBooking(id).subscribe(
        () => {
          alert('Booking deleted successfully');
          this.getBookings(); // Refresh bookings
        },
        (error) => {
          console.error('Error deleting booking:', error);
          alert('Failed to delete booking. Please try again.');
        }
      );
    }
  }
}
