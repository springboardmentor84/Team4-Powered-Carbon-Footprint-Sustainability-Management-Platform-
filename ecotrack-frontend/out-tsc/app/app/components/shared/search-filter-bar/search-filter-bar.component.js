import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.key;
const _forTrack1 = ($index, $item) => $item.value;
function SearchFilterBarComponent_For_8_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r4.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(opt_r4.label);
} }
function SearchFilterBarComponent_For_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 7)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 10);
    i0.ɵɵlistener("change", function SearchFilterBarComponent_For_8_Template_select_change_3_listener($event) { const group_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onFilterChange(group_r2.key, $event.target.value)); });
    i0.ɵɵrepeaterCreate(4, SearchFilterBarComponent_For_8_For_5_Template, 2, 2, "option", 11, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r2.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r2.activeFilters[group_r2.key] || "All");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(group_r2.options);
} }
function SearchFilterBarComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function SearchFilterBarComponent_Conditional_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clear()); });
    i0.ɵɵtext(1, "Clear filters");
    i0.ɵɵelementEnd();
} }
function SearchFilterBarComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.countLabel);
} }
/**
 * Shared search + filter system used across list-style pages (Carbon Tracker
 * history, Goals, Challenges, Reports). The parent owns all state as signals;
 * this component is purely presentational and emits change events, so it can
 * be swapped for a real query-param-driven search later without touching
 * consuming pages.
 */
