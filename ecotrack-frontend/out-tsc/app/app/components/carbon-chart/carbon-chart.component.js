import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import * as i0 from "@angular/core";
const _c0 = ["chartCanvas"];
Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);
export class CarbonChartComponent {
    chartCanvas;
    activities = [];
    chart = null;
    ngAfterViewInit() {
        this.createChart();
    }
    ngOnChanges(changes) {
        if (changes['activities'] && this.chart) {
            this.updateChart();
        }
    }
    // Group carbon emission date-wise
    getDailyTotals() {
        const totals = {};
        for (const activity of this.activities) {
            const date = activity.activityDate;
            if (!date) {
                continue;
            }
            const emission = Number(activity.carbonEmission) || 0;
            if (totals[date]) {
                totals[date] += emission;
            }
            else {
                totals[date] = emission;
            }
        }
        return totals;
    }
    createChart() {
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
        const values = sortedDates.map(date => dailyTotals[date]);
        this.chart = new Chart(this.chartCanvas.nativeElement, {
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
                                const value = Number(context.parsed.y) || 0;
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
        });
    }
    updateChart() {
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
        const values = sortedDates.map(date => dailyTotals[date]);
        this.chart.data.labels = labels;
        this.chart.data.datasets[0].data = values;
        this.chart.update();
    }
    static ɵfac = function CarbonChartComponent_Factory(t) { return new (t || CarbonChartComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CarbonChartComponent, selectors: [["eco-carbon-chart"]], viewQuery: function CarbonChartComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chartCanvas = _t.first);
        } }, inputs: { activities: "activities" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 0, consts: [["chartCanvas", ""], [1, "chart-container"]], template: function CarbonChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵelement(1, "canvas", null, 0);
            i0.ɵɵelementEnd();
        } }, dependencies: [CommonModule], styles: [".chart-container[_ngcontent-%COMP%]{\n\n    position: relative;\n\n    width:100%;\n\n    height:350px;\n\n    padding:15px;\n\n}\n\ncanvas[_ngcontent-%COMP%]{\n\n    width:100% !important;\n\n    height:100% !important;\n\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarbonChartComponent, [{
        type: Component,
        args: [{ selector: 'eco-carbon-chart', standalone: true, imports: [CommonModule], template: "<div class=\"chart-container\">\n\n    <canvas #chartCanvas></canvas>\n\n</div>\n", styles: [".chart-container{\n\n    position: relative;\n\n    width:100%;\n\n    height:350px;\n\n    padding:15px;\n\n}\n\ncanvas{\n\n    width:100% !important;\n\n    height:100% !important;\n\n}"] }]
    }], null, { chartCanvas: [{
            type: ViewChild,
            args: ['chartCanvas']
        }], activities: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CarbonChartComponent, { className: "CarbonChartComponent", filePath: "app/components/carbon-chart/carbon-chart.component.ts", lineNumber: 41 }); })();
//# sourceMappingURL=carbon-chart.component.js.map