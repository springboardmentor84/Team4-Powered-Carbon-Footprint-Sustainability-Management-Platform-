import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { Report } from '../../models/data.model';

@Component({
  selector: 'eco-reports',
  standalone: true,
  imports: [CommonModule],
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
