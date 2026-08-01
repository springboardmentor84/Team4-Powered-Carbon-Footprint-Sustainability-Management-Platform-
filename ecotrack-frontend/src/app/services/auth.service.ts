import { Injectable, computed, signal } from '@angular/core';

const STORAGE_KEY = 'ecotrack_auth_user';

/**
 * Stands in for the real authentication call the Angular app would make
 * against the User Service (e.g. POST /api/auth/login). Persists the
 * logged-in display name to localStorage so the session survives a
 * page refresh.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _userName = signal<string | null>(this.readStoredUser());

  readonly userName = this._userName.asReadonly();
  readonly isLoggedIn = computed(() => this._userName() !== null);

  private readStoredUser(): string | null {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  login(name: string): void {
    const trimmed = name.trim();
    if (!trimmed) return;
    this._userName.set(trimmed);
    try {
      localStorage.setItem(STORAGE_KEY, trimmed);
    } catch {
      /* localStorage unavailable — session just won't persist across reloads */
    }
  }

  logout(): void {
    this._userName.set(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* no-op */
    }
  }

  initials(name: string | null): string {
    if (!name) return '';
    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('');
  }
}
