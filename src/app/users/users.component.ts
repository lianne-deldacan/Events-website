import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = []; // Array to store user data
  selectedUser: any = null; // To store the user being edited

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers(); // Fetch users on component initialization
  }

  // Fetch all users
  getUsers(): void {
  this.userService.getAllUsers().subscribe(
    (response) => {
      console.log('Fetched users:', response);
      this.users = response; // Make sure the data is set properly
    },
    (error) => {
      console.error('Error fetching users:', error);
      alert('Failed to fetch users. Please try again.');
    }
  );
}



  // Edit a user (populate a form with user data)
  editUser(id: string): void {
  console.log(`Selected user ID: ${id}`);
  console.log('Users:', this.users);

  // Convert both to strings to ensure proper comparison
  this.selectedUser = this.users.find(user => String(user._id) === String(id));
  
  if (!this.selectedUser) {
    console.error('User not found!');
    alert('User not found!');
    return;
  }

  console.log(`Editing user: ${JSON.stringify(this.selectedUser)}`);
}



  // Update a user
  updateUser(): void {
    if (this.selectedUser) {
      this.userService.updateUser(this.selectedUser._id, this.selectedUser).subscribe(
        (response) => {
          alert('User updated successfully');
          this.getUsers(); // Refresh the users list
          this.selectedUser = null; // Close the modal
        },
        (error) => {
          console.error('Error updating user:', error);
          alert('Failed to update user. Please try again.');
        }
      );
    }
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
