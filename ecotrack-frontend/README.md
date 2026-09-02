# EcoTrack — Angular Frontend

Angular 17 (standalone components) frontend scaffold for the EcoTrack carbon
footprint & sustainability platform, matching the architecture in the
project brief: Dashboard, Carbon Tracker, Goals, Challenges, Reports, Profile,
all wired behind a single working nav bar.

## Run it

```bash
npm install
npm start
```

Then open http://localhost:4200. All data is served from
`src/app/services/mock-data.service.ts` (in-memory Angular signals) so the UI
is fully interactive with no backend required yet.

## Project layout

```
src/
  app/
    app.component.ts/html/css     — shell: nav bar + <router-outlet>
    app.routes.ts                 — route table (lazy-loaded pages)
    app.config.ts                 — providers (router, animations)
    components/
      nav/                        — top nav bar, active-link state, mobile menu
      dashboard/                  — eco-score ring, weekly emissions, recs
      carbon-tracker/             — log-activity form + history table
      goals/                      — goal cards, progress, status
      challenges/                 — join/leave challenges + leaderboard
      reports/                    — generate/download reports
      profile/                    — account details + badges
    models/data.model.ts          — shared TypeScript interfaces
    services/mock-data.service.ts — mock data standing in for the backend
```

## Wiring up the real Spring Boot backend

Each method in `MockDataService` maps 1:1 to a microservice from the
architecture diagram. To go live:

1. Add `HttpClientModule` via `provideHttpClient()` in `app.config.ts`.
2. Create an `environment.ts` with `apiBase: 'https://your-api-gateway'`.
3. Replace each signal-returning method in `MockDataService` with an
   `HttpClient` call to the matching endpoint, e.g.:
   - `getCarbonEntries()` → `GET /api/carbon-entries` (Carbon Tracking Service)
   - `getGoals()` → `GET /api/goals` (Goal Management Service)
   - `getChallenges()` / `toggleChallenge()` → `GET/POST /api/challenges` (Challenge Service)
   - `getRecommendations()` → `GET /api/recommendations` (AI Recommendation Service)
   - `getReports()` → `GET /api/reports` (Report Service)
   - `getUser()` → `GET /api/users/me` (User Service, behind JWT/OAuth2)
4. Add an `AuthInterceptor` to attach the JWT from login/OAuth2 to every
   request, and a route guard on all pages except a future `/login`.

## Design system

- Palette: pine green (`--pine-700/800/900`), moss (`--moss-500/300`), warm
  sand neutrals, and an amber signal color for calls to action and impact.
- Type: **Fraunces** for headings (display serif), **Inter** for UI/body,
  **IBM Plex Mono** for scores and data (Eco Score, kg CO₂e, table numbers).
- Signature element: the tree-ring Eco Score indicator in the nav bar and
  dashboard hero, echoing the product's core "growth ring" metaphor.
