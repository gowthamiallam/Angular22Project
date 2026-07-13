import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-reactive',
  imports: [ReactiveFormsModule, NgClass, CommonModule],
  templateUrl: './login-reactive.html',
  styleUrl: './login-reactive.css',
})
export class LoginReactive {
  loginForm: FormGroup;
  isSubmitted = false;

  // Property to hold custom authentication error messages
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize form controls with validation rules
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getter for easy access to form fields in HTML template
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.isSubmitted = true;

    // If form fields are invalid, stop execution
    if (this.loginForm.invalid) {
      return;
    }

    console.log('Authenticated successfully!', this.loginForm.value);


    // Extract values from the form
    const { email, password } = this.loginForm.value;

    // 2. Mock Authentication Check (Replace with your desired test credentials)
    const mockEmail = 'admin@example.com';
    const mockPassword = 'password123';

    if (email === mockEmail && password === mockPassword) {
      console.log('Authentication Successful! Redirecting...');

      // 3. Navigate only if email and password match perfectly
      this.router.navigate(['/dashboard']);
    } else {
      // 4. If credentials don't match, block navigation and display an alert
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }

}
