import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:8087/SpringMVC/reservation';

  constructor(private http: HttpClient) { }

  // Get all reservations
  getAllReservations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieve-all-reservations`);
  }

  // Get a reservation by ID
  getReservationById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/retrieve-reservation/${id}`);
  }

  // Add a new reservation
  addReservation(reservation: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add-reservation`, reservation, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Update an existing reservation
  updateReservation(reservation: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/modify-reservation`, reservation, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Delete a reservation by ID
  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-reservation/${id}`);
  }
}
