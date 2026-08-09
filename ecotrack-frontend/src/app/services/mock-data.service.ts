import { Injectable, signal } from '@angular/core';
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
 * Stands in for calls the Angular API Gateway layer would make to the
 * Spring Boot microservices (User, Carbon Tracking, Goal Management,
 * AI Recommendation, Challenge, Report, Gamification, Analytics).
 * Swap the bodies of these methods for HttpClient calls against the
 * real endpoints once the backend is live, e.g.:
 *   this.http.get<CarbonEntry[]>(`${environment.apiBase}/carbon-entries`)
 */
@Injectable({ providedIn: 'root' })
export class MockDataService {
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
    { id: 'ch1', name: 'Plastic-Free Week', category: 'Waste Reduction', description: 'Avoid all single-use plastic for seven consecutive days.', participants: 4213, daysLeft: 4, progress: 60, joined: true, reward: '150 pts + Green Beginner badge' },
    { id: 'ch2', name: 'Cycle To Work', category: 'Green Transportation', description: 'Log at least 3 cycling commutes this month.', participants: 2876, daysLeft: 11, progress: 33, joined: true, reward: '200 pts' },
    { id: 'ch3', name: 'Energy Saving Challenge', category: 'Renewable Energy', description: 'Reduce electricity draw by 10% versus last month.', participants: 6021, daysLeft: 18, progress: 0, joined: false, reward: '250 pts + Eco Warrior badge' },
    { id: 'ch4', name: 'Tree Plantation Drive', category: 'Climate Action', description: 'Plant and register at least one tree with photo proof.', participants: 1532, daysLeft: 25, progress: 0, joined: false, reward: '300 pts' },
    { id: 'ch5', name: 'Water Conservation Week', category: 'Water Conservation', description: 'Cut household water use by 20% for a week.', participants: 3190, daysLeft: 7, progress: 80, joined: true, reward: '150 pts' },
    { id: 'ch6', name: 'Zero Waste Challenge', category: 'Waste Reduction', description: 'Send nothing to landfill for two weeks straight.', participants: 987, daysLeft: 13, progress: 0, joined: false, reward: '350 pts + Sustainability Champion badge' },
  ]);

  private readonly leaderboard = signal<LeaderboardEntry[]>([
    { rank: 1, name: 'Rohan Verma', ecoScore: 981, badge: 'Planet Protector' },
    { rank: 2, name: 'Lena Fischer', ecoScore: 915, badge: 'Climate Hero' },
    { rank: 3, name: 'Kwame Boateng', ecoScore: 878, badge: 'Climate Hero' },
    { rank: 4, name: 'Asha Mehta', ecoScore: 742, badge: 'Eco Warrior' },
    { rank: 5, name: 'Mei Lin', ecoScore: 701, badge: 'Eco Warrior' },
  ]);

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
  ]);

  getUser() { return this.user.asReadonly(); }
  getCarbonEntries() { return this.carbonEntries.asReadonly(); }
  getGoals() { return this.goals.asReadonly(); }
  getChallenges() { return this.challenges.asReadonly(); }
  getLeaderboard() { return this.leaderboard.asReadonly(); }
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
