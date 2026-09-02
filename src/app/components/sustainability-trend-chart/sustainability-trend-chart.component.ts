import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TrendPoint {
  label: string;
  fullDate: string;
  score: number;
}

interface PlottedPoint extends TrendPoint {
  x: number;
  y: number;
}

@Component({
  selector: 'eco-sustainability-trend-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sustainability-trend-chart.component.html',
  styleUrl: './sustainability-trend-chart.component.css',
})
export class SustainabilityTrendChartComponent {

  /** Sustainability score points, oldest first. */
  @Input() points: TrendPoint[] = [];

  private readonly VIEW_W = 100;
  private readonly VIEW_H = 46;
  private readonly PAD_X = 4;
  private readonly PAD_TOP = 6;
  private readonly PAD_BOTTOM = 8;

  get hasData(): boolean {
    return this.points.length > 0;
  }

  get maxScore(): number {
    return Math.max(...this.points.map((p) => p.score), 10);
  }

  get minScore(): number {
    return Math.min(...this.points.map((p) => p.score), 0);
  }

  get plotted(): PlottedPoint[] {

    const n = this.points.length;

    if (n === 0) {
      return [];
    }

    const max = this.maxScore;
    const min = Math.min(this.minScore, max - 1);
    const range = Math.max(max - min, 1);

    const usableW = this.VIEW_W - this.PAD_X * 2;
    const usableH = this.VIEW_H - this.PAD_TOP - this.PAD_BOTTOM;

    return this.points.map((p, i) => {

      const x = n === 1
        ? this.VIEW_W / 2
        : this.PAD_X + (i / (n - 1)) * usableW;

      const y = this.PAD_TOP + usableH - ((p.score - min) / range) * usableH;

      return { ...p, x, y };
    });
  }

  get linePath(): string {
    return this.plotted
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
      .join(' ');
  }

  get areaPath(): string {

    const pts = this.plotted;

    if (pts.length === 0) {
      return '';
    }

    const floorY = this.VIEW_H - this.PAD_BOTTOM;
    const first = pts[0];
    const last = pts[pts.length - 1];

    return `${this.linePath} L ${last.x} ${floorY} L ${first.x} ${floorY} Z`;
  }

  get latestScore(): number {
    return this.hasData ? this.points[this.points.length - 1].score : 0;
  }

  get firstScore(): number {
    return this.hasData ? this.points[0].score : 0;
  }

  get scoreDelta(): number {
    return Math.round(this.latestScore - this.firstScore);
  }

  get trendDirection(): 'up' | 'down' | 'flat' {
    if (this.scoreDelta > 0) return 'up';
    if (this.scoreDelta < 0) return 'down';
    return 'flat';
  }
}
