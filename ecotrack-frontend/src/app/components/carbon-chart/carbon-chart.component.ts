import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

@Component({
  selector: 'eco-carbon-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carbon-chart.component.html',
  styleUrls: ['./carbon-chart.component.css']
})
export class CarbonChartComponent
  implements AfterViewInit, OnChanges {

  @ViewChild('chartCanvas')
  chartCanvas!: ElementRef<HTMLCanvasElement>;

  @Input()
  activities: any[] = [];

  chart: Chart | null = null;

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['activities'] && this.chart) {
      this.updateChart();
    }

  }

  // Group carbon emission date-wise
  getDailyTotals(): { [key: string]: number } {

    const totals: { [key: string]: number } = {};

    for (const activity of this.activities) {

      const date = activity.activityDate;

      if (!date) {
        continue;
      }

      const emission =
        Number(activity.carbonEmission) || 0;

      if (totals[date]) {
        totals[date] += emission;
      } else {
        totals[date] = emission;
      }

    }

    return totals;
  }

  createChart(): void {

    if (!this.chartCanvas) {
      return;
    }

    const dailyTotals = this.getDailyTotals();

    const sortedDates = Object.keys(dailyTotals).sort();

    const labels = sortedDates.map(date => {

      const d = new Date(date);

      return d.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short'
      });

    });

    const values = sortedDates.map(
      date => dailyTotals[date]
    );

    this.chart = new Chart(
      this.chartCanvas.nativeElement,
      {
        type: 'line',

        data: {

          labels: labels,

          datasets: [

            {
              label: 'Daily Carbon Emission (kg CO₂)',

              data: values,

              borderColor: '#4CAF50',

              backgroundColor: 'rgba(76, 175, 80, 0.15)',

              borderWidth: 3,

              pointRadius: 5,

              pointHoverRadius: 7,

              tension: 0.4,

              fill: true

            }

          ]

        },

        options: {

          responsive: true,

          maintainAspectRatio: false,

          plugins: {

            legend: {
              display: true
            },

            tooltip: {

              callbacks: {

                label: (context) => {

                  const value =
                    Number(context.parsed.y) || 0;

                  return ` ${value.toFixed(2)} kg CO₂`;

                }

              }

            }

          },

          scales: {

            y: {

              beginAtZero: true,

              title: {

                display: true,

                text: 'Carbon Emission (kg CO₂)'

              }

            },

            x: {

              title: {

                display: true,

                text: 'Date'

              }

            }

          }

        }

      }
    );

  }

  updateChart(): void {

    if (!this.chart) {
      return;
    }

    const dailyTotals = this.getDailyTotals();

    const sortedDates = Object.keys(dailyTotals).sort();

    const labels = sortedDates.map(date => {

      const d = new Date(date);

      return d.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short'
      });

    });

    const values = sortedDates.map(
      date => dailyTotals[date]
    );

    this.chart.data.labels = labels;

    this.chart.data.datasets[0].data = values;

    this.chart.update();

  }

}