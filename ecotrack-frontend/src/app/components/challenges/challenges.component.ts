import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { FilterGroup, SearchFilterBarComponent } from '../shared/search-filter-bar/search-filter-bar.component';

@Component({
  selector: 'eco-challenges',
  standalone: true,
  imports: [CommonModule, SearchFilterBarComponent],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.css',
})
export class ChallengesComponent {
  private data = inject(MockDataService);

  readonly challenges = this.data.getChallenges();
  readonly leaderboard = this.data.getLeaderboard();

  // --- Search & filter state ---
  readonly search = signal('');
  readonly categoryFilter = signal('All');
  readonly statusFilter = signal('All');

  readonly filterGroups = computed<FilterGroup[]>(() => {
    const categories = Array.from(new Set(this.challenges().map((c) => c.category))).sort();
    return [
      {
        key: 'category',
        label: 'Category',
        options: [
          { label: 'All categories', value: 'All' },
          ...categories.map((c) => ({ label: c, value: c })),
        ],
      },
      {
        key: 'status',
        label: 'Status',
        options: [
          { label: 'All', value: 'All' },
          { label: 'Joined', value: 'Joined' },
          { label: 'Not joined', value: 'Not joined' },
        ],
      },
    ];
  });

  readonly activeFilters = computed(() => ({
    category: this.categoryFilter(),
    status: this.statusFilter(),
  }));

  readonly filtered = computed(() => {
    const q = this.search().toLowerCase().trim();
    const category = this.categoryFilter();
    const status = this.statusFilter();
    return this.challenges().filter((c) => {
      const matchesSearch =
        !q || c.name.toLowerCase().includes(q) || c.category.toLowerCase().includes(q);
      const matchesCategory = category === 'All' || c.category === category;
      const matchesStatus =
        status === 'All' || (status === 'Joined' ? c.joined : !c.joined);
      return matchesSearch && matchesCategory && matchesStatus;
    });
  });

  onSearchChange(value: string) {
    this.search.set(value);
  }

  onFilterChange(change: { key: string; value: string }) {
    if (change.key === 'category') this.categoryFilter.set(change.value);
    if (change.key === 'status') this.statusFilter.set(change.value);
  }

  clearFilters() {
    this.search.set('');
    this.categoryFilter.set('All');
    this.statusFilter.set('All');
  }

  toggle(id: string) {
    this.data.toggleChallenge(id);
  }
}
