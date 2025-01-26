import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const { firstName, lastName, email, password, phoneNumber, address } =
        this.signUpForm.value;

      this.authService
        .signup(firstName, lastName, email, password, phoneNumber, address)
        .subscribe({
          next: (response: any) => {
            alert('Signup successful!');
            
            // Save token and user details in session storage
            sessionStorage.setItem('token', response.token);
            sessionStorage.setItem('user', JSON.stringify(response.user));
            
            // Redirect to the products page or home
            this.router.navigate(['/products-page']);
          },
          error: (error) => {
            console.error('Signup failed:', error);
            this.errorMessage = 'Signup failed. Please try again.';
          },
        });
    }
  }
}
