import { Injectable, computed, signal } from '@angular/core';
import {
  Badge,
  CarbonEntry,
  Challenge,
  LeaderboardEntry,
  Recommendation,
  Report,
  SustainabilityGoal,
  UserProfile,
} from '../models/data.model';

/**
 * Gamification: 4-level XP progression ladder. Levels reuse the same
 * tier names already used across the app's badges/leaderboard copy
 * (Green Beginner -> Eco Warrior -> Climate Hero -> Planet Protector)
 * so the new XP system reads as an extension of the existing product,
 * not a parallel one.
 */
export interface XpLevel {
  level: number;
  name: string;
  minXp: number;
}

export const XP_LEVELS: XpLevel[] = [
  { level: 1, name: 'Green Beginner', minXp: 0 },
  { level: 2, name: 'Eco Warrior', minXp: 250 },
  { level: 3, name: 'Climate Hero', minXp: 600 },
  { level: 4, name: 'Planet Protector', minXp: 1000 },
];

/**
 * Stands in for calls the Angular API Gateway layer would make to the
 * Spring Boot microservices (User, Carbon Tracking, Goal Management,
 * AI Recommendation, Challenge, Report, Gamification, Analytics).
 * Swap the bodies of these methods for HttpClient calls against the
 * real endpoints once the backend is live, e.g.:
 *   this.http.get<CarbonEntry[]>(`${environment.apiBase}/carbon-entries`)
 */
@Injectable({ providedIn: 'root' })
export class MockDataService {
  readonly currentEcoScore = signal<number>(742);
  private readonly user = signal<UserProfile>({
    id: 'u-1024',
    name: 'Asha Mehta',
    email: 'asha.mehta@ecotrack.io',
    role: 'User',
    location: 'Pune, India',
    ecoScore: 742,
    level: 'Eco Warrior',
    joinedOn: '2025-02-11',
    interests: ['Renewable Energy', 'Green Transportation', 'Waste Reduction', 'Water Conservation'],
    avatarInitials: 'AM',
  });
  private readonly carbonEntries = signal<CarbonEntry[]>([
    { id: 'c1', date: '2026-07-26', category: 'Transportation', activity: 'Car commute — 18 km', kgCo2e: 3.8 },
    { id: 'c2', date: '2026-07-26', category: 'Electricity Usage', activity: 'Home usage — 6.2 kWh', kgCo2e: 2.9 },
    { id: 'c3', date: '2026-07-27', category: 'Food Consumption', activity: 'Mixed diet — 3 meals', kgCo2e: 4.1 },
    { id: 'c4', date: '2026-07-28', category: 'Waste Generation', activity: 'Household waste — 1.2 kg', kgCo2e: 0.6 },
    { id: 'c5', date: '2026-07-29', category: 'Travel Activities', activity: 'Domestic flight (short haul)', kgCo2e: 92.0 },
    { id: 'c6', date: '2026-07-30', category: 'Water Usage', activity: 'Household — 180 L', kgCo2e: 0.3 },
    { id: 'c7', date: '2026-07-31', category: 'Online Shopping', activity: '2 parcels delivered', kgCo2e: 1.4 },
    { id: 'c8', date: '2026-08-01', category: 'Transportation', activity: 'Bus commute — 12 km', kgCo2e: 0.9 },
  ]);

  private readonly goals = signal<SustainabilityGoal[]>([
    { id: 'g1', title: 'Cut household electricity 15%', type: 'Reduce Electricity Consumption', target: 15, current: 9, unit: '%', deadline: '2026-09-30', status: 'On Track' },
    { id: 'g2', title: 'Commute by public transport 4x/week', type: 'Use Public Transport', target: 4, current: 2, unit: 'trips/wk', deadline: '2026-08-31', status: 'At Risk' },
    { id: 'g3', title: 'Zero single-use plastic', type: 'Reduce Plastic Usage', target: 30, current: 30, unit: 'days', deadline: '2026-07-31', status: 'Achieved' },
    { id: 'g4', title: 'Plant 10 trees this year', type: 'Plant Trees', target: 10, current: 3, unit: 'trees', deadline: '2026-12-31', status: 'On Track' },
    { id: 'g5', title: 'Recycle 80% of household waste', type: 'Increase Recycling', target: 80, current: 41, unit: '%', deadline: '2026-10-15', status: 'At Risk' },
  ]);

