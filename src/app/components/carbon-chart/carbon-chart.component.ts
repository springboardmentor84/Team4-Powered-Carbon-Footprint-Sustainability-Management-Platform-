import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChartBar {
  date: string;
  label: string;
  fullDate: string;
  emission: number;
  height: number;
}

interface CategoryChart {
  category: string;
  emission: number;
  percentage: number;
  width: number;
  icon: string;
}

@Component({
  selector: 'eco-carbon-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carbon-chart.component.html',
  styleUrl: './carbon-chart.component.css'
})
export class CarbonChartComponent {

  @Input() activities: any[] = [];

  readonly Math = Math;


  // =========================================================
  // DAILY CARBON EMISSION DATA
  // =========================================================

  get chartData(): ChartBar[] {

    const grouped = new Map<string, number>();

    for (const activity of this.activities || []) {

      const date = activity.activityDate;

      if (!date) {
        continue;
      }

      const emission = Number(activity.carbonEmission) || 0;

      grouped.set(
        date,
        (grouped.get(date) || 0) + emission
      );

    }


    // Sort by date and show latest 7 days
    const sorted = Array.from(grouped.entries())
      .sort((a, b) =>
        new Date(a[0]).getTime() -
        new Date(b[0]).getTime()
      )
      .slice(-7);


    // Find highest emission
    const maxEmission = Math.max(
      ...sorted.map(item => item[1]),
      1
    );


    return sorted.map(([date, emission]) => {

      const parsedDate = new Date(`${date}T00:00:00`);


      // Short date shown below bar
      const label = parsedDate.toLocaleDateString(
        'en-IN',
        {
          day: '2-digit',
          month: 'short'
        }
      );


      // Bar height
      const height =
        emission > 0
          ? Math.max(
              (emission / maxEmission) * 100,
              8
            )
          : 4;


      return {

        date,

        label,

        fullDate: parsedDate.toLocaleDateString(
          'en-IN',
          {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          }
        ),

        emission,

        height

      };

    });

  }


  // =========================================================
  // CATEGORY EMISSION DATA
  // =========================================================

  get categoryData(): CategoryChart[] {

    const grouped = new Map<string, number>();


    // Group activities by category
    for (const activity of this.activities || []) {

      const category =
        activity.category || 'Other';

      const emission =
        Number(activity.carbonEmission) || 0;


      grouped.set(
        category,
        (grouped.get(category) || 0) + emission
      );

    }


    // Total emission
    const total = Array.from(grouped.values())
      .reduce(
        (sum, value) => sum + value,
        0
      );


    // No category data
    if (total === 0) {
      return [];
    }


    // Category icons
    const icons: Record<string, string> = {

      'Transportation': '🚗',

      'Food': '🍽️',

      'Electricity Usage': '⚡',

      'Fuel Consumption': '⛽',

      'Waste': '♻️',

      'Water Usage': '💧',

      'Other': '🌱'

    };


    // Convert map to chart data
    return Array.from(grouped.entries())

      // Highest emission first
      .sort(
        (a, b) => b[1] - a[1]
      )

      .map(
        ([category, emission]) => {

          const percentage =
            (emission / total) * 100;


          return {

            category,

            emission,

            percentage,

            // Used for progress bar width
            width: percentage,

            icon:
              icons[category] || '🌱'

          };

        }
      );

  }


  // =========================================================
  // HIGHEST CONTRIBUTING CATEGORY
  // =========================================================

  get highestCategory(): CategoryChart | null {

    const categories =
      this.categoryData;


    if (categories.length === 0) {
      return null;
    }


    return categories.reduce(
      (highest, current) =>

        current.emission >
        highest.emission

          ? current
          : highest
    );

  }


  // =========================================================
  // CHECK WHETHER DATA EXISTS
  // =========================================================

  get hasData(): boolean {

    return this.chartData.length > 0;

  }


  // =========================================================
  // TOTAL EMISSION
  // =========================================================

  get totalEmission(): number {

    return this.chartData.reduce(
      (sum, item) =>
        sum + item.emission,
      0
    );

  }


  // =========================================================
  // HIGHEST DAILY EMISSION
  // =========================================================

  get highestEmission(): number {

    return Math.max(
      ...this.chartData.map(
        item => item.emission
      ),
      0
    );

  }

}