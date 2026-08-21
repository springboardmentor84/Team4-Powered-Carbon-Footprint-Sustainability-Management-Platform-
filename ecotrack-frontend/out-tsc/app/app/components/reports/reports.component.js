import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.id;
function ReportsComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "lowercase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 7);
    i0.ɵɵlistener("click", function ReportsComponent_For_9_Template_button_click_6_listener() { const type_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.requestReport(type_r2)); });
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const type_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(type_r2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Export a fresh ", i0.ɵɵpipeBind1(5, 4, type_r2), " report as PDF or Excel.");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r2.generating() === type_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.generating() === type_r2 ? "Generating\u2026" : "Generate report", " ");
} }
function ReportsComponent_For_29_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td", 9)(13, "button", 10);
    i0.ɵɵlistener("click", function ReportsComponent_For_29_Template_button_click_13_listener() { const r_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.download(r_r5)); });
    i0.ɵɵtext(14, "Download");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const r_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r5.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r5.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r5.period);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r5.generatedOn);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r5.format);
} }
export class ReportsComponent {
    data = inject(MockDataService);
    reports = this.data.getReports();
    reportTypes = [
        'Carbon Footprint',
        'Goal Achievement',
        'Sustainability',
        'Challenge Participation',
    ];
    generating = signal(null);
    requestReport(type) {
        this.generating.set(type);
        setTimeout(() => this.generating.set(null), 1400);
    }
    download(report) {
        // Placeholder for a real call to the Report Service, e.g.:
        // this.http.get(`/api/reports/${report.id}/download`, { responseType: 'blob' })
        alert(`Downloading "${report.title}" as ${report.format}…`);
    }
    static ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReportsComponent, selectors: [["eco-reports"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 30, vars: 0, consts: [[1, "eco-page"], [1, "eco-page-header"], [1, "eco-eyebrow"], [1, "quick-grid"], [1, "eco-card", "quick-card"], [1, "eco-card"], [1, "table"], [1, "eco-btn", "eco-btn--primary", 3, "click", "disabled"], [1, "eco-tag"], [1, "right"], [1, "eco-btn", "eco-btn--ghost", 3, "click"]], template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "Reports & Export");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Generate and download reports");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "section", 3);
            i0.ɵɵrepeaterCreate(8, ReportsComponent_For_9_Template, 8, 6, "div", 4, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "section", 5)(11, "h3");
            i0.ɵɵtext(12, "Report history");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "table", 6)(14, "thead")(15, "tr")(16, "th");
            i0.ɵɵtext(17, "Title");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "th");
            i0.ɵɵtext(19, "Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "th");
            i0.ɵɵtext(21, "Period");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "th");
            i0.ɵɵtext(23, "Generated");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "th");
            i0.ɵɵtext(25, "Format");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(26, "th");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "tbody");
            i0.ɵɵrepeaterCreate(28, ReportsComponent_For_29_Template, 15, 5, "tr", null, _forTrack0);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.reportTypes);
            i0.ɵɵadvance(20);
            i0.ɵɵrepeater(ctx.reports());
        } }, dependencies: [CommonModule, i1.LowerCasePipe], styles: [".quick-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 18px;\n  margin-bottom: 24px;\n}\n.quick-card[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; }\n.quick-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 16px; }\n.quick-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { align-self: flex-start; }\n\n.table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; font-size: 13.5px; margin-top: 8px; }\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { text-align: left; color: var(--ink-400); font-weight: 600; font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.06em; padding: 8px 10px; border-bottom: 1px solid var(--sand-100); }\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 10px; border-bottom: 1px solid var(--sand-050); }\n.table[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] { text-align: right; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportsComponent, [{
        type: Component,
        args: [{ selector: 'eco-reports', standalone: true, imports: [CommonModule], template: "<div class=\"eco-page\">\n  <div class=\"eco-page-header\">\n    <div>\n      <span class=\"eco-eyebrow\">Reports &amp; Export</span>\n      <h1>Generate and download reports</h1>\n    </div>\n  </div>\n\n  <section class=\"quick-grid\">\n    @for (type of reportTypes; track type) {\n      <div class=\"eco-card quick-card\">\n        <h3>{{ type }}</h3>\n        <p>Export a fresh {{ type | lowercase }} report as PDF or Excel.</p>\n        <button\n          class=\"eco-btn eco-btn--primary\"\n          [disabled]=\"generating() === type\"\n          (click)=\"requestReport(type)\"\n        >\n          {{ generating() === type ? 'Generating\u2026' : 'Generate report' }}\n        </button>\n      </div>\n    }\n  </section>\n\n  <section class=\"eco-card\">\n    <h3>Report history</h3>\n    <table class=\"table\">\n      <thead>\n        <tr><th>Title</th><th>Type</th><th>Period</th><th>Generated</th><th>Format</th><th></th></tr>\n      </thead>\n      <tbody>\n        @for (r of reports(); track r.id) {\n          <tr>\n            <td>{{ r.title }}</td>\n            <td><span class=\"eco-tag\">{{ r.type }}</span></td>\n            <td>{{ r.period }}</td>\n            <td>{{ r.generatedOn }}</td>\n            <td>{{ r.format }}</td>\n            <td class=\"right\">\n              <button class=\"eco-btn eco-btn--ghost\" (click)=\"download(r)\">Download</button>\n            </td>\n          </tr>\n        }\n      </tbody>\n    </table>\n  </section>\n</div>\n", styles: [".quick-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 18px;\n  margin-bottom: 24px;\n}\n.quick-card { display: flex; flex-direction: column; gap: 10px; }\n.quick-card h3 { font-size: 16px; }\n.quick-card button { align-self: flex-start; }\n\n.table { width: 100%; border-collapse: collapse; font-size: 13.5px; margin-top: 8px; }\n.table th { text-align: left; color: var(--ink-400); font-weight: 600; font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.06em; padding: 8px 10px; border-bottom: 1px solid var(--sand-100); }\n.table td { padding: 10px; border-bottom: 1px solid var(--sand-050); }\n.table .right { text-align: right; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "app/components/reports/reports.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=reports.component.js.map