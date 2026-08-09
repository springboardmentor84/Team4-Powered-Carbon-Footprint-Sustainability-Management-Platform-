import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { SustainabilityGoal } from '../../models/data.model';
import { FilterGroup, SearchFilterBarComponent } from '../shared/search-filter-bar/search-filter-bar.component';

const STATUSES: SustainabilityGoal['status'][] = ['On Track', 'At Risk', 'Achieved', 'Not Started'];

@Component({
  selector: 'eco-goals',
  standalone: true,
  imports: [CommonModule, SearchFilterBarComponent],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css',
})
export class GoalsComponent {
  private data = inject(MockDataService);

  readonly goals = this.data.getGoals();

  // --- Search & filter state ---
  readonly search = signal('');
  readonly statusFilter = signal('All');

  readonly filterGroups: FilterGroup[] = [
    {
      key: 'status',
      label: 'Status',
      options: [
        { label: 'All statuses', value: 'All' },
        ...STATUSES.map((s) => ({ label: s, value: s })),
      ],
    },
  ];

  readonly activeFilters = computed(() => ({ status: this.statusFilter() }));

  readonly filteredGoals = computed(() => {
    const q = this.search().toLowerCase().trim();
    const status = this.statusFilter();
    return this.goals().filter((g) => {
      const matchesStatus = status === 'All' || g.status === status;
      const matchesSearch =
        !q || g.title.toLowerCase().includes(q) || g.type.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  });

  onSearchChange(value: string) {
    this.search.set(value);
  }

  onFilterChange(change: { key: string; value: string }) {
    if (change.key === 'status') this.statusFilter.set(change.value);
  }

  clearFilters() {
    this.search.set('');
    this.statusFilter.set('All');
  }

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
