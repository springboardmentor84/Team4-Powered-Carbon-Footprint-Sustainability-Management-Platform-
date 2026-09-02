import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PieSlice {
  category: string;
  icon: string;
  emission: number;
  percentage: number;
  color: string;
  // SVG donut geometry
  dashArray: string;
  dashOffset: number;
}

const CATEGORY_ICONS: Record<string, string> = {
  'Transportation': '🚗',
  'Food': '🍽️',
  'Electricity Usage': '⚡',
  'Fuel Consumption': '⛽',
  'Waste': '♻️',
  'Water Usage': '💧',
  'Other': '🌱',
};

// Palette pulled from the existing design tokens so this chart matches
// the rest of the app (pine / moss / amber family, cycled for >5 categories).
const SLICE_COLORS = [
  '#1b4332', // pine-700
  '#84a98c', // moss-300
  '#d68c45', // amber-500
  '#52796f', // moss-500
  '#bc7530', // amber-600
  '#4d5650', // ink-600
  '#0f2e22', // pine-900
];

@Component({
  selector: 'eco-emission-pie-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emission-pie-chart.component.html',
  styleUrl: './emission-pie-chart.component.css',
})
export class EmissionPieChartComponent {

  @Input() activities: any[] = [];

  private readonly RADIUS = 15.9155; // makes circumference ~= 100
  private readonly CIRCUMFERENCE = 2 * Math.PI * this.RADIUS;

  get slices(): PieSlice[] {

    const grouped = new Map<string, number>();

    for (const activity of this.activities || []) {
      const category = activity.category || 'Other';
      const emission = Number(activity.carbonEmission) || 0;
      grouped.set(category, (grouped.get(category) || 0) + emission);
    }

    const total = Array.from(grouped.values()).reduce((sum, v) => sum + v, 0);

    if (total === 0) {
      return [];
    }

    const sorted = Array.from(grouped.entries()).sort((a, b) => b[1] - a[1]);

    let cumulativePercent = 0;

    return sorted.map(([category, emission], index) => {

      const percentage = (emission / total) * 100;

      const dashArray = `${(percentage / 100) * this.CIRCUMFERENCE} ${this.CIRCUMFERENCE}`;
      const dashOffset = -((cumulativePercent / 100) * this.CIRCUMFERENCE);

      cumulativePercent += percentage;

      return {
        category,
        icon: CATEGORY_ICONS[category] || '🌱',
        emission,
        percentage,
        color: SLICE_COLORS[index % SLICE_COLORS.length],
        dashArray,
        dashOffset,
      };
    });
  }

  get totalEmission(): number {
    return this.slices.reduce((sum, s) => sum + s.emission, 0);
  }

  get hasData(): boolean {
    return this.slices.length > 0;
  }

  get topSlice(): PieSlice | null {
    return this.hasData ? this.slices[0] : null;
  }
}
