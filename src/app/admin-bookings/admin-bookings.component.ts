import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {
  bookings: any[] = []; 

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.getBookings(); // Fetch bookings on component initialization
  }

  // Fetch all bookings
 getBookings(): void {
  this.bookingService.getAllBookings().subscribe(
    (response) => {
      console.log('API response:', response); // Log the response
      this.bookings = Array.isArray(response) ? response : response.bookings; // Handle both cases
    },
    (error) => {
      console.error('Error fetching bookings:', error);
      alert('Failed to fetch bookings. Please try again.');
    }
  );
}


  // Edit a booking (placeholder for actual functionality)
  editBooking(id: string): void {
    alert(`Edit booking with ID: ${id}`);
    // Add your edit logic here
  }

  // Delete a booking
  deleteBooking(id: string): void {
    if (confirm('Are you sure you want to delete this booking?')) {
      this.bookingService.deleteBooking(id).subscribe(
        () => {
          alert('Booking deleted successfully');
          this.getBookings(); // Refresh bookings after deletion
        },
        (error) => {
          console.error('Error deleting booking:', error);
          alert('Failed to delete booking. Please try again.');
        }
      );
    }
  }
}
