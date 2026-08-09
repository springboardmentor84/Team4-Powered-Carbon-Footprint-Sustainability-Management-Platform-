import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'eco-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  private fb = inject(FormBuilder);
  private data = inject(MockDataService);
  private auth = inject(AuthService);

  readonly user = this.data.getUser();
  readonly badges = this.data.getBadges();

  readonly isLoggedIn = this.auth.isLoggedIn;
  readonly loggedInName = this.auth.userName;

  // The logged-in name (from the login page) takes precedence over the
  // mock profile record once someone has actually logged in.
  readonly displayName = computed(() => this.loggedInName() ?? this.user().name);
  readonly avatarInitials = computed(() =>
    this.isLoggedIn() ? this.auth.initials(this.loggedInName()) : this.user().avatarInitials
  );

  readonly form = this.fb.group({
    name: [this.displayName()],
    email: [this.user().email],
    location: [this.user().location],
  });

  readonly saved = false;

  save() {
    // Placeholder for PUT /api/users/{id} against the User Service.
    alert('Profile changes saved.');
  }

  logout() {
    this.auth.logout();
  }
}
