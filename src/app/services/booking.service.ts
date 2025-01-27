import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = 'http://localhost:5000/api/bookings'; // Adjust this URL if necessary

  constructor(private http: HttpClient) {}

  // Fetch all bookings from the backend
  getAllBookings(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Delete booking by ID
  deleteBooking(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
