import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'eco-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  submitted = signal(false);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  get f() {
    return this.form.controls;
  }

  submit() {

    this.submitted.set(true);

    if (this.form.invalid) {
      return;
    }

    const loginData = {
      email: this.form.value.email!,
      password: this.form.value.password!
    };

    this.authService.login(loginData).subscribe({

      next: (response: any) => {

        console.log('Login Success:', response);

        this.authService.saveUser(response);

        this.router.navigate(['/dashboard']);

      },

      error: (err) => {

        console.error('Login Failed:', err);

        alert('Invalid Email or Password');

      }

    });

  }

}