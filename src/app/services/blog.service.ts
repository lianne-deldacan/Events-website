import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:5000/api/blogs';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  createBlog(blog: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, blog);
  }
updateBlog(id: string, updatedBlog: any) {
  return this.http.put(`${this.apiUrl}/${id}`, updatedBlog); // FIXED URL
}


  deleteBlog(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
