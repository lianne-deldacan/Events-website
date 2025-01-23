import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';  // Ensure HttpClient is imported
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  // Inject HttpClient in the constructor
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const { firstName, lastName, email, password, phoneNumber, address } = this.signUpForm.value;

      // Call signup method and pass form values
      this.signup(firstName, lastName, email, password, phoneNumber, address).subscribe(
        (response) => {
          console.log('Signup successful:', response);

          // Storing the customer data in sessionStorage
        sessionStorage.setItem('token', JSON.stringify(response.token));
        sessionStorage.setItem('customer', JSON.stringify(response.customer));
        
           this.router.navigate(['/products-page']);


          // Handle the successful response (e.g., redirect to login page or show a success message)
        },
        (error) => {
          console.error('Signup failed:', error);
          // Handle error (e.g., show an error message)
        }
      );
    }
  }

  signup(firstName: string, lastName: string, email: string, password: string, phoneNumber: string, address: string): Observable<any> {
    return this.http.post('http://localhost:5000/api/auth/signup', {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      address
    });
  }
}
