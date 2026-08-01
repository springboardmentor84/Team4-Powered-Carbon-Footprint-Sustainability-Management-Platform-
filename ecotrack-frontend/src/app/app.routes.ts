import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    title: 'Dashboard — EcoTrack',
  },
  {
    path: 'carbon-tracker',
    loadComponent: () =>
      import('./components/carbon-tracker/carbon-tracker.component').then(
        (m) => m.CarbonTrackerComponent
      ),
    title: 'Carbon Tracker — EcoTrack',
  },
  {
    path: 'goals',
    loadComponent: () =>
      import('./components/goals/goals.component').then((m) => m.GoalsComponent),
    title: 'Goals — EcoTrack',
  },
  {
    path: 'challenges',
    loadComponent: () =>
      import('./components/challenges/challenges.component').then(
        (m) => m.ChallengesComponent
      ),
    title: 'Challenges — EcoTrack',
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./components/reports/reports.component').then((m) => m.ReportsComponent),
    title: 'Reports — EcoTrack',
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./components/profile/profile.component').then((m) => m.ProfileComponent),
    title: 'Profile — EcoTrack',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then((m) => m.LoginComponent),
    title: 'Log in — EcoTrack',
  },
  { path: '**', redirectTo: 'dashboard' },
];
