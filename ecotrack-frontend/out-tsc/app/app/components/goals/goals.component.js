import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { FormsModule } from '@angular/forms';
import { GoalService } from '../../services/goal.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
function GoalsComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 10)(2, "div", 11)(3, "div")(4, "span", 3);
    i0.ɵɵtext(5, "NEW GOAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2");
    i0.ɵɵtext(7, "Create New Goal");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 12);
    i0.ɵɵlistener("click", function GoalsComponent_Conditional_9_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeGoalForm()); });
    i0.ɵɵtext(9, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 13)(11, "div", 14)(12, "label");
    i0.ɵɵtext(13, "Goal Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "input", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function GoalsComponent_Conditional_9_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.goal.title, $event) || (ctx_r1.goal.title = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 14)(16, "label");
    i0.ɵɵtext(17, "Goal Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function GoalsComponent_Conditional_9_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.goal.type, $event) || (ctx_r1.goal.type = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 14)(20, "label");
    i0.ɵɵtext(21, "Target");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "input", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function GoalsComponent_Conditional_9_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.goal.targetKg, $event) || (ctx_r1.goal.targetKg = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 14)(24, "label");
    i0.ɵɵtext(25, "Unit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "input", 18);
    i0.ɵɵtwoWayListener("ngModelChange", function GoalsComponent_Conditional_9_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.goal.unit, $event) || (ctx_r1.goal.unit = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 14)(28, "label");
    i0.ɵɵtext(29, "Deadline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "input", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function GoalsComponent_Conditional_9_Template_input_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.goal.endDate, $event) || (ctx_r1.goal.endDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "div", 20)(32, "button", 21);
    i0.ɵɵlistener("click", function GoalsComponent_Conditional_9_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeGoalForm()); });
    i0.ɵɵtext(33, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "button", 22);
    i0.ɵɵlistener("click", function GoalsComponent_Conditional_9_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveGoal()); });
    i0.ɵɵtext(35, " Save Goal ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.goal.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.goal.type);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.goal.targetKg);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.goal.unit);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.goal.endDate);
} }
function GoalsComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 23);
    i0.ɵɵtext(2, " \uD83C\uDFAF ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "No goals yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, " Create your first sustainability goal and start tracking your progress. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 4);
    i0.ɵɵlistener("click", function GoalsComponent_Conditional_32_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openGoalForm()); });
    i0.ɵɵtext(8, " + Create Goal ");
    i0.ɵɵelementEnd()();
} }
function GoalsComponent_Conditional_33_For_2_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵlistener("click", function GoalsComponent_Conditional_33_For_2_Conditional_18_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r6); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(1, "div", 42)(2, "span");
    i0.ɵɵtext(3, "Task XP");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 43);
    i0.ɵɵelement(7, "div", 44);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const goal_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", ctx_r1.goalXpEarned(goal_r5), " / ", ctx_r1.goalXpTotal(goal_r5), " XP");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r1.progressPct(goal_r5), "%");
} }
function GoalsComponent_Conditional_33_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 26);
    i0.ɵɵlistener("click", function GoalsComponent_Conditional_33_For_2_Template_article_click_0_listener() { const goal_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectGoal(goal_r5)); });
    i0.ɵɵelementStart(1, "div", 27)(2, "span", 28);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 29);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 30)(9, "div", 31);
    i0.ɵɵelement(10, "div", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 33)(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 34);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, GoalsComponent_Conditional_33_For_2_Conditional_18_Template, 8, 4, "div", 35);
    i0.ɵɵelementStart(19, "div", 36)(20, "span", 37);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 38)(23, "button", 39);
    i0.ɵɵlistener("click", function GoalsComponent_Conditional_33_For_2_Template_button_click_23_listener($event) { const goal_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r1.bump(goal_r5)); });
    i0.ɵɵtext(24, " Log Progress ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "button", 40);
    i0.ɵɵlistener("click", function GoalsComponent_Conditional_33_For_2_Template_button_click_25_listener($event) { const goal_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r1.deleteGoal(goal_r5.id)); });
    i0.ɵɵtext(26, " \uD83D\uDDD1 ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const goal_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("goal-card--selected", ctx_r1.selectedGoalId === goal_r5.id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", goal_r5.type, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.statusClass(goal_r5.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", goal_r5.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", goal_r5.title, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", ctx_r1.progressPct(goal_r5) + "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate3(" ", goal_r5.currentKg, "/", goal_r5.targetKg, " ", goal_r5.unit, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.progressPct(goal_r5), "% ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.progressPct(goal_r5), "% complete ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(18, ctx_r1.selectedGoalId === goal_r5.id ? 18 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Due ", goal_r5.endDate, " ");
} }
function GoalsComponent_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵrepeaterCreate(1, GoalsComponent_Conditional_33_For_2_Template, 27, 15, "article", 25, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.goalList);
} }
export class GoalsComponent {
    Math = Math;
    data = inject(MockDataService);
    goalService = inject(GoalService);
    // Popup control
    showGoalForm = false;
    goal = {
        title: '',
        type: '',
        targetKg: 0,
        currentKg: 0,
        unit: '',
        startDate: '',
        endDate: '',
        status: 'Not Started',
        email: ''
    };
    goalList = [];
    // Gamification: which goal/task is currently selected to reveal its XP progress.
    selectedGoalId = null;
    selectGoal(goal) {
        this.selectedGoalId = this.selectedGoalId === goal.id ? null : goal.id;
    }
    goalXpTotal(goal) {
        return this.data.goalXpTotal(goal);
    }
    goalXpEarned(goal) {
        return this.data.goalXpEarned(goal);
    }
    get summary() {
        return {
            total: this.goalList.length,
            achieved: this.goalList.filter(g => g.status === 'Achieved').length,
            onTrack: this.goalList.filter(g => g.status === 'On Track').length,
            atRisk: this.goalList.filter(g => g.status === 'At Risk').length,
        };
    }
    openGoalForm() {
        this.showGoalForm = true;
    }
    closeGoalForm() {
        this.showGoalForm = false;
    }
    progressPct(goal) {
        const current = Number(goal.currentKg) || 0;
        const target = Number(goal.targetKg) || 0;
        if (target <= 0) {
            return 0;
        }
        const percentage = (current / target) * 100;
        return Math.min(100, Math.max(0, Math.round(percentage)));
    }
    bump(goal) {
        const value = prompt("Enter Current Progress", goal.currentKg);
        if (value == null)
            return;
        const newValue = Number(value);
        // Validation
        if (isNaN(newValue)) {
            alert("Please enter a valid number.");
            return;
        }
        if (newValue < 0) {
            alert("Progress cannot be negative.");
            return;
        }
        if (newValue > goal.targetKg) {
            alert("Progress cannot exceed the target.");
            return;
        }
        this.goalService.updateProgress(goal.id, newValue).subscribe({
            next: () => {
                this.ngOnInit();
                alert("Progress Updated Successfully");
            },
            error: (err) => {
                console.error(err);
                alert("Update Failed");
            }
        });
    }
    statusClass(status) {
        return {
            'On Track': 'status--ontrack',
            'At Risk': 'status--atrisk',
            Achieved: 'status--achieved',
            'Not Started': 'status--notstarted',
        }[status];
    }
    saveGoal() {
        this.goal.currentKg = 0;
        this.goal.startDate = new Date().toISOString().split('T')[0];
        this.goal.status = "Not Started";
        this.goal.email = localStorage.getItem("email") || "";
        this.goalService.saveGoal(this.goal).subscribe({
            next: () => {
                alert("Goal Saved Successfully");
                this.closeGoalForm();
                this.ngOnInit();
            },
        });
    }
    ngOnInit() {
        const email = localStorage.getItem("email");
        if (email) {
            this.goalService.getGoals(email).subscribe({
                next: (data) => {
                    this.goalList = data;
                    console.log("Goals from DB:", data);
                    // Gamification: award task XP + badge the first time a goal is Achieved.
                    this.goalList.forEach((g) => this.data.recordGoalCompletion(g));
                },
                error: (err) => {
                    console.error(err);
                }
            });
        }
    }
    deleteGoal(id) {
        if (confirm("Are you sure you want to delete this goal?")) {
            this.goalService.deleteGoal(id).subscribe({
                next: () => {
                    alert("Goal Deleted Successfully");
                    this.ngOnInit();
                },
                error: (err) => {
                    console.log("Status:", err.status);
                    console.log("Error:", err.error);
                    console.log("Full Error:", err);
                    alert("Delete Failed");
                }
            });
        }
    }
    static ɵfac = function GoalsComponent_Factory(t) { return new (t || GoalsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GoalsComponent, selectors: [["eco-goals"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 34, vars: 6, consts: [[1, "goals-page"], [1, "goals-header"], [1, "header-content"], [1, "eco-eyebrow"], [1, "new-goal-btn", 3, "click"], [1, "goal-form-overlay"], [1, "summary-grid"], [1, "summary-card"], [1, "goals-section"], [1, "empty-goals"], [1, "goal-form-card"], [1, "form-header"], [1, "close-form-btn", 3, "click"], [1, "form-grid"], [1, "form-group"], ["type", "text", "placeholder", "Example: Plant trees", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Example: Plant Trees", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "kg / days / trees", 3, "ngModelChange", "ngModel"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "cancel-btn", 3, "click"], [1, "save-goal-btn", 3, "click"], [1, "empty-icon"], [1, "goal-grid"], [1, "goal-card", 3, "goal-card--selected"], [1, "goal-card", 3, "click"], [1, "goal-card-top"], [1, "goal-type"], [1, "goal-status", 3, "ngClass"], [1, "progress-area"], [1, "progress-track"], [1, "progress-fill"], [1, "progress-info"], [1, "complete-text"], [1, "xp-panel"], [1, "goal-footer"], [1, "deadline"], [1, "goal-actions"], [1, "progress-btn", 3, "click"], ["title", "Delete Goal", 1, "delete-btn", 3, "click"], [1, "xp-panel", 3, "click"], [1, "xp-panel-head"], [1, "xp-track"], [1, "xp-fill"]], template: function GoalsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "SUSTAINABILITY GOALS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Track what you're working toward");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵlistener("click", function GoalsComponent_Template_button_click_7_listener() { return ctx.openGoalForm(); });
            i0.ɵɵtext(8, " + New Goal ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(9, GoalsComponent_Conditional_9_Template, 36, 5, "div", 5);
            i0.ɵɵelementStart(10, "section", 6)(11, "div", 7)(12, "strong");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15, "Total goals");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 7)(17, "strong");
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "span");
            i0.ɵɵtext(20, "On track");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 7)(22, "strong");
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "span");
            i0.ɵɵtext(25, "Achieved");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "div", 7)(27, "strong");
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "span");
            i0.ɵɵtext(30, "At risk");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(31, "section", 8);
            i0.ɵɵtemplate(32, GoalsComponent_Conditional_32_Template, 9, 0, "div", 9)(33, GoalsComponent_Conditional_33_Template, 3, 0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(9, ctx.showGoalForm ? 9 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.summary.total);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.summary.onTrack);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.summary.achieved);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.summary.atRisk);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(32, ctx.goalList.length === 0 ? 32 : 33);
        } }, dependencies: [CommonModule, i1.NgClass, FormsModule, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.NgControlStatus, i2.MinValidator, i2.NgModel], styles: ["\n\n\n\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n\n\n.goals-page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px 0 60px;\n}\n\n\n\n\n\n\n\n.goals-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 30px;\n  margin-bottom: 28px;\n}\n\n\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n\n.eco-eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.4px;\n  color: #4f7769;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n}\n\n\n.goals-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Georgia, \"Times New Roman\", serif;\n  font-size: 27px;\n  line-height: 1.15;\n  font-weight: 700;\n  color: #123d30;\n}\n\n\n\n\n\n.new-goal-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 7px;\n  padding: 10px 16px;\n\n  background: #d98d3c;\n  color: white;\n\n  font-size: 12px;\n  font-weight: 700;\n\n  cursor: pointer;\n\n  white-space: nowrap;\n\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease;\n}\n\n\n.new-goal-btn[_ngcontent-%COMP%]:hover {\n  background: #c97d2e;\n  transform: translateY(-1px);\n}\n\n\n\n\n\n\n\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 22px;\n}\n\n\n.summary-card[_ngcontent-%COMP%] {\n  min-height: 88px;\n\n  background: #ffffff;\n\n  border-radius: 12px;\n\n  padding: 17px 18px;\n\n  box-shadow:\n    0 5px 18px rgba(25, 55, 45, 0.08);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n\n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n\n  font-family: \"Courier New\", monospace;\n\n  font-size: 23px;\n  line-height: 1;\n\n  color: #123d30;\n\n  margin-bottom: 7px;\n}\n\n\n.summary-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #718278;\n}\n\n\n\n\n\n\n\n.goals-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n.goal-grid[_ngcontent-%COMP%] {\n  display: grid;\n\n  grid-template-columns:\n    repeat(3, minmax(0, 1fr));\n\n  gap: 14px;\n}\n\n\n\n\n\n\n\n.goal-card[_ngcontent-%COMP%] {\n  min-height: 180px;\n\n  background: #ffffff;\n\n  border-radius: 12px;\n\n  padding: 18px 19px;\n\n  box-shadow:\n    0 5px 18px rgba(25, 55, 45, 0.08);\n\n  border: 2px solid transparent;\n\n  display: flex;\n  flex-direction: column;\n\n  cursor: pointer;\n\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n\n\n.goal-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n\n  box-shadow:\n    0 8px 24px rgba(25, 55, 45, 0.11);\n}\n\n\n.goal-card--selected[_ngcontent-%COMP%] {\n  border-color: #d98d3c;\n\n  box-shadow:\n    0 8px 24px rgba(25, 55, 45, 0.11);\n}\n\n\n\n\n\n\n\n.xp-panel[_ngcontent-%COMP%] {\n  margin-top: 12px;\n\n  padding: 12px 13px;\n\n  background: #f7f4ec;\n\n  border-radius: 9px;\n\n  cursor: default;\n}\n\n\n.xp-panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-bottom: 7px;\n\n  font-size: 10.5px;\n  font-weight: 700;\n\n  color: #4f7769;\n\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n\n\n.xp-panel-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", monospace;\n\n  font-size: 11px;\n\n  color: #123d30;\n\n  text-transform: none;\n\n  letter-spacing: 0;\n}\n\n\n.xp-track[_ngcontent-%COMP%] {\n  width: 100%;\n\n  height: 7px;\n\n  background: #eee9dc;\n\n  border-radius: 20px;\n\n  overflow: hidden;\n}\n\n\n.xp-fill[_ngcontent-%COMP%] {\n  height: 100%;\n\n  min-width: 0;\n\n  background: linear-gradient(90deg, #d98d3c, #285d4d);\n\n  border-radius: 20px;\n\n  transition: width 0.4s ease;\n}\n\n\n\n\n\n\n\n.goal-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  gap: 10px;\n\n  margin-bottom: 12px;\n}\n\n\n.goal-type[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n\n  min-height: 20px;\n\n  padding: 3px 9px;\n\n  border-radius: 20px;\n\n  background: #eee9db;\n\n  color: #587066;\n\n  font-size: 9px;\n  font-weight: 600;\n\n  white-space: nowrap;\n}\n\n\n.goal-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n\n  padding: 4px 9px;\n\n  border-radius: 20px;\n\n  font-size: 8px;\n  font-weight: 800;\n\n  text-transform: uppercase;\n\n  white-space: nowrap;\n}\n\n\n\n\n\n.status--notstarted[_ngcontent-%COMP%] {\n  background: #eee9db;\n  color: #778177;\n}\n\n\n.status--ontrack[_ngcontent-%COMP%] {\n  background: #e0efe8;\n  color: #1d7258;\n}\n\n\n.status--achieved[_ngcontent-%COMP%] {\n  background: #d9eee5;\n  color: #17624c;\n}\n\n\n.status--atrisk[_ngcontent-%COMP%] {\n  background: #f6e4d7;\n  color: #a45c2a;\n}\n\n\n\n\n\n\n\n.goal-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n\n  font-family: Georgia, \"Times New Roman\", serif;\n\n  font-size: 17px;\n\n  line-height: 1.2;\n\n  color: #123d30;\n\n  font-weight: 700;\n}\n\n\n\n\n\n\n\n.progress-area[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n.progress-track[_ngcontent-%COMP%] {\n  width: 100%;\n\n  height: 6px;\n\n  background: #eee9dc;\n\n  border-radius: 20px;\n\n  overflow: hidden;\n}\n\n\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n\n  min-width: 0;\n\n  background: #285d4d;\n\n  border-radius: 20px;\n\n  transition: width 0.4s ease;\n}\n\n\n.progress-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-top: 6px;\n}\n\n\n.progress-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", monospace;\n\n  font-size: 10px;\n\n  color: #50655d;\n}\n\n\n.progress-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", monospace;\n\n  font-size: 10px;\n\n  color: #123d30;\n}\n\n\n\n\n\n\n\n.complete-text[_ngcontent-%COMP%] {\n  margin-top: 10px;\n\n  font-size: 11px;\n\n  color: #27483d;\n}\n\n\n\n\n\n\n\n.goal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  gap: 10px;\n\n  margin-top: auto;\n  padding-top: 15px;\n}\n\n\n.deadline[_ngcontent-%COMP%] {\n  font-size: 9px;\n\n  color: #75837d;\n\n  white-space: nowrap;\n}\n\n\n.goal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n\n  gap: 7px;\n}\n\n\n\n\n\n\n\n.progress-btn[_ngcontent-%COMP%] {\n  height: 33px;\n\n  padding: 0 13px;\n\n  border: 1px solid #79a996;\n\n  border-radius: 7px;\n\n  background: #ffffff;\n\n  color: #164b3b;\n\n  font-size: 10px;\n\n  font-weight: 700;\n\n  cursor: pointer;\n\n  white-space: nowrap;\n\n  transition:\n    background 0.2s ease,\n    color 0.2s ease;\n}\n\n\n.progress-btn[_ngcontent-%COMP%]:hover {\n  background: #164b3b;\n\n  color: #ffffff;\n}\n\n\n\n\n\n\n\n.delete-btn[_ngcontent-%COMP%] {\n  width: 33px;\n  height: 33px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border: 1px solid #d3d8d4;\n\n  border-radius: 6px;\n\n  background: #ffffff;\n\n  color: #65736d;\n\n  font-size: 12px;\n\n  cursor: pointer;\n\n  transition: all 0.2s ease;\n}\n\n\n.delete-btn[_ngcontent-%COMP%]:hover {\n  border-color: #b85c4b;\n\n  color: #b85c4b;\n\n  background: #fff6f4;\n}\n\n\n\n\n\n\n\n.empty-goals[_ngcontent-%COMP%] {\n  background: #ffffff;\n\n  border-radius: 12px;\n\n  min-height: 220px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  text-align: center;\n\n  padding: 30px;\n\n  box-shadow:\n    0 5px 18px rgba(25, 55, 45, 0.08);\n}\n\n\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n\n  margin-bottom: 10px;\n}\n\n\n.empty-goals[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n\n  font-family: Georgia, \"Times New Roman\", serif;\n\n  color: #123d30;\n\n  font-size: 18px;\n}\n\n\n.empty-goals[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n\n  color: #73817b;\n\n  font-size: 11px;\n}\n\n\n\n\n\n\n\n.goal-form-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n\n  inset: 0;\n\n  z-index: 1000;\n\n  background: rgba(13, 45, 35, 0.38);\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 20px;\n}\n\n\n\n\n\n\n\n.goal-form-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 560px;\n\n  background: #ffffff;\n\n  border-radius: 14px;\n\n  padding: 25px;\n\n  box-shadow:\n    0 20px 60px rgba(0, 0, 0, 0.18);\n}\n\n\n.form-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n\n  margin-bottom: 22px;\n}\n\n\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n\n  font-family: Georgia, \"Times New Roman\", serif;\n\n  font-size: 22px;\n\n  color: #123d30;\n}\n\n\n.close-form-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n\n  border: 1px solid #d7ddd9;\n\n  border-radius: 6px;\n\n  background: white;\n\n  color: #53645d;\n\n  font-size: 20px;\n\n  line-height: 1;\n\n  cursor: pointer;\n}\n\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n\n  grid-template-columns: 1fr 1fr;\n\n  gap: 15px;\n}\n\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 10px;\n\n  font-weight: 700;\n\n  color: #31564a;\n}\n\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n\n  height: 38px;\n\n  padding: 0 11px;\n\n  border: 1px solid #d5ddd8;\n\n  border-radius: 7px;\n\n  background: #fbfcfa;\n\n  color: #173e32;\n\n  font-size: 12px;\n\n  outline: none;\n}\n\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #5f917d;\n\n  box-shadow:\n    0 0 0 3px rgba(95, 145, 125, 0.1);\n}\n\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n\n  justify-content: flex-end;\n\n  gap: 9px;\n\n  margin-top: 23px;\n}\n\n\n.cancel-btn[_ngcontent-%COMP%] {\n  height: 37px;\n\n  padding: 0 16px;\n\n  border: 1px solid #83a996;\n\n  border-radius: 7px;\n\n  background: #ffffff;\n\n  color: #285746;\n\n  font-size: 11px;\n\n  font-weight: 700;\n\n  cursor: pointer;\n}\n\n\n.save-goal-btn[_ngcontent-%COMP%] {\n  height: 37px;\n\n  padding: 0 17px;\n\n  border: none;\n\n  border-radius: 7px;\n\n  background: #1d604c;\n\n  color: #ffffff;\n\n  font-size: 11px;\n\n  font-weight: 700;\n\n  cursor: pointer;\n}\n\n\n.save-goal-btn[_ngcontent-%COMP%]:hover {\n  background: #164c3c;\n}\n\n\n\n\n\n\n\n@media (max-width: 900px) {\n\n  .goals-page[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .goal-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n}\n\n\n@media (max-width: 700px) {\n\n  .goals-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .goal-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n}\n\n\n@media (max-width: 450px) {\n\n  .goals-page[_ngcontent-%COMP%] {\n    padding: 20px 14px 40px;\n  }\n\n  .goals-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n\n  .summary-card[_ngcontent-%COMP%] {\n    min-height: 78px;\n    padding: 14px;\n  }\n\n  .goal-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GoalsComponent, [{
        type: Component,
        args: [{ selector: 'eco-goals', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"goals-page\">\n\n  <!-- HEADER -->\n  <section class=\"goals-header\">\n\n    <div class=\"header-content\">\n      <span class=\"eco-eyebrow\">SUSTAINABILITY GOALS</span>\n\n      <h1>Track what you're working toward</h1>\n    </div>\n\n    <button\n      class=\"new-goal-btn\"\n      (click)=\"openGoalForm()\">\n      + New Goal\n    </button>\n\n  </section>\n\n\n  <!-- CREATE GOAL FORM -->\n  @if (showGoalForm) {\n\n    <div class=\"goal-form-overlay\">\n\n      <div class=\"goal-form-card\">\n\n        <div class=\"form-header\">\n          <div>\n            <span class=\"eco-eyebrow\">NEW GOAL</span>\n            <h2>Create New Goal</h2>\n          </div>\n\n          <button\n            class=\"close-form-btn\"\n            (click)=\"closeGoalForm()\">\n            \u00D7\n          </button>\n        </div>\n\n\n        <div class=\"form-grid\">\n\n          <div class=\"form-group\">\n            <label>Goal Title</label>\n\n            <input\n              type=\"text\"\n              [(ngModel)]=\"goal.title\"\n              placeholder=\"Example: Plant trees\">\n          </div>\n\n\n          <div class=\"form-group\">\n            <label>Goal Type</label>\n\n            <input\n              type=\"text\"\n              [(ngModel)]=\"goal.type\"\n              placeholder=\"Example: Plant Trees\">\n          </div>\n\n\n          <div class=\"form-group\">\n            <label>Target</label>\n\n            <input\n              type=\"number\"\n              [(ngModel)]=\"goal.targetKg\"\n              min=\"1\">\n          </div>\n\n\n          <div class=\"form-group\">\n            <label>Unit</label>\n\n            <input\n              type=\"text\"\n              [(ngModel)]=\"goal.unit\"\n              placeholder=\"kg / days / trees\">\n          </div>\n\n\n          <div class=\"form-group\">\n            <label>Deadline</label>\n\n            <input\n              type=\"date\"\n              [(ngModel)]=\"goal.endDate\">\n          </div>\n\n        </div>\n\n\n        <div class=\"form-actions\">\n\n          <button\n            class=\"cancel-btn\"\n            (click)=\"closeGoalForm()\">\n            Cancel\n          </button>\n\n          <button\n            class=\"save-goal-btn\"\n            (click)=\"saveGoal()\">\n            Save Goal\n          </button>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  }\n\n\n  <!-- SUMMARY -->\n  <section class=\"summary-grid\">\n\n    <div class=\"summary-card\">\n\n      <strong>{{ summary.total }}</strong>\n\n      <span>Total goals</span>\n\n    </div>\n\n\n    <div class=\"summary-card\">\n\n      <strong>{{ summary.onTrack }}</strong>\n\n      <span>On track</span>\n\n    </div>\n\n\n    <div class=\"summary-card\">\n\n      <strong>{{ summary.achieved }}</strong>\n\n      <span>Achieved</span>\n\n    </div>\n\n\n    <div class=\"summary-card\">\n\n      <strong>{{ summary.atRisk }}</strong>\n\n      <span>At risk</span>\n\n    </div>\n\n  </section>\n\n\n  <!-- GOALS -->\n  <section class=\"goals-section\">\n\n    @if (goalList.length === 0) {\n\n      <div class=\"empty-goals\">\n\n        <div class=\"empty-icon\">\n          \uD83C\uDFAF\n        </div>\n\n        <h3>No goals yet</h3>\n\n        <p>\n          Create your first sustainability goal and start tracking your progress.\n        </p>\n\n        <button\n          class=\"new-goal-btn\"\n          (click)=\"openGoalForm()\">\n          + Create Goal\n        </button>\n\n      </div>\n\n    }\n\n\n    @else {\n\n      <div class=\"goal-grid\">\n\n        @for (goal of goalList; track goal.id) {\n\n          <article\n            class=\"goal-card\"\n            [class.goal-card--selected]=\"selectedGoalId === goal.id\"\n            (click)=\"selectGoal(goal)\">\n\n\n            <!-- CARD TOP -->\n            <div class=\"goal-card-top\">\n\n              <span class=\"goal-type\">\n                {{ goal.type }}\n              </span>\n\n\n              <span\n                class=\"goal-status\"\n                [ngClass]=\"statusClass(goal.status)\">\n\n                {{ goal.status }}\n\n              </span>\n\n            </div>\n\n\n            <!-- TITLE -->\n            <h3>\n              {{ goal.title }}\n            </h3>\n\n\n            <!-- PROGRESS -->\n            <div class=\"progress-area\">\n\n              <div class=\"progress-track\">\n\n               <div\n  class=\"progress-fill\"\n  [style.width]=\"progressPct(goal) + '%'\">\n</div>\n\n              </div>\n\n\n              <div class=\"progress-info\">\n\n                <span>\n                  {{ goal.currentKg }}/{{ goal.targetKg }}\n                  {{ goal.unit }}\n                </span>\n\n                <strong>\n                  {{ progressPct(goal) }}%\n                </strong>\n\n              </div>\n\n            </div>\n\n\n            <!-- COMPLETE TEXT -->\n            <div class=\"complete-text\">\n              {{ progressPct(goal) }}% complete\n            </div>\n\n\n            <!-- XP PROGRESS (shown when this task is selected) -->\n            @if (selectedGoalId === goal.id) {\n              <div class=\"xp-panel\" (click)=\"$event.stopPropagation()\">\n                <div class=\"xp-panel-head\">\n                  <span>Task XP</span>\n                  <strong>{{ goalXpEarned(goal) }} / {{ goalXpTotal(goal) }} XP</strong>\n                </div>\n                <div class=\"xp-track\">\n                  <div class=\"xp-fill\" [style.width.%]=\"progressPct(goal)\"></div>\n                </div>\n              </div>\n            }\n\n\n            <!-- FOOTER -->\n            <div class=\"goal-footer\">\n\n              <span class=\"deadline\">\n                Due {{ goal.endDate }}\n              </span>\n\n\n              <div class=\"goal-actions\">\n\n                <button\n                  class=\"progress-btn\"\n                  (click)=\"$event.stopPropagation(); bump(goal)\">\n                  Log Progress\n                </button>\n\n\n                <button\n                  class=\"delete-btn\"\n                  (click)=\"$event.stopPropagation(); deleteGoal(goal.id!)\"\n                  title=\"Delete Goal\">\n                  \uD83D\uDDD1\n                </button>\n\n              </div>\n\n            </div>\n\n          </article>\n\n        }\n\n      </div>\n\n    }\n\n  </section>\n\n</div>", styles: ["/* =========================================\n   ECO TRACK - GOALS PAGE\n   ========================================= */\n\n* {\n  box-sizing: border-box;\n}\n\n\n/* PAGE */\n\n.goals-page {\n  width: 100%;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px 0 60px;\n}\n\n\n/* =========================================\n   HEADER\n   ========================================= */\n\n.goals-header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 30px;\n  margin-bottom: 28px;\n}\n\n\n.header-content {\n  display: flex;\n  flex-direction: column;\n}\n\n\n.eco-eyebrow {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.4px;\n  color: #4f7769;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n}\n\n\n.goals-header h1 {\n  margin: 0;\n  font-family: Georgia, \"Times New Roman\", serif;\n  font-size: 27px;\n  line-height: 1.15;\n  font-weight: 700;\n  color: #123d30;\n}\n\n\n/* NEW GOAL BUTTON */\n\n.new-goal-btn {\n  border: none;\n  border-radius: 7px;\n  padding: 10px 16px;\n\n  background: #d98d3c;\n  color: white;\n\n  font-size: 12px;\n  font-weight: 700;\n\n  cursor: pointer;\n\n  white-space: nowrap;\n\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease;\n}\n\n\n.new-goal-btn:hover {\n  background: #c97d2e;\n  transform: translateY(-1px);\n}\n\n\n/* =========================================\n   SUMMARY\n   ========================================= */\n\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 22px;\n}\n\n\n.summary-card {\n  min-height: 88px;\n\n  background: #ffffff;\n\n  border-radius: 12px;\n\n  padding: 17px 18px;\n\n  box-shadow:\n    0 5px 18px rgba(25, 55, 45, 0.08);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n\n.summary-card strong {\n  display: block;\n\n  font-family: \"Courier New\", monospace;\n\n  font-size: 23px;\n  line-height: 1;\n\n  color: #123d30;\n\n  margin-bottom: 7px;\n}\n\n\n.summary-card span {\n  font-size: 10px;\n  color: #718278;\n}\n\n\n/* =========================================\n   GOALS SECTION\n   ========================================= */\n\n.goals-section {\n  width: 100%;\n}\n\n\n.goal-grid {\n  display: grid;\n\n  grid-template-columns:\n    repeat(3, minmax(0, 1fr));\n\n  gap: 14px;\n}\n\n\n/* =========================================\n   GOAL CARD\n   ========================================= */\n\n.goal-card {\n  min-height: 180px;\n\n  background: #ffffff;\n\n  border-radius: 12px;\n\n  padding: 18px 19px;\n\n  box-shadow:\n    0 5px 18px rgba(25, 55, 45, 0.08);\n\n  border: 2px solid transparent;\n\n  display: flex;\n  flex-direction: column;\n\n  cursor: pointer;\n\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n\n\n.goal-card:hover {\n  transform: translateY(-2px);\n\n  box-shadow:\n    0 8px 24px rgba(25, 55, 45, 0.11);\n}\n\n\n.goal-card--selected {\n  border-color: #d98d3c;\n\n  box-shadow:\n    0 8px 24px rgba(25, 55, 45, 0.11);\n}\n\n\n/* =========================================\n   TASK XP PANEL (shown when a task/goal is selected)\n   ========================================= */\n\n.xp-panel {\n  margin-top: 12px;\n\n  padding: 12px 13px;\n\n  background: #f7f4ec;\n\n  border-radius: 9px;\n\n  cursor: default;\n}\n\n\n.xp-panel-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-bottom: 7px;\n\n  font-size: 10.5px;\n  font-weight: 700;\n\n  color: #4f7769;\n\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n\n\n.xp-panel-head strong {\n  font-family: \"Courier New\", monospace;\n\n  font-size: 11px;\n\n  color: #123d30;\n\n  text-transform: none;\n\n  letter-spacing: 0;\n}\n\n\n.xp-track {\n  width: 100%;\n\n  height: 7px;\n\n  background: #eee9dc;\n\n  border-radius: 20px;\n\n  overflow: hidden;\n}\n\n\n.xp-fill {\n  height: 100%;\n\n  min-width: 0;\n\n  background: linear-gradient(90deg, #d98d3c, #285d4d);\n\n  border-radius: 20px;\n\n  transition: width 0.4s ease;\n}\n\n\n/* =========================================\n   CARD TOP\n   ========================================= */\n\n.goal-card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  gap: 10px;\n\n  margin-bottom: 12px;\n}\n\n\n.goal-type {\n  display: inline-flex;\n  align-items: center;\n\n  min-height: 20px;\n\n  padding: 3px 9px;\n\n  border-radius: 20px;\n\n  background: #eee9db;\n\n  color: #587066;\n\n  font-size: 9px;\n  font-weight: 600;\n\n  white-space: nowrap;\n}\n\n\n.goal-status {\n  display: inline-flex;\n  align-items: center;\n\n  padding: 4px 9px;\n\n  border-radius: 20px;\n\n  font-size: 8px;\n  font-weight: 800;\n\n  text-transform: uppercase;\n\n  white-space: nowrap;\n}\n\n\n/* STATUS COLORS */\n\n.status--notstarted {\n  background: #eee9db;\n  color: #778177;\n}\n\n\n.status--ontrack {\n  background: #e0efe8;\n  color: #1d7258;\n}\n\n\n.status--achieved {\n  background: #d9eee5;\n  color: #17624c;\n}\n\n\n.status--atrisk {\n  background: #f6e4d7;\n  color: #a45c2a;\n}\n\n\n/* =========================================\n   TITLE\n   ========================================= */\n\n.goal-card h3 {\n  margin: 0 0 15px;\n\n  font-family: Georgia, \"Times New Roman\", serif;\n\n  font-size: 17px;\n\n  line-height: 1.2;\n\n  color: #123d30;\n\n  font-weight: 700;\n}\n\n\n/* =========================================\n   PROGRESS\n   ========================================= */\n\n.progress-area {\n  width: 100%;\n}\n\n\n.progress-track {\n  width: 100%;\n\n  height: 6px;\n\n  background: #eee9dc;\n\n  border-radius: 20px;\n\n  overflow: hidden;\n}\n\n\n.progress-fill {\n  height: 100%;\n\n  min-width: 0;\n\n  background: #285d4d;\n\n  border-radius: 20px;\n\n  transition: width 0.4s ease;\n}\n\n\n.progress-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-top: 6px;\n}\n\n\n.progress-info span {\n  font-family: \"Courier New\", monospace;\n\n  font-size: 10px;\n\n  color: #50655d;\n}\n\n\n.progress-info strong {\n  font-family: \"Courier New\", monospace;\n\n  font-size: 10px;\n\n  color: #123d30;\n}\n\n\n/* =========================================\n   COMPLETE TEXT\n   ========================================= */\n\n.complete-text {\n  margin-top: 10px;\n\n  font-size: 11px;\n\n  color: #27483d;\n}\n\n\n/* =========================================\n   FOOTER\n   ========================================= */\n\n.goal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  gap: 10px;\n\n  margin-top: auto;\n  padding-top: 15px;\n}\n\n\n.deadline {\n  font-size: 9px;\n\n  color: #75837d;\n\n  white-space: nowrap;\n}\n\n\n.goal-actions {\n  display: flex;\n  align-items: center;\n\n  gap: 7px;\n}\n\n\n/* =========================================\n   LOG PROGRESS\n   ========================================= */\n\n.progress-btn {\n  height: 33px;\n\n  padding: 0 13px;\n\n  border: 1px solid #79a996;\n\n  border-radius: 7px;\n\n  background: #ffffff;\n\n  color: #164b3b;\n\n  font-size: 10px;\n\n  font-weight: 700;\n\n  cursor: pointer;\n\n  white-space: nowrap;\n\n  transition:\n    background 0.2s ease,\n    color 0.2s ease;\n}\n\n\n.progress-btn:hover {\n  background: #164b3b;\n\n  color: #ffffff;\n}\n\n\n/* =========================================\n   DELETE\n   ========================================= */\n\n.delete-btn {\n  width: 33px;\n  height: 33px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border: 1px solid #d3d8d4;\n\n  border-radius: 6px;\n\n  background: #ffffff;\n\n  color: #65736d;\n\n  font-size: 12px;\n\n  cursor: pointer;\n\n  transition: all 0.2s ease;\n}\n\n\n.delete-btn:hover {\n  border-color: #b85c4b;\n\n  color: #b85c4b;\n\n  background: #fff6f4;\n}\n\n\n/* =========================================\n   EMPTY STATE\n   ========================================= */\n\n.empty-goals {\n  background: #ffffff;\n\n  border-radius: 12px;\n\n  min-height: 220px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  text-align: center;\n\n  padding: 30px;\n\n  box-shadow:\n    0 5px 18px rgba(25, 55, 45, 0.08);\n}\n\n\n.empty-icon {\n  font-size: 32px;\n\n  margin-bottom: 10px;\n}\n\n\n.empty-goals h3 {\n  margin: 0 0 7px;\n\n  font-family: Georgia, \"Times New Roman\", serif;\n\n  color: #123d30;\n\n  font-size: 18px;\n}\n\n\n.empty-goals p {\n  margin: 0 0 18px;\n\n  color: #73817b;\n\n  font-size: 11px;\n}\n\n\n/* =========================================\n   FORM OVERLAY\n   ========================================= */\n\n.goal-form-overlay {\n  position: fixed;\n\n  inset: 0;\n\n  z-index: 1000;\n\n  background: rgba(13, 45, 35, 0.38);\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 20px;\n}\n\n\n/* =========================================\n   FORM CARD\n   ========================================= */\n\n.goal-form-card {\n  width: 100%;\n  max-width: 560px;\n\n  background: #ffffff;\n\n  border-radius: 14px;\n\n  padding: 25px;\n\n  box-shadow:\n    0 20px 60px rgba(0, 0, 0, 0.18);\n}\n\n\n.form-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n\n  margin-bottom: 22px;\n}\n\n\n.form-header h2 {\n  margin: 0;\n\n  font-family: Georgia, \"Times New Roman\", serif;\n\n  font-size: 22px;\n\n  color: #123d30;\n}\n\n\n.close-form-btn {\n  width: 30px;\n  height: 30px;\n\n  border: 1px solid #d7ddd9;\n\n  border-radius: 6px;\n\n  background: white;\n\n  color: #53645d;\n\n  font-size: 20px;\n\n  line-height: 1;\n\n  cursor: pointer;\n}\n\n\n.form-grid {\n  display: grid;\n\n  grid-template-columns: 1fr 1fr;\n\n  gap: 15px;\n}\n\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n\n.form-group label {\n  font-size: 10px;\n\n  font-weight: 700;\n\n  color: #31564a;\n}\n\n\n.form-group input {\n  width: 100%;\n\n  height: 38px;\n\n  padding: 0 11px;\n\n  border: 1px solid #d5ddd8;\n\n  border-radius: 7px;\n\n  background: #fbfcfa;\n\n  color: #173e32;\n\n  font-size: 12px;\n\n  outline: none;\n}\n\n\n.form-group input:focus {\n  border-color: #5f917d;\n\n  box-shadow:\n    0 0 0 3px rgba(95, 145, 125, 0.1);\n}\n\n\n.form-actions {\n  display: flex;\n\n  justify-content: flex-end;\n\n  gap: 9px;\n\n  margin-top: 23px;\n}\n\n\n.cancel-btn {\n  height: 37px;\n\n  padding: 0 16px;\n\n  border: 1px solid #83a996;\n\n  border-radius: 7px;\n\n  background: #ffffff;\n\n  color: #285746;\n\n  font-size: 11px;\n\n  font-weight: 700;\n\n  cursor: pointer;\n}\n\n\n.save-goal-btn {\n  height: 37px;\n\n  padding: 0 17px;\n\n  border: none;\n\n  border-radius: 7px;\n\n  background: #1d604c;\n\n  color: #ffffff;\n\n  font-size: 11px;\n\n  font-weight: 700;\n\n  cursor: pointer;\n}\n\n\n.save-goal-btn:hover {\n  background: #164c3c;\n}\n\n\n/* =========================================\n   RESPONSIVE\n   ========================================= */\n\n@media (max-width: 900px) {\n\n  .goals-page {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .goal-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n}\n\n\n@media (max-width: 700px) {\n\n  .goals-header {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .summary-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .goal-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n\n}\n\n\n@media (max-width: 450px) {\n\n  .goals-page {\n    padding: 20px 14px 40px;\n  }\n\n  .goals-header h1 {\n    font-size: 23px;\n  }\n\n  .summary-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n\n  .summary-card {\n    min-height: 78px;\n    padding: 14px;\n  }\n\n  .goal-card {\n    padding: 16px;\n  }\n\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GoalsComponent, { className: "GoalsComponent", filePath: "app/components/goals/goals.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=goals.component.js.map