  private readonly challenges = signal<Challenge[]>([
    { id: 'ch1', name: 'Plastic-Free Week', category: 'Waste Reduction', description: 'Avoid all single-use plastic for seven consecutive days.', participants: 4213, daysLeft: 4, progress: 60, joined: true, reward: '150 pts + Green Beginner badge', xp: 60, difficulty: 'Easy', badgeId: 'b1' },
    { id: 'ch2', name: 'Cycle To Work', category: 'Green Transportation', description: 'Log at least 3 cycling commutes this month.', participants: 2876, daysLeft: 11, progress: 33, joined: true, reward: '200 pts', xp: 80, difficulty: 'Easy' },
    { id: 'ch3', name: 'Energy Saving Challenge', category: 'Renewable Energy', description: 'Reduce electricity draw by 10% versus last month.', participants: 6021, daysLeft: 18, progress: 0, joined: false, reward: '250 pts + Eco Warrior badge', xp: 120, difficulty: 'Medium', badgeId: 'b2' },
    { id: 'ch4', name: 'Tree Plantation Drive', category: 'Climate Action', description: 'Plant and register at least one tree with photo proof.', participants: 1532, daysLeft: 25, progress: 0, joined: false, reward: '300 pts', xp: 150, difficulty: 'Medium' },
    { id: 'ch5', name: 'Water Conservation Week', category: 'Water Conservation', description: 'Cut household water use by 20% for a week.', participants: 3190, daysLeft: 7, progress: 80, joined: true, reward: '150 pts', xp: 70, difficulty: 'Easy' },
    { id: 'ch6', name: 'Zero Waste Challenge', category: 'Waste Reduction', description: 'Send nothing to landfill for two weeks straight.', participants: 987, daysLeft: 13, progress: 0, joined: false, reward: '350 pts + Sustainability Champion badge', xp: 200, difficulty: 'Hard', badgeId: 'b3' },
  ]);

  // Gamification: XP earned by other community members, used to render
  // the leaderboard. The logged-in user's row is merged in from totalXp
  // below so the leaderboard always reflects live task completions.
  private readonly otherPlayers = signal<{ name: string; xp: number }[]>([
    { name: 'Rohan Verma', xp: 1050 },
    { name: 'Lena Fischer', xp: 640 },
    { name: 'Kwame Boateng', xp: 610 },
    { name: 'Mei Lin', xp: 260 },
  ]);

  readonly leaderboard = computed<LeaderboardEntry[]>(() => {
    const rows: Omit<LeaderboardEntry, 'rank'>[] = [
      ...this.otherPlayers().map((p) => ({
        name: p.name,
        xp: p.xp,
        level: this.xpLevelFor(p.xp).name,
      })),
      {
        name: this.user().name,
        xp: this.totalXp(),
        level: this.currentLevel().name,
        isYou: true,
      },
    ];
    return rows
      .sort((a, b) => b.xp - a.xp)
      .map((row, i) => ({ ...row, rank: i + 1 }));
  });

  // ==========================================================
  // GAMIFICATION: XP, levels, task completion, badge unlocks
  // ==========================================================
  readonly totalXp = signal<number>(380);
  private readonly completedChallengeIds = signal<Set<string>>(new Set());
  private readonly awardedGoalIds = signal<Set<string>>(new Set());

  readonly xpLevels = XP_LEVELS;

  readonly currentLevel = computed(() => this.xpLevelFor(this.totalXp()));

  readonly nextLevel = computed(() => {
    const idx = XP_LEVELS.findIndex((l) => l.name === this.currentLevel().name);
    return idx >= 0 && idx < XP_LEVELS.length - 1 ? XP_LEVELS[idx + 1] : null;
  });

  readonly levelProgressPct = computed(() => {
    const current = this.currentLevel();
    const next = this.nextLevel();
    if (!next) return 100;
    const span = next.minXp - current.minXp;
    const progressed = this.totalXp() - current.minXp;
    return Math.min(100, Math.max(0, Math.round((progressed / span) * 100)));
  });

  private xpLevelFor(xp: number): XpLevel {
    return [...XP_LEVELS].reverse().find((l) => xp >= l.minXp) ?? XP_LEVELS[0];
  }

  private unlockBadge(id: string) {
    this.badges.update((list) =>
      list.map((b) => (b.id === id ? { ...b, earned: true } : b))
    );
  }

  /** Re-checks the XP-threshold badges (Eco Warrior, Climate Hero, Planet Protector). */
  private syncLevelBadges() {
    const xp = this.totalXp();
    if (xp >= 250) this.unlockBadge('b2');
    if (xp >= 600) this.unlockBadge('b4');
    if (xp >= 1000) this.unlockBadge('b5');
  }

  isChallengeCompleted(id: string): boolean {
    return this.completedChallengeIds().has(id);
  }

  /** Marks a challenge/task complete, awards its XP, and unlocks any tied badge. */
  completeChallenge(id: string) {
    if (this.completedChallengeIds().has(id)) return;
    const challenge = this.challenges().find((c) => c.id === id);
    if (!challenge) return;

    this.completedChallengeIds.update((set) => new Set(set).add(id));
    this.challenges.update((list) =>
      list.map((c) => (c.id === id ? { ...c, progress: 100 } : c))
    );
    this.totalXp.update((xp) => xp + challenge.xp);

    if (challenge.badgeId) this.unlockBadge(challenge.badgeId);
    if (this.completedChallengeIds().size >= 5) this.unlockBadge('b3');
    this.syncLevelBadges();
  }

