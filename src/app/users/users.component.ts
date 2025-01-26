import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

    users: any[] = []; // Array to store user data

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers(); // Fetch users on component initialization
  }

  // Fetch all users
  getUsers(): void {
    this.userService.getAllUsers().subscribe(
      (response) => {
        console.log('API response:', response); // Log the response
        this.users = Array.isArray(response) ? response : response.users; // Handle array or nested data
      },
      (error) => {
        console.error('Error fetching users:', error);
        alert('Failed to fetch users. Please try again.');
      }
    );
  }

  // Edit a user (placeholder for actual functionality)
  editUser(id: string): void {
    alert(`Edit user with ID: ${id}`);
    // Add your edit logic here
  }

  // Delete a user
  deleteUser(id: string): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(
        () => {
          alert('User deleted successfully');
          this.getUsers(); // Refresh users after deletion
        },
        (error) => {
          console.error('Error deleting user:', error);
          alert('Failed to delete user. Please try again.');
        }
      );
    }
  }
}
