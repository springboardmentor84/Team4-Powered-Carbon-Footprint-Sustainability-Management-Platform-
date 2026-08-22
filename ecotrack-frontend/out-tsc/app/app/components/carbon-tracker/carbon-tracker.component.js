import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MockDataService } from '../../services/mock-data.service';
import { CarbonService } from '../../services/carbon.service';
import { CarbonEngineService } from '../../services/carbon-engine.service';
import { SearchFilterBarComponent } from '../shared/search-filter-bar/search-filter-bar.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
function CarbonTrackerComponent_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", cat_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(cat_r1);
} }
function CarbonTrackerComponent_For_79_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 27);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td")(10, "button", 28);
    i0.ɵɵlistener("click", function CarbonTrackerComponent_For_79_Template_button_click_10_listener() { const e_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.deleteActivity(e_r3.id)); });
    i0.ɵɵtext(11, " \u274C ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const e_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(e_r3.activityDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(e_r3.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(e_r3.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", e_r3.carbonEmission, " kg CO\u2082e");
} }
function CarbonTrackerComponent_ForEmpty_80_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 29);
    i0.ɵɵtext(2, " No entries in this category yet. ");
    i0.ɵɵelementEnd()();
} }
const CATEGORIES = [
    'Transportation',
    'Electricity Usage',
    'Fuel Consumption',
    'Food Consumption',
    'Waste Generation',
    'Water Usage',
    'Online Shopping',
    'Travel Activities',
];
const EMISSION_FACTORS = {
    Transportation: 0.21,
    'Electricity Usage': 0.45,
    'Fuel Consumption': 2.3,
    'Food Consumption': 1.4,
    'Waste Generation': 0.5,
    'Water Usage': 0.0017,
    'Online Shopping': 0.7,
    'Travel Activities': 5.1,
};
export class CarbonTrackerComponent {
    fb = inject(FormBuilder);
    data = inject(MockDataService);
    carbonService = inject(CarbonService);
    carbonEngineService = inject(CarbonEngineService);
    // =========================================================
    // DATABASE ACTIVITIES
    // =========================================================
    activityList = signal([]);
    carbonEngineEstimate = null;
    // =========================================================
    // SEARCH + FILTER
    // =========================================================
    searchValue = signal('');
    activeFilters = signal({
        category: 'All'
    });
    filterGroups = [
        {
            key: 'category',
            label: 'Category',
            options: [
                { label: 'All', value: 'All' },
                ...CATEGORIES.map(category => ({
                    label: category,
                    value: category
                }))
            ]
        }
    ];
    // =========================================================
    // FILTER DATABASE ACTIVITIES
    // =========================================================
    filteredActivityList = computed(() => {
        const activities = this.activityList();
        const search = this.searchValue()
            .trim()
            .toLowerCase();
        const category = this.activeFilters()['category'] || 'All';
        return activities.filter(activity => {
            const matchesCategory = category === 'All' ||
                activity.category === category;
            const matchesSearch = !search ||
                String(activity.category || '')
                    .toLowerCase()
                    .includes(search) ||
                String(activity.description || '')
                    .toLowerCase()
                    .includes(search) ||
                String(activity.activityDate || '')
                    .toLowerCase()
                    .includes(search);
            return matchesCategory && matchesSearch;
        });
    });
    // =========================================================
    // MOCK DATA
    // =========================================================
    categories = CATEGORIES;
    entries = this.data.getCarbonEntries();
    filter = signal('All');
    filteredEntries = computed(() => {
        const f = this.filter();
        const list = this.entries();
        return f === 'All'
            ? list
            : list.filter((e) => e.category === f);
    });
    totalKg = computed(() => this.entries().reduce((sum, e) => sum + e.kgCo2e, 0));
    // =========================================================
    // CALCULATE CARBON
    // =========================================================
    estimatedKg() {
        const category = String(this.form.value.category || '');
        const activity = String(this.form.value.activity || '')
            .trim()
            .toLowerCase();
        const qty = Number(this.form.value.quantity) || 0;
        if (qty <= 0) {
            return 0;
        }
        let factor = 0;
        // =======================================================
        // TRANSPORTATION
        // =======================================================
        if (category === 'Transportation') {
            switch (activity) {
                case 'car':
                    factor = 0.21;
                    break;
                case 'bike':
                case 'bicycle':
                    factor = 0.10;
                    break;
                case 'bus':
                    factor = 0.089;
                    break;
                case 'train':
                case 'metro':
                    factor = 0.041;
                    break;
                case 'truck':
                    factor = 0.30;
                    break;
                default:
                    factor = 0;
            }
        }
        // =======================================================
        // ELECTRICITY USAGE
        // =======================================================
        else if (category === 'Electricity Usage') {
            switch (activity) {
                case 'tv':
                case 'ac':
                case 'refrigerator':
                case 'washing machine':
                case 'electricity':
                    factor = 0.82;
                    break;
                default:
                    factor = 0.82;
            }
        }
        // =======================================================
        // FUEL CONSUMPTION
        // =======================================================
        else if (category === 'Fuel Consumption') {
            switch (activity) {
                case 'petrol':
                    factor = 2.31;
                    break;
                case 'diesel':
                    factor = 2.68;
                    break;
                default:
                    factor = 0;
            }
        }
        // =======================================================
        // FOOD CONSUMPTION
        // =======================================================
        else if (category === 'Food Consumption') {
            switch (activity) {
                case 'veg':
                case 'vegetarian':
                    factor = 0.50;
                    break;
                case 'non veg':
                case 'non-veg':
                case 'non vegetarian':
                    factor = 2.50;
                    break;
                case 'vegan':
                    factor = 0.30;
                    break;
                default:
                    factor = 1.50;
            }
        }
        // =======================================================
        // WASTE GENERATION
        // =======================================================
        else if (category === 'Waste Generation') {
            switch (activity) {
                case 'plastic':
                    factor = 2.50;
                    break;
                case 'paper':
                    factor = 1.00;
                    break;
                case 'organic waste':
                    factor = 0.50;
                    break;
                case 'general waste':
                    factor = 1.20;
                    break;
                default:
                    factor = 1.00;
            }
        }
        // =======================================================
        // WATER USAGE
        // =======================================================
        else if (category === 'Water Usage') {
            factor = 0.0003;
        }
        // =======================================================
        // ONLINE SHOPPING
        // =======================================================
        else if (category === 'Online Shopping') {
            switch (activity) {
                case 'clothes':
                    factor = 20.0;
                    break;
                case 'electronics':
                    factor = 50.0;
                    break;
                case 'groceries':
                    factor = 1.5;
                    break;
                default:
                    factor = 1.5;
            }
        }
        // =======================================================
        // TRAVEL ACTIVITIES
        // =======================================================
        else if (category === 'Travel Activities') {
            switch (activity) {
                case 'flight':
                case 'plane':
                    factor = 0.255;
                    break;
                case 'taxi':
                    factor = 0.21;
                    break;
                default:
                    factor = 0.21;
            }
        }
        return Math.round(qty * factor * 100) / 100;
    }
    // =========================================================
    // FORM
    // =========================================================
    form = this.fb.group({
        category: [
            'Transportation',
            Validators.required
        ],
        activity: [
            '',
            Validators.required
        ],
        quantity: [
            1,
            [
                Validators.required,
                Validators.min(0.1)
            ]
        ],
        unit: [
            'km'
        ],
        date: [
            new Date().toISOString().slice(0, 10),
            Validators.required
        ],
    });
    // =========================================================
    // FILTER
    // =========================================================
    setFilter(cat) {
        this.filter.set(cat);
        this.activeFilters.update(filters => ({
            ...filters,
            category: cat
        }));
    }
    // =========================================================
    // SEARCH FILTER BAR
    // =========================================================
    onSearchChange(value) {
        this.searchValue.set(value);
    }
    onFilterChange(event) {
        this.activeFilters.update(filters => ({
            ...filters,
            [event.key]: event.value
        }));
        if (event.key === 'category') {
            this.filter.set(event.value);
        }
    }
    clearFilters() {
        this.searchValue.set('');
        this.activeFilters.set({
            category: 'All'
        });
        this.filter.set('All');
    }
    // =========================================================
    // CARBON ENGINE ESTIMATE
    // =========================================================
    calculateEngineEstimate() {
        const activity = this.form.value.activity?.trim();
        const quantity = Number(this.form.value.quantity);
        const unit = this.form.value.unit;
        if (!activity ||
            !quantity ||
            quantity <= 0) {
            this.carbonEngineEstimate = null;
            return;
        }
        const activityLower = activity.toLowerCase();
        let activityType = '';
        if (activityLower.includes('car') ||
            activityLower.includes('auto')) {
            activityType = 'car';
        }
        else if (activityLower.includes('bike') ||
            activityLower.includes('bicycle')) {
            activityType = 'bike';
        }
        else if (activityLower.includes('bus')) {
            activityType = 'bus';
        }
        else if (activityLower.includes('train') ||
            activityLower.includes('metro')) {
            activityType = 'train';
        }
        else if (activityLower.includes('electricity') ||
            activityLower.includes('electric')) {
            activityType = 'electricity';
        }
        else if (activityLower.includes('flight') ||
            activityLower.includes('plane')) {
            activityType = 'flight';
        }
        if (!activityType) {
            this.carbonEngineEstimate = null;
            return;
        }
        const request = {
            activityType: activityType,
            amount: quantity,
            unit: unit || '',
            email: localStorage.getItem('email')
        };
        this.carbonEngineService
            .calculateCarbon(request)
            .subscribe({
            next: (result) => {
                this.carbonEngineEstimate =
                    result.carbonKg;
                console.log('Carbon Engine Estimate:', result);
            },
            error: (error) => {
                console.error('Carbon Engine Estimate Failed:', error);
                this.carbonEngineEstimate = null;
            }
        });
    }
    // =========================================================
    // DELETE ACTIVITY
    // =========================================================
    deleteActivity(id) {
        const email = localStorage.getItem('email');
        if (!email) {
            alert('User email not found. Please login again.');
            return;
        }
        const confirmed = confirm('Are you sure you want to delete this activity?');
        if (!confirmed) {
            return;
        }
        console.log('Deleting activity:', id, 'Email:', email);
        this.carbonService
            .deleteActivity(id, email)
            .subscribe({
            next: () => {
                console.log('Activity deleted successfully');
                // Remove immediately from screen
                this.activityList.update(activities => activities.filter(activity => activity.id !== id));
                alert('Activity deleted successfully');
                // Reload from database
                this.loadActivities();
            },
            error: (error) => {
                console.error('Delete Activity Failed:', error);
                console.error('Status:', error.status);
                console.error('Backend Error:', error.error);
                alert('Delete failed.\nStatus: ' +
                    error.status +
                    '\n' +
                    (error.error ||
                        'Unable to delete activity'));
            }
        });
    }
    // =========================================================
    // SUBMIT / SAVE ACTIVITY
    // =========================================================
    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const v = this.form.value;
        // =======================================================
        // LOCAL MOCK ENTRY
        // =======================================================
        const entry = {
            id: 'c' +
                Math.random()
                    .toString(36)
                    .slice(2, 8),
            date: v.date,
            category: v.category,
            activity: `${v.activity} — ${v.quantity} ${v.unit}`,
            kgCo2e: this.estimatedKg(),
        };
        this.data.addCarbonEntry(entry);
        // =======================================================
        // DATABASE ACTIVITY
        // =======================================================
        const activity = {
            category: v.category,
            description: v.activity,
            quantity: Number(v.quantity),
            unit: v.unit,
            carbonEmission: this.estimatedKg(),
            activityDate: v.date,
            email: localStorage.getItem('email')
        };
        this.carbonService
            .saveActivity(activity)
            .subscribe({
            next: (response) => {
                console.log('Activity Saved Successfully', response);
                // Reload activities from database
                this.loadActivities();
                this.form.patchValue({
                    activity: '',
                    quantity: 1
                });
                this.carbonEngineEstimate = null;
                alert('Activity Saved Successfully');
            },
            error: (error) => {
                console.error('Database Save Failed', error);
                alert('Failed to Save Activity');
            }
        });
    }
    // =========================================================
    // LOAD ACTIVITIES FROM DATABASE
    // =========================================================
    loadActivities() {
        const email = localStorage.getItem('email');
        if (!email) {
            return;
        }
        this.carbonService
            .getActivities(email)
            .subscribe({
            next: (data) => {
                this.activityList.set(data);
                console.log('Activities from DB:', data);
            },
            error: (error) => {
                console.error('Failed to load activities:', error);
            }
        });
    }
    // =========================================================
    // ON INIT
    // =========================================================
    ngOnInit() {
        this.loadActivities();
    }
    static ɵfac = function CarbonTrackerComponent_Factory(t) { return new (t || CarbonTrackerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CarbonTrackerComponent, selectors: [["eco-carbon-tracker"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 81, vars: 13, consts: [[1, "eco-page"], [1, "eco-page-header"], [1, "eco-eyebrow"], [1, "total-pill"], [1, "eco-mono"], [1, "layout"], [1, "eco-card", "form", 3, "ngSubmit", "formGroup"], [1, "field"], ["formControlName", "category"], [3, "value"], ["type", "text", "formControlName", "activity", "placeholder", "e.g. Car commute", 3, "input"], [1, "field-row"], ["type", "number", "formControlName", "quantity", "min", "0.1", "step", "0.1", 3, "input"], ["formControlName", "unit"], ["value", "km"], ["value", "kWh"], ["value", "L"], ["value", "kg"], ["value", "meals"], ["value", "items"], ["type", "date", "formControlName", "date"], [1, "estimate"], ["type", "submit", 1, "eco-btn", "eco-btn--primary", 3, "disabled"], [1, "eco-card", "history"], [1, "history__header"], ["placeholder", "Search activities...", 3, "searchChange", "filterChange", "clearAll", "searchValue", "filterGroups", "activeFilters", "resultCount", "totalCount"], [1, "table"], [1, "right"], ["type", "button", 1, "delete-btn", 3, "click"], ["colspan", "5", 1, "empty"]], template: function CarbonTrackerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "Carbon Tracking");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Log an activity");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 3)(8, "span");
            i0.ɵɵtext(9, "Total logged");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "strong", 4);
            i0.ɵɵtext(11);
            i0.ɵɵpipe(12, "number");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "div", 5)(14, "form", 6);
            i0.ɵɵlistener("ngSubmit", function CarbonTrackerComponent_Template_form_ngSubmit_14_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(15, "h3");
            i0.ɵɵtext(16, "New entry");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "label", 7)(18, "span");
            i0.ɵɵtext(19, "Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "select", 8);
            i0.ɵɵrepeaterCreate(21, CarbonTrackerComponent_For_22_Template, 2, 2, "option", 9, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "label", 7)(24, "span");
            i0.ɵɵtext(25, "Activity description");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "input", 10);
            i0.ɵɵlistener("input", function CarbonTrackerComponent_Template_input_input_26_listener() { return ctx.calculateEngineEstimate(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "div", 11)(28, "label", 7)(29, "span");
            i0.ɵɵtext(30, "Quantity");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "input", 12);
            i0.ɵɵlistener("input", function CarbonTrackerComponent_Template_input_input_31_listener() { return ctx.calculateEngineEstimate(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "label", 7)(33, "span");
            i0.ɵɵtext(34, "Unit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "select", 13)(36, "option", 14);
            i0.ɵɵtext(37, "km");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "option", 15);
            i0.ɵɵtext(39, "kWh");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "option", 16);
            i0.ɵɵtext(41, "liters");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "option", 17);
            i0.ɵɵtext(43, "kg");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "option", 18);
            i0.ɵɵtext(45, "meals");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "option", 19);
            i0.ɵɵtext(47, "items");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(48, "label", 7)(49, "span");
            i0.ɵɵtext(50, "Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(51, "input", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "div", 21)(53, "span");
            i0.ɵɵtext(54, "Estimated impact");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "strong", 4);
            i0.ɵɵtext(56);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(57, "button", 22);
            i0.ɵɵtext(58, "Log activity");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "div", 23)(60, "div", 24)(61, "h3");
            i0.ɵɵtext(62, "Activity history");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(63, "eco-search-filter-bar", 25);
            i0.ɵɵlistener("searchChange", function CarbonTrackerComponent_Template_eco_search_filter_bar_searchChange_63_listener($event) { return ctx.onSearchChange($event); })("filterChange", function CarbonTrackerComponent_Template_eco_search_filter_bar_filterChange_63_listener($event) { return ctx.onFilterChange($event); })("clearAll", function CarbonTrackerComponent_Template_eco_search_filter_bar_clearAll_63_listener() { return ctx.clearFilters(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "table", 26)(65, "thead")(66, "tr")(67, "th");
            i0.ɵɵtext(68, "Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "th");
            i0.ɵɵtext(70, "Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "th");
            i0.ɵɵtext(72, "Activity");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "th", 27);
            i0.ɵɵtext(74, "kg CO\u2082e");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "th");
            i0.ɵɵtext(76, "Action");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(77, "tbody");
            i0.ɵɵrepeaterCreate(78, CarbonTrackerComponent_For_79_Template, 12, 4, "tr", null, _forTrack0, false, CarbonTrackerComponent_ForEmpty_80_Template, 3, 0, "tr");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(12, 10, ctx.totalKg(), "1.1-1"), " kg CO\u2082e");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.categories);
            i0.ɵɵadvance(35);
            i0.ɵɵtextInterpolate1(" ", ctx.carbonEngineEstimate !== null ? ctx.carbonEngineEstimate : ctx.estimatedKg(), " kg CO\u2082e\n");
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.form.invalid);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("searchValue", ctx.searchValue())("filterGroups", ctx.filterGroups)("activeFilters", ctx.activeFilters())("resultCount", ctx.filteredActivityList().length)("totalCount", ctx.activityList().length);
            i0.ɵɵadvance(15);
            i0.ɵɵrepeater(ctx.filteredActivityList());
        } }, dependencies: [CommonModule, i1.DecimalPipe, ReactiveFormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.MinValidator, i2.FormGroupDirective, i2.FormControlName, SearchFilterBarComponent], styles: [".total-pill[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-md);\n  padding: 12px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  box-shadow: var(--shadow-card);\n  font-size: 12.5px;\n  color: var(--ink-400);\n}\n.total-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 20px; color: var(--pine-800); }\n\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  gap: 20px;\n  align-items: start;\n}\n\n.form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 14px; }\n.field[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: var(--ink-600); font-weight: 500; }\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid var(--sand-100);\n  background: var(--sand-050);\n  border-radius: var(--radius-sm);\n  padding: 10px 12px;\n  font-size: 14px;\n  color: var(--ink-900);\n  font-family: var(--font-body);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus { border-color: var(--moss-300); }\n.field-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\n.estimate[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--sand-100);\n  border-radius: var(--radius-sm);\n  padding: 10px 14px;\n  font-size: 13px;\n  color: var(--moss-500);\n}\n.estimate[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 16px; color: var(--pine-800); }\n\n.history__header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; }\n.chips[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 6px; }\n.chip[_ngcontent-%COMP%] {\n  border: 1px solid var(--sand-100);\n  background: var(--sand-050);\n  border-radius: 999px;\n  padding: 6px 12px;\n  font-size: 12px;\n  color: var(--ink-600);\n}\n.chip--active[_ngcontent-%COMP%] { background: var(--pine-700); color: var(--white); border-color: var(--pine-700); }\n\n.table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; font-size: 13.5px; }\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { text-align: left; color: var(--ink-400); font-weight: 600; font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.06em; padding: 8px 10px; border-bottom: 1px solid var(--sand-100); }\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 10px; border-bottom: 1px solid var(--sand-050); color: var(--ink-900); }\n.table[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] { text-align: right; }\n.table[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] { text-align: center; color: var(--ink-400); padding: 24px; }\n\n@media (max-width: 900px) {\n  .layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  color: white;\n  border-color: #dc2626;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 10px rgba(220, 38, 38, 0.2);\n}\n\n.delete-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: none;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarbonTrackerComponent, [{
        type: Component,
        args: [{ selector: 'eco-carbon-tracker', standalone: true, imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    SearchFilterBarComponent
                ], template: "<div class=\"eco-page\">\n  <div class=\"eco-page-header\">\n    <div>\n      <span class=\"eco-eyebrow\">Carbon Tracking</span>\n      <h1>Log an activity</h1>\n    </div>\n    <div class=\"total-pill\">\n      <span>Total logged</span>\n      <strong class=\"eco-mono\">{{ totalKg() | number: '1.1-1' }} kg CO\u2082e</strong>\n    </div>\n  </div>\n\n  <div class=\"layout\">\n    <form class=\"eco-card form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n      <h3>New entry</h3>\n\n      <label class=\"field\">\n        <span>Category</span>\n        <select formControlName=\"category\">\n          @for (cat of categories; track cat) {\n            <option [value]=\"cat\">{{ cat }}</option>\n          }\n        </select>\n      </label>\n\n      <label class=\"field\">\n        <span>Activity description</span>\n        <input\n  type=\"text\"\n  formControlName=\"activity\"\n  placeholder=\"e.g. Car commute\"\n  (input)=\"calculateEngineEstimate()\"\n/>\n      </label>\n\n      <div class=\"field-row\">\n        <label class=\"field\">\n          <span>Quantity</span>\n         <input\n  type=\"number\"\n  formControlName=\"quantity\"\n  min=\"0.1\"\n  step=\"0.1\"\n  (input)=\"calculateEngineEstimate()\"\n/>\n        </label>\n        <label class=\"field\">\n          <span>Unit</span>\n          <select formControlName=\"unit\">\n            <option value=\"km\">km</option>\n            <option value=\"kWh\">kWh</option>\n            <option value=\"L\">liters</option>\n            <option value=\"kg\">kg</option>\n            <option value=\"meals\">meals</option>\n            <option value=\"items\">items</option>\n          </select>\n        </label>\n      </div>\n\n      <label class=\"field\">\n        <span>Date</span>\n        <input type=\"date\" formControlName=\"date\" />\n      </label>\n\n      <div class=\"estimate\">\n        <span>Estimated impact</span>\n        <strong class=\"eco-mono\">\n  {{ carbonEngineEstimate !== null ? carbonEngineEstimate : estimatedKg() }} kg CO\u2082e\n</strong>\n      </div>\n\n      <button type=\"submit\" class=\"eco-btn eco-btn--primary\" [disabled]=\"form.invalid\">Log activity</button>\n    </form>\n\n    <div class=\"eco-card history\">\n     <div class=\"history__header\">\n  <h3>Activity history</h3>\n</div>\n\n<eco-search-filter-bar\n  placeholder=\"Search activities...\"\n  [searchValue]=\"searchValue()\"\n  [filterGroups]=\"filterGroups\"\n  [activeFilters]=\"activeFilters()\"\n  [resultCount]=\"filteredActivityList().length\"\n  [totalCount]=\"activityList().length\"\n  (searchChange)=\"onSearchChange($event)\"\n  (filterChange)=\"onFilterChange($event)\"\n  (clearAll)=\"clearFilters()\">\n</eco-search-filter-bar>\n\n      <table class=\"table\">\n        <thead>\n          <tr><th>Date</th><th>Category</th><th>Activity</th><th class=\"right\">kg CO\u2082e</th><th>Action</th></tr>\n        </thead>\n       <tbody>\n  @for (e of filteredActivityList(); track e.id) {\n    <tr>\n      <td>{{ e.activityDate }}</td>\n      <td>{{ e.category }}</td>\n      <td>{{ e.description }}</td>\n      <td class=\"right\">{{ e.carbonEmission }} kg CO\u2082e</td>\n      <td>\n  <button\n    type=\"button\"\n    class=\"delete-btn\"\n    (click)=\"deleteActivity(e.id)\">\n    \u274C\n  </button>\n</td>\n\n    </tr>\n  } @empty {\n    <tr>\n      <td colspan=\"5\" class=\"empty\">\n        No entries in this category yet.\n      </td>\n    </tr>\n  }\n</tbody>\n      </table>\n    </div>\n  </div>\n</div>\n", styles: [".total-pill {\n  background: var(--white);\n  border-radius: var(--radius-md);\n  padding: 12px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  box-shadow: var(--shadow-card);\n  font-size: 12.5px;\n  color: var(--ink-400);\n}\n.total-pill strong { font-size: 20px; color: var(--pine-800); }\n\n.layout {\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  gap: 20px;\n  align-items: start;\n}\n\n.form { display: flex; flex-direction: column; gap: 14px; }\n.field { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: var(--ink-600); font-weight: 500; }\n.field input, .field select {\n  border: 1px solid var(--sand-100);\n  background: var(--sand-050);\n  border-radius: var(--radius-sm);\n  padding: 10px 12px;\n  font-size: 14px;\n  color: var(--ink-900);\n  font-family: var(--font-body);\n}\n.field input:focus, .field select:focus { border-color: var(--moss-300); }\n.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\n.estimate {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--sand-100);\n  border-radius: var(--radius-sm);\n  padding: 10px 14px;\n  font-size: 13px;\n  color: var(--moss-500);\n}\n.estimate strong { font-size: 16px; color: var(--pine-800); }\n\n.history__header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; }\n.chips { display: flex; flex-wrap: wrap; gap: 6px; }\n.chip {\n  border: 1px solid var(--sand-100);\n  background: var(--sand-050);\n  border-radius: 999px;\n  padding: 6px 12px;\n  font-size: 12px;\n  color: var(--ink-600);\n}\n.chip--active { background: var(--pine-700); color: var(--white); border-color: var(--pine-700); }\n\n.table { width: 100%; border-collapse: collapse; font-size: 13.5px; }\n.table th { text-align: left; color: var(--ink-400); font-weight: 600; font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.06em; padding: 8px 10px; border-bottom: 1px solid var(--sand-100); }\n.table td { padding: 10px; border-bottom: 1px solid var(--sand-050); color: var(--ink-900); }\n.table .right { text-align: right; }\n.table .empty { text-align: center; color: var(--ink-400); padding: 24px; }\n\n@media (max-width: 900px) {\n  .layout { grid-template-columns: 1fr; }\n}\n.delete-btn {\n  background: #fff5f5;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n\n.delete-btn:hover {\n  background: #dc2626;\n  color: white;\n  border-color: #dc2626;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 10px rgba(220, 38, 38, 0.2);\n}\n\n.delete-btn:active {\n  transform: translateY(0);\n  box-shadow: none;\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CarbonTrackerComponent, { className: "CarbonTrackerComponent", filePath: "app/components/carbon-tracker/carbon-tracker.component.ts", lineNumber: 54 }); })();
//# sourceMappingURL=carbon-tracker.component.js.map