  /** Total XP required to fully complete a goal/task, derived from its target size. */
  goalXpTotal(goal: { targetKg: number }): number {
    const target = Number(goal.targetKg) || 0;
    return Math.min(500, Math.max(80, Math.round((target * 8) / 10) * 10));
  }

  /** XP accumulated so far toward a goal/task, proportional to its progress. */
  goalXpEarned(goal: { targetKg: number; currentKg: number }): number {
    const target = Number(goal.targetKg) || 0;
    const current = Number(goal.currentKg) || 0;
    if (target <= 0) return 0;
    const pct = Math.min(1, Math.max(0, current / target));
    return Math.round(pct * this.goalXpTotal(goal));
  }

  /** Awards XP + the Goal Getter badge the first time a goal reaches Achieved. */
  recordGoalCompletion(goal: { id?: number | string; targetKg: number; currentKg: number; status: string }) {
    if (goal.id == null || goal.status !== 'Achieved') return;
    const key = String(goal.id);
    if (this.awardedGoalIds().has(key)) return;

    this.awardedGoalIds.update((set) => new Set(set).add(key));
    this.totalXp.update((xp) => xp + this.goalXpTotal(goal));
    this.unlockBadge('b6');
    this.syncLevelBadges();
  }

  private readonly reports = signal<Report[]>([
    { id: 'r1', title: 'July Carbon Footprint Summary', type: 'Carbon Footprint', period: 'Jul 2026', generatedOn: '2026-08-01', format: 'PDF' },
    { id: 'r2', title: 'Q2 Goal Achievement Report', type: 'Goal Achievement', period: 'Apr – Jun 2026', generatedOn: '2026-07-02', format: 'Excel' },
    { id: 'r3', title: 'Weekly Sustainability Digest', type: 'Sustainability', period: 'Wk 31, 2026', generatedOn: '2026-07-28', format: 'PDF' },
    { id: 'r4', title: 'Challenge Participation Log', type: 'Challenge Participation', period: 'Jan – Jul 2026', generatedOn: '2026-07-15', format: 'Excel' },
  ]);

  private readonly recommendations = signal<Recommendation[]>([
    { id: 'rec1', title: 'Switch two weekly car trips to bus', detail: 'Based on your transportation pattern, swapping two commutes per week could meaningfully cut emissions.', impactKg: 7.2, factor: 'Transportation Patterns' },
    { id: 'rec2', title: 'Shift laundry to off-peak hours', detail: 'Your electricity usage spikes align with peak grid carbon intensity; shifting load can lower embedded emissions.', impactKg: 2.1, factor: 'Energy Usage' },
    { id: 'rec3', title: 'Add one plant-based day per week', detail: 'Your food log shows a mixed diet most days; one plant-based day would meaningfully reduce weekly output.', impactKg: 4.6, factor: 'Lifestyle Habits' },
    { id: 'rec4', title: 'Bundle online orders', detail: 'You have 2 separate deliveries this week — combining orders would reduce packaging and transport emissions.', impactKg: 0.8, factor: 'Waste Management' },
  ]);

  private readonly badges = signal<Badge[]>([
    { id: 'b1', name: 'Green Beginner', earned: true, description: 'Logged your first carbon entry.' },
    { id: 'b2', name: 'Eco Warrior', earned: true, description: 'Reached a 700+ Eco Score.' },
    { id: 'b3', name: 'Sustainability Champion', earned: false, description: 'Complete 5 community challenges.' },
    { id: 'b4', name: 'Climate Hero', earned: false, description: 'Reach a 900+ Eco Score.' },
    { id: 'b5', name: 'Planet Protector', earned: false, description: 'Sustain a 1000+ Eco Score for 30 days.' },
    { id: 'b6', name: 'Goal Getter', earned: false, description: 'Achieve your first sustainability goal.' },
  ]);

  getUser() { return this.user.asReadonly(); }
  getCarbonEntries() { return this.carbonEntries.asReadonly(); }
  getGoals() { return this.goals.asReadonly(); }
  getChallenges() { return this.challenges.asReadonly(); }
  getLeaderboard() { return this.leaderboard; }
  getReports() { return this.reports.asReadonly(); }
  getRecommendations() { return this.recommendations.asReadonly(); }
  getBadges() { return this.badges.asReadonly(); }

  addCarbonEntry(entry: CarbonEntry) {
    this.carbonEntries.update((list) => [entry, ...list]);
  }

  toggleChallenge(id: string) {
    this.challenges.update((list) =>
      list.map((c) => (c.id === id ? { ...c, joined: !c.joined } : c))
    );
  }

  updateGoalProgress(id: string, current: number) {
    this.goals.update((list) =>
      list.map((g) => (g.id === id ? { ...g, current } : g))
    );
  }
}
