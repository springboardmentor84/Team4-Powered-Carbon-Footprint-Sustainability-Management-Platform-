import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'eco-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  submitted = signal(false);

  form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  get f() {
    return this.form.controls;
  }

  submit() {

    this.submitted.set(true);

    if (this.form.invalid) {
      return;
    }

    const registerData = {
      fullName: this.form.value.fullName!,
      email: this.form.value.email!,
      password: this.form.value.password!
    };

    this.authService.register(registerData).subscribe({

      next: () => {
        alert("Registration Successful!");
        this.router.navigate(['/login']);
      },

      error: (err) => {
        console.error(err);
        alert("Registration Failed");
      }

    });

  }

}