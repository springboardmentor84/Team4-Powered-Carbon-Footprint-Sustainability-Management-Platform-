import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterGroup {
  key: string;
  label: string;
  options: FilterOption[];
}

/**
 * Shared search + filter system used across list-style pages (Carbon Tracker
 * history, Goals, Challenges, Reports). The parent owns all state as signals;
 * this component is purely presentational and emits change events, so it can
 * be swapped for a real query-param-driven search later without touching
 * consuming pages.
 */
@Component({
  selector: 'eco-search-filter-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-filter-bar.component.html',
  styleUrl: './search-filter-bar.component.css',
})
export class SearchFilterBarComponent {
  @Input() placeholder = 'Search…';
  @Input() searchValue = '';
  @Input() filterGroups: FilterGroup[] = [];
  @Input() activeFilters: Record<string, string> = {};
  @Input() resultCount: number | null = null;
  @Input() totalCount: number | null = null;

  @Output() searchChange = new EventEmitter<string>();
  @Output() filterChange = new EventEmitter<{ key: string; value: string }>();
  @Output() clearAll = new EventEmitter<void>();

  get hasActiveFilters(): boolean {
    const filtersActive = Object.values(this.activeFilters).some((v) => v && v !== 'All');
    return !!this.searchValue.trim() || filtersActive;
  }

  get countLabel(): string | null {
    if (this.resultCount === null) return null;
    return this.totalCount !== null && this.totalCount !== this.resultCount
      ? `${this.resultCount} of ${this.totalCount} results`
      : `${this.resultCount} result${this.resultCount === 1 ? '' : 's'}`;
  }

  onSearchInput(value: string) {
    this.searchChange.emit(value);
  }

  onFilterChange(key: string, value: string) {
    this.filterChange.emit({ key, value });
  }

  clear() {
    this.clearAll.emit();
  }
}
