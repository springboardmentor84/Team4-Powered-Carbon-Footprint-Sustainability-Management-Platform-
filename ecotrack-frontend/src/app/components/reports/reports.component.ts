import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { Report } from '../../models/data.model';
import { FilterGroup, SearchFilterBarComponent } from '../shared/search-filter-bar/search-filter-bar.component';

@Component({
  selector: 'eco-reports',
  standalone: true,
  imports: [CommonModule, SearchFilterBarComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent {
  private data = inject(MockDataService);

  readonly reports = this.data.getReports();
  readonly reportTypes: Report['type'][] = [
    'Carbon Footprint',
    'Goal Achievement',
    'Sustainability',
    'Challenge Participation',
  ];
  readonly generating = signal<string | null>(null);

  // --- Search & filter state ---
  readonly search = signal('');
  readonly typeFilter = signal('All');
  readonly formatFilter = signal('All');

  readonly filterGroups: FilterGroup[] = [
    {
      key: 'type',
      label: 'Type',
      options: [
        { label: 'All types', value: 'All' },
        ...this.reportTypes.map((t) => ({ label: t, value: t })),
      ],
    },
    {
      key: 'format',
      label: 'Format',
      options: [
        { label: 'All formats', value: 'All' },
        { label: 'PDF', value: 'PDF' },
        { label: 'Excel', value: 'Excel' },
      ],
    },
  ];

  readonly activeFilters = computed(() => ({
    type: this.typeFilter(),
    format: this.formatFilter(),
  }));

  readonly filteredReports = computed(() => {
    const q = this.search().toLowerCase().trim();
    const type = this.typeFilter();
    const format = this.formatFilter();
    return this.reports().filter((r) => {
      const matchesSearch = !q || r.title.toLowerCase().includes(q) || r.period.toLowerCase().includes(q);
      const matchesType = type === 'All' || r.type === type;
      const matchesFormat = format === 'All' || r.format === format;
      return matchesSearch && matchesType && matchesFormat;
    });
  });

  onSearchChange(value: string) {
    this.search.set(value);
  }

  onFilterChange(change: { key: string; value: string }) {
    if (change.key === 'type') this.typeFilter.set(change.value);
    if (change.key === 'format') this.formatFilter.set(change.value);
  }

  clearFilters() {
    this.search.set('');
    this.typeFilter.set('All');
    this.formatFilter.set('All');
  }

  requestReport(type: string) {
    this.generating.set(type);
    setTimeout(() => this.generating.set(null), 1400);
  }

  download(report: Report) {
    // Placeholder for a real call to the Report Service, e.g.:
    // this.http.get(`/api/reports/${report.id}/download`, { responseType: 'blob' })
    alert(`Downloading "${report.title}" as ${report.format}…`);
  }
}
