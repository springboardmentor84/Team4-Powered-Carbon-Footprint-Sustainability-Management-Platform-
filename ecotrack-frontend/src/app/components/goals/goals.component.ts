import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { SustainabilityGoal } from '../../models/data.model';

@Component({
  selector: 'eco-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css',
})
export class GoalsComponent {
  private data = inject(MockDataService);

  readonly goals = this.data.getGoals();

  readonly summary = computed(() => {
    const list = this.goals();
    return {
      total: list.length,
      achieved: list.filter((g) => g.status === 'Achieved').length,
      onTrack: list.filter((g) => g.status === 'On Track').length,
      atRisk: list.filter((g) => g.status === 'At Risk').length,
    };
  });

  progressPct(goal: SustainabilityGoal): number {
    return Math.min(100, Math.round((goal.current / goal.target) * 100));
  }

  bump(goal: SustainabilityGoal) {
    const next = Math.min(goal.target, goal.current + Math.max(1, Math.round(goal.target * 0.1)));
    this.data.updateGoalProgress(goal.id, next);
  }

  statusClass(status: SustainabilityGoal['status']): string {
    return {
      'On Track': 'status--ontrack',
      'At Risk': 'status--atrisk',
      Achieved: 'status--achieved',
      'Not Started': 'status--notstarted',
    }[status];
  }
}
