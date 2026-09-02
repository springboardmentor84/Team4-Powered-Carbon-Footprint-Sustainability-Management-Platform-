import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { CarbonService } from '../../services/carbon.service';
import { GoalService } from '../../services/goal.service';
import { Report } from '../../models/data.model';
import {
  SustainabilityTrendChartComponent,
  TrendPoint,
} from '../sustainability-trend-chart/sustainability-trend-chart.component';

@Component({
  selector: 'eco-reports',
  standalone: true,
  imports: [CommonModule, SustainabilityTrendChartComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent implements OnInit {
  private data = inject(MockDataService);
  private carbonService = inject(CarbonService);
  private goalService = inject(GoalService);

  readonly reports = this.data.getReports();
  readonly reportTypes: Report['type'][] = [
    'Carbon Footprint',
    'Goal Achievement',
    'Sustainability',
    'Challenge Participation',
  ];
  readonly generating = signal<string | null>(null);

  readonly activityList = signal<any[]>([]);
  readonly goalList = signal<any[]>([]);

  // ==========================================================
  // SUSTAINABILITY SCORE TREND
  // Re-uses the same weighting the dashboard's Eco Score uses
  // (goal completion + activity count + carbon impact), but
  // computed as a running snapshot at each activity date so it
  // can be plotted as a trend rather than a single number.
  // ==========================================================
  readonly scoreTrend = computed<TrendPoint[]>(() => {

    const activities = this.activityList();
    const goals = this.goalList();

    if (activities.length === 0) {
      return [];
    }

    const achievedGoals = goals.filter(
      (g: any) => g.status === 'Achieved'
    ).length;

    const goalScore =
      goals.length > 0 ? (achievedGoals / goals.length) * 600 : 0;

    // Unique activity dates, oldest first
    const dates = Array.from(
      new Set(
        activities
          .map((a: any) => a.activityDate)
          .filter((d: any) => !!d)
      )
    ).sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime()
    );

    let cumulativeCount = 0;
    let cumulativeCarbon = 0;

    const points: TrendPoint[] = dates.map((date) => {

      const dayActivities = activities.filter(
        (a: any) => a.activityDate === date
      );

      cumulativeCount += dayActivities.length;
      cumulativeCarbon += dayActivities.reduce(
        (sum: number, a: any) => sum + (Number(a.carbonEmission) || 0),
        0
      );

      const activityScore = Math.min(cumulativeCount * 20, 200);
      const carbonScore = Math.max(0, 200 - cumulativeCarbon * 2);

      const score = Math.min(
        Math.round(goalScore + activityScore + carbonScore),
        1000
      );

      const parsedDate = new Date(`${date}T00:00:00`);

      return {
        label: parsedDate.toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
        }),
        fullDate: parsedDate.toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
        score,
      };
    });

    // Keep the chart readable — latest 8 snapshots
    return points.slice(-8);
  });

  requestReport(type: string) {
    this.generating.set(type);
    setTimeout(() => this.generating.set(null), 1400);
  }

  download(report: Report) {
    // Placeholder for a real call to the Report Service, e.g.:
    // this.http.get(`/api/reports/${report.id}/download`, { responseType: 'blob' })
    alert(`Downloading "${report.title}" as ${report.format}…`);
  }

  ngOnInit(): void {

    const email = localStorage.getItem('email');

    if (!email) {
      return;
    }

    this.carbonService.getActivities(email).subscribe({
      next: (data: any[]) => this.activityList.set(data),
      error: (err) => console.error('Activity loading error:', err),
    });

    this.goalService.getGoals(email).subscribe({
      next: (data: any[]) => this.goalList.set(data),
      error: (err) => console.error('Goal loading error:', err),
    });
  }
}
