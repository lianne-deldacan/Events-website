import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = 'http://localhost:5000/api/categories'; // Remain it 5000

  constructor(private http: HttpClient) {}

    // Fetch categories
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Create a new category
  createCategory(category: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, category);
  }

// Update an existing category
updateCategory(id: string, category: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, category);
}

// Delete a category
deleteCategory(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}

}