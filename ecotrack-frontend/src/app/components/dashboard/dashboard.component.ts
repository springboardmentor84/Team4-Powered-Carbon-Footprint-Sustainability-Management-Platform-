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
}
