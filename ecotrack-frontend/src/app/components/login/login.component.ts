import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'eco-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  readonly submitted = signal(false);

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted.set(true);
    if (this.form.invalid) return;

    // Placeholder for POST /api/auth/login against the User Service.
    this.auth.login(this.form.value.name!);

    const redirectTo = this.route.snapshot.queryParamMap.get('redirectTo') || '/profile';
    this.router.navigateByUrl(redirectTo);
  }
}
