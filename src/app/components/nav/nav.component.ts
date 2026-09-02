import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { AuthService } from '../../services/auth.service';

interface NavLink {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'eco-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {

  private data = inject(MockDataService);
  private auth = inject(AuthService);

  readonly links: NavLink[] = [
    { path: '/dashboard', label: 'Dashboard', icon: 'grid' },
    { path: '/carbon-tracker', label: 'Carbon Tracker', icon: 'leaf' },
    { path: '/goals', label: 'Goals', icon: 'target' },
    { path: '/challenges', label: 'Challenges', icon: 'trophy' },
    { path: '/reports', label: 'Reports', icon: 'doc' },
    { path: '/profile', label: 'Profile', icon: 'user' },
  ];

  readonly menuOpen = signal(false);

  readonly user = this.data.getUser();

  // Current Eco Score
  readonly currentEcoScore = this.data.currentEcoScore;

  readonly isLoggedIn = this.auth.isLoggedIn;
  readonly loggedInName = this.auth.userName;

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  initials(name: string | null): string {
    return this.auth.initials(name);
  }

  logout() {
    this.auth.logout();
    this.closeMenu();
  }
}