import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CarbonService } from '../../services/carbon.service';
import { GoalService } from '../../services/goal.service';
import { CarbonChartComponent } from '../carbon-chart/carbon-chart.component';

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