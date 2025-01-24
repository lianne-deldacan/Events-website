import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:5000/api/book'; // Update with your working API URL


  constructor(private http: HttpClient) { }

    // Create a new booking
  createBooking(bookingData: any): Observable<any> {
    return this.http.post(this.apiUrl, bookingData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Get all bookings
  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a single booking by ID
  getBookingById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Update a booking
  updateBooking(id: string, bookingData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, bookingData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Delete a booking
  deleteBooking(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