export class SearchFilterBarComponent {
    placeholder = 'Search…';
    searchValue = '';
    filterGroups = [];
    activeFilters = {};
    resultCount = null;
    totalCount = null;
    searchChange = new EventEmitter();
    filterChange = new EventEmitter();
    clearAll = new EventEmitter();
    get hasActiveFilters() {
        const filtersActive = Object.values(this.activeFilters).some((v) => v && v !== 'All');
        return !!this.searchValue.trim() || filtersActive;
    }
    get countLabel() {
        if (this.resultCount === null)
            return null;
        return this.totalCount !== null && this.totalCount !== this.resultCount
            ? `${this.resultCount} of ${this.totalCount} results`
            : `${this.resultCount} result${this.resultCount === 1 ? '' : 's'}`;
    }
    onSearchInput(value) {
        this.searchChange.emit(value);
    }
    onFilterChange(key, value) {
        this.filterChange.emit({ key, value });
    }
    clear() {
        this.clearAll.emit();
    }
    static ɵfac = function SearchFilterBarComponent_Factory(t) { return new (t || SearchFilterBarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchFilterBarComponent, selectors: [["eco-search-filter-bar"]], inputs: { placeholder: "placeholder", searchValue: "searchValue", filterGroups: "filterGroups", activeFilters: "activeFilters", resultCount: "resultCount", totalCount: "totalCount" }, outputs: { searchChange: "searchChange", filterChange: "filterChange", clearAll: "clearAll" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 11, vars: 4, consts: [[1, "sfb"], [1, "sfb__row"], [1, "sfb__search"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", 3, "input", "placeholder", "value"], [1, "sfb__select"], ["type", "button", 1, "sfb__clear"], [1, "sfb__count", "eco-mono"], [3, "change", "value"], [3, "value"], ["type", "button", 1, "sfb__clear", 3, "click"]], template: function SearchFilterBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "label", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 3);
            i0.ɵɵelement(4, "circle", 4)(5, "line", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "input", 6);
            i0.ɵɵlistener("input", function SearchFilterBarComponent_Template_input_input_6_listener($event) { return ctx.onSearchInput($event.target.value); });
            i0.ɵɵelementEnd()();
            i0.ɵɵrepeaterCreate(7, SearchFilterBarComponent_For_8_Template, 6, 2, "label", 7, _forTrack0);
            i0.ɵɵtemplate(9, SearchFilterBarComponent_Conditional_9_Template, 2, 0, "button", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, SearchFilterBarComponent_Conditional_10_Template, 2, 1, "span", 9);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("placeholder", ctx.placeholder)("value", ctx.searchValue);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.filterGroups);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(9, ctx.hasActiveFilters ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(10, ctx.countLabel ? 10 : -1);
        } }, dependencies: [CommonModule], styles: [".sfb[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-card);\n  padding: 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n\n.sfb__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.sfb__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1 1 240px;\n  min-width: 200px;\n  background: var(--sand-050);\n  border: 1px solid var(--sand-100);\n  border-radius: var(--radius-sm);\n  padding: 9px 12px;\n  color: var(--ink-400);\n}\n\n.sfb__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  font-family: var(--font-body);\n  font-size: 14px;\n  color: var(--ink-900);\n  flex: 1;\n  min-width: 0;\n}\n\n.sfb__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--ink-400);\n}\n\n.sfb__select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ink-600);\n}\n\n.sfb__select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 13px;\n  color: var(--ink-900);\n  background: var(--sand-050);\n  border: 1px solid var(--sand-100);\n  border-radius: var(--radius-sm);\n  padding: 7px 10px;\n  cursor: pointer;\n}\n\n.sfb__clear[_ngcontent-%COMP%] {\n  border: 1px solid var(--moss-300);\n  background: transparent;\n  color: var(--pine-700);\n  border-radius: var(--radius-sm);\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.sfb__clear[_ngcontent-%COMP%]:hover {\n  background: var(--sand-100);\n}\n\n.sfb__count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ink-400);\n}\n\n@media (max-width: 640px) {\n  .sfb__row[_ngcontent-%COMP%] { flex-direction: column; align-items: stretch; }\n  .sfb__select[_ngcontent-%COMP%] { justify-content: space-between; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchFilterBarComponent, [{
        type: Component,
        args: [{ selector: 'eco-search-filter-bar', standalone: true, imports: [CommonModule], template: "<div class=\"sfb\">\n  <div class=\"sfb__row\">\n    <label class=\"sfb__search\">\n      <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"11\" cy=\"11\" r=\"8\"/>\n        <line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"/>\n      </svg>\n      <input\n        type=\"text\"\n        [placeholder]=\"placeholder\"\n        [value]=\"searchValue\"\n        (input)=\"onSearchInput($any($event.target).value)\"\n      />\n    </label>\n\n    @for (group of filterGroups; track group.key) {\n      <label class=\"sfb__select\">\n        <span>{{ group.label }}</span>\n        <select\n          [value]=\"activeFilters[group.key] || 'All'\"\n          (change)=\"onFilterChange(group.key, $any($event.target).value)\"\n        >\n          @for (opt of group.options; track opt.value) {\n            <option [value]=\"opt.value\">{{ opt.label }}</option>\n          }\n        </select>\n      </label>\n    }\n\n    @if (hasActiveFilters) {\n      <button type=\"button\" class=\"sfb__clear\" (click)=\"clear()\">Clear filters</button>\n    }\n  </div>\n\n  @if (countLabel) {\n    <span class=\"sfb__count eco-mono\">{{ countLabel }}</span>\n  }\n</div>\n", styles: [".sfb {\n  background: var(--white);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-card);\n  padding: 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n\n.sfb__row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.sfb__search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1 1 240px;\n  min-width: 200px;\n  background: var(--sand-050);\n  border: 1px solid var(--sand-100);\n  border-radius: var(--radius-sm);\n  padding: 9px 12px;\n  color: var(--ink-400);\n}\n\n.sfb__search input {\n  border: none;\n  background: transparent;\n  outline: none;\n  font-family: var(--font-body);\n  font-size: 14px;\n  color: var(--ink-900);\n  flex: 1;\n  min-width: 0;\n}\n\n.sfb__search input::placeholder {\n  color: var(--ink-400);\n}\n\n.sfb__select {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ink-600);\n}\n\n.sfb__select select {\n  font-family: var(--font-body);\n  font-size: 13px;\n  color: var(--ink-900);\n  background: var(--sand-050);\n  border: 1px solid var(--sand-100);\n  border-radius: var(--radius-sm);\n  padding: 7px 10px;\n  cursor: pointer;\n}\n\n.sfb__clear {\n  border: 1px solid var(--moss-300);\n  background: transparent;\n  color: var(--pine-700);\n  border-radius: var(--radius-sm);\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.sfb__clear:hover {\n  background: var(--sand-100);\n}\n\n.sfb__count {\n  font-size: 12px;\n  color: var(--ink-400);\n}\n\n@media (max-width: 640px) {\n  .sfb__row { flex-direction: column; align-items: stretch; }\n  .sfb__select { justify-content: space-between; }\n}\n"] }]
    }], null, { placeholder: [{
            type: Input
        }], searchValue: [{
            type: Input
        }], filterGroups: [{
            type: Input
        }], activeFilters: [{
            type: Input
        }], resultCount: [{
            type: Input
        }], totalCount: [{
            type: Input
        }], searchChange: [{
            type: Output
        }], filterChange: [{
            type: Output
        }], clearAll: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SearchFilterBarComponent, { className: "SearchFilterBarComponent", filePath: "app/components/shared/search-filter-bar/search-filter-bar.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=search-filter-bar.component.js.map