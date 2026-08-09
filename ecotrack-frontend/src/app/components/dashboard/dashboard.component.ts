import { Component, computed, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'eco-dashboard',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private data = inject(MockDataService);

  readonly user = this.data.getUser();
  readonly entries = this.data.getCarbonEntries();
  readonly goals = this.data.getGoals();
  readonly challenges = this.data.getChallenges();
  readonly recommendations = this.data.getRecommendations();
  readonly badges = this.data.getBadges();
  readonly leaderboard = this.data.getLeaderboard();

  readonly weekTotalKg = computed(() =>
    this.entries().reduce((sum, e) => sum + e.kgCo2e, 0)
  );

  readonly categoryBreakdown = computed(() => {
    const totals = new Map<string, number>();
    for (const e of this.entries()) {
      totals.set(e.category, (totals.get(e.category) ?? 0) + e.kgCo2e);
    }
    const max = Math.max(...Array.from(totals.values()), 1);
    return Array.from(totals.entries())
      .map(([category, kg]) => ({ category, kg, pct: (kg / max) * 100 }))
      .sort((a, b) => b.kg - a.kg);
  });

  readonly goalsOnTrack = computed(
    () => this.goals().filter((g) => g.status === 'On Track' || g.status === 'Achieved').length
  );

  readonly activeChallenges = computed(() => this.challenges().filter((c) => c.joined));

  readonly ringOffset = computed(() => {
    const circumference = 2 * Math.PI * 54;
    return circumference - (circumference * this.user().ecoScore) / 1000;
  });

  /** Daily emissions totals, oldest → newest, for the trend sparkline. */
  readonly dailyTrend = computed(() => {
    const totals = new Map<string, number>();
    for (const e of this.entries()) {
      totals.set(e.date, (totals.get(e.date) ?? 0) + e.kgCo2e);
    }
    const rows = Array.from(totals.entries())
      .map(([date, kg]) => ({ date, kg }))
      .sort((a, b) => a.date.localeCompare(b.date));
    const max = Math.max(...rows.map((r) => r.kg), 1);
    return rows.map((r) => ({ ...r, pct: (r.kg / max) * 100 }));
  });

  readonly communityAverage = computed(() => {
    const list = this.leaderboard();
    if (!list.length) return 0;
    return Math.round(list.reduce((sum, l) => sum + l.ecoScore, 0) / list.length);
  });

  readonly vsAverage = computed(() => this.user().ecoScore - this.communityAverage());

  readonly earnedBadges = computed(() => this.badges().filter((b) => b.earned));
  readonly nextBadge = computed(() => this.badges().find((b) => !b.earned));
}
