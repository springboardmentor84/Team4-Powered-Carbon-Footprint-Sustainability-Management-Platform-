import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CarbonService } from '../../services/carbon.service';
import { GoalService } from '../../services/goal.service';
import { CarbonChartComponent } from '../carbon-chart/carbon-chart.component';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'eco-dashboard',
  standalone: true,
  imports: [
  DecimalPipe,
  RouterLink,
  CarbonChartComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {

  private carbonService = inject(CarbonService);
  private goalService = inject(GoalService);
  private data = inject(MockDataService);
readonly Math = Math;
  username = "";

  readonly activityList = signal<any[]>([]);
  readonly goalList = signal<any[]>([]);

  readonly totalCarbon = computed(() =>
    this.activityList().reduce(
      (sum: number, a: any) => sum + Number(a.carbonEmission),
      0
    )
  );

  readonly activeGoals = computed(() =>
    this.goalList().filter((g: any) => g.status !== "Achieved").length
  );

  readonly achievedGoals = computed(() =>
    this.goalList().filter((g: any) => g.status === "Achieved").length
  );
  readonly ecoScore = computed(() => {
  const goals = this.goalList();
  const activities = this.activityList();

  if (goals.length === 0 && activities.length === 0) {
    return 0;
  }

  // Goal completion contribution: maximum 600 points
  const goalScore =
    goals.length > 0
      ? (this.achievedGoals() / goals.length) * 600
      : 0;

  // Activity contribution: maximum 200 points
  const activityScore = Math.min(
    activities.length * 20,
    200
  );

  // Carbon activity contribution: maximum 200 points
  const carbonScore =
    activities.length > 0
      ? Math.max(
          0,
          200 - this.totalCarbon() * 2
        )
      : 0;

  return Math.min(
    Math.round(goalScore + activityScore + carbonScore),
    1000
  );
});
private syncEcoScore = effect(() => {
  this.data.currentEcoScore.set(this.ecoScore());
});
readonly sustainabilityInsight = computed(() => {
  const carbon = this.totalCarbon();
  const activities = this.activityList().length;

  if (activities === 0) {
    return {
      icon: '🌱',
      title: 'Start your green journey',
      message: 'Log your first activity to start tracking your carbon footprint.'
    };
  }

  if (carbon <= 20) {
    return {
      icon: '🌿',
      title: 'Great work!',
      message: 'Your carbon footprint is looking good. Keep making sustainable choices.'
    };
  }

  if (carbon <= 50) {
    return {
      icon: '🌱',
      title: 'You are on the right track',
      message: 'Your footprint is moderate. Try reducing high-carbon activities.'
    };
  }
 
  return {
    icon: '💚',
    title: "Let's reduce your footprint",
    message: 'Consider choosing greener transportation, saving electricity, and reducing waste.'
  };
});

  ngOnInit(): void {

    const email = localStorage.getItem("email");

    if (!email) return;

    this.username = email.split("@")[0];

    this.carbonService.getActivities(email).subscribe({

      next: (data: any[]) => {

        this.activityList.set(data);

      },

      error: (err) => {

        console.error(err);

      }

    });

    this.goalService.getGoals(email).subscribe({

      next: (data: any[]) => {

        this.goalList.set(data);

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

}