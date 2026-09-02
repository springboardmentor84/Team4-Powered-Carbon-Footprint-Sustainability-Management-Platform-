import { Component, computed, effect, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarbonService } from '../../services/carbon.service';
import { GoalService } from '../../services/goal.service';
import { CarbonChartComponent } from '../carbon-chart/carbon-chart.component';
import { MockDataService } from '../../services/mock-data.service';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
const _c0 = () => ["/carbon-tracker"];
const _c1 = () => ["/reports"];
const _c2 = () => ["/goals"];
function DashboardComponent_Conditional_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "p");
    i0.ɵɵtext(2, "No activities logged yet.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 6);
    i0.ɵɵtext(4, " Log your first activity ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c0));
} }
function DashboardComponent_Conditional_83_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "div", 34);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 35)(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 36)(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "kg CO\u2082e");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const activity_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", activity_r1.category === "Transportation" ? "\uD83D\uDE97" : activity_r1.category === "Electricity Usage" ? "\u26A1" : activity_r1.category === "Food" ? "\uD83C\uDF7D\uFE0F" : activity_r1.category === "Waste" ? "\u267B\uFE0F" : "\uD83C\uDF31", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", activity_r1.category || "Other", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", activity_r1.description || "Carbon activity", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", activity_r1.activityDate, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(13, 5, activity_r1.carbonEmission, "1.2-2"), " ");
} }
function DashboardComponent_Conditional_83_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵrepeaterCreate(1, DashboardComponent_Conditional_83_For_2_Template, 16, 8, "div", 33, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.activityList().slice().reverse().slice(0, 5));
} }
function DashboardComponent_Conditional_93_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "p");
    i0.ɵɵtext(2, "No goals created yet.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 6);
    i0.ɵɵtext(4, " Create a goal ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c2));
} }
function DashboardComponent_Conditional_94_For_2_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " \u2713 Achieved ");
} }
function DashboardComponent_Conditional_94_For_2_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " In progress ");
} }
function DashboardComponent_Conditional_94_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 41);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "strong", 42);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 43);
    i0.ɵɵelement(11, "div", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 45)(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtemplate(16, DashboardComponent_Conditional_94_For_2_Conditional_16_Template, 1, 0)(17, DashboardComponent_Conditional_94_For_2_Conditional_17_Template, 1, 0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const goal_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", goal_r3.title || goal_r3.name || "Carbon Reduction Goal", " ");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("status-achieved", goal_r3.status === "Achieved");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", goal_r3.status || "In Progress", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", goal_r3.targetKg ? i0.ɵɵpipeBind2(9, 12, goal_r3.currentKg / goal_r3.targetKg * 100, "1.0-0") : 0, "%\n");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", goal_r3.targetKg ? ctx_r1.Math.min(100, goal_r3.currentKg / goal_r3.targetKg * 100) : 0, "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" Target: ", goal_r3.targetKg || 0, " ", goal_r3.unit, "\n");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("goal-achieved", goal_r3.status === "Achieved");
    i0.ɵɵadvance();
    i0.ɵɵconditional(16, goal_r3.status === "Achieved" ? 16 : 17);
} }
function DashboardComponent_Conditional_94_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵrepeaterCreate(1, DashboardComponent_Conditional_94_For_2_Template, 18, 15, "div", 38, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.goalList());
} }
export class DashboardComponent {
    carbonService = inject(CarbonService);
    goalService = inject(GoalService);
    data = inject(MockDataService);
    Math = Math;
    username = "";
    activityList = signal([]);
    goalList = signal([]);
    totalCarbon = computed(() => this.activityList().reduce((sum, a) => sum + Number(a.carbonEmission), 0));
    activeGoals = computed(() => this.goalList().filter((g) => g.status !== "Achieved").length);
    achievedGoals = computed(() => this.goalList().filter((g) => g.status === "Achieved").length);
    ecoScore = computed(() => {
        const goals = this.goalList();
        const activities = this.activityList();
        if (goals.length === 0 && activities.length === 0) {
            return 0;
        }
        // Goal completion contribution: maximum 600 points
        const goalScore = goals.length > 0
            ? (this.achievedGoals() / goals.length) * 600
            : 0;
        // Activity contribution: maximum 200 points
        const activityScore = Math.min(activities.length * 20, 200);
        // Carbon activity contribution: maximum 200 points
        const carbonScore = activities.length > 0
            ? Math.max(0, 200 - this.totalCarbon() * 2)
            : 0;
        return Math.min(Math.round(goalScore + activityScore + carbonScore), 1000);
    });
    syncEcoScore = effect(() => {
        this.data.currentEcoScore.set(this.ecoScore());
    });
    sustainabilityInsight = computed(() => {
        const carbon = this.totalCarbon();
        const activities = this.activityList().length;
        if (activities === 0) {
            return {
                icon: '🌱',
                title: 'Start your green journey',
                message: 'Log your first activity to start tracking your carbon footprint.'
            };
        }
        if (carbon <= 20) {
            return {
                icon: '🌿',
                title: 'Great work!',
                message: 'Your carbon footprint is looking good. Keep making sustainable choices.'
            };
        }
        if (carbon <= 50) {
            return {
                icon: '🌱',
                title: 'You are on the right track',
                message: 'Your footprint is moderate. Try reducing high-carbon activities.'
            };
        }
        return {
            icon: '💚',
            title: "Let's reduce your footprint",
            message: 'Consider choosing greener transportation, saving electricity, and reducing waste.'
        };
    });
    ngOnInit() {
        const email = localStorage.getItem("email");
        if (!email)
            return;
        this.username = email.split("@")[0];
        this.carbonService.getActivities(email).subscribe({
            next: (data) => {
                this.activityList.set(data);
            },
            error: (err) => {
                console.error(err);
            }
        });
        this.goalService.getGoals(email).subscribe({
            next: (data) => {
                this.goalList.set(data);
            },
            error: (err) => {
                console.error(err);
            }
        });
    }
    static ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["eco-dashboard"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 95, vars: 33, consts: [[1, "eco-page"], [1, "hero"], [1, "hero__text"], [1, "eco-eyebrow"], [1, "eco-mono"], [1, "hero__actions"], [1, "eco-btn", "eco-btn--primary", 3, "routerLink"], [1, "eco-btn", "eco-btn--ghost", 3, "routerLink"], [1, "hero__ring-card", "eco-card"], [1, "ring"], ["viewBox", "0 0 120 120", "width", "150", "height", "150"], ["cx", "60", "cy", "60", "r", "54", "fill", "none", "stroke", "#efe9da", "stroke-width", "9"], ["cx", "60", "cy", "60", "r", "54", "fill", "none", "stroke", "#84a98c", "stroke-width", "9", "stroke-linecap", "round", "transform", "rotate(-90 60 60)"], ["cx", "60", "cy", "60", "r", "40", "fill", "none", "stroke", "#84a98c", "stroke-width", "1", "stroke-dasharray", "2 4", "opacity", "0.6"], [1, "ring__center"], [1, "ring__value", "eco-mono"], [1, "ring__label"], [1, "eco-tag"], [1, "eco-card", "insight-card"], [1, "insight-icon"], [1, "insight-content"], [1, "grid-3"], [1, "eco-card", "stat-card"], [1, "stat-card__value", "eco-mono"], [1, "stat-card__hint"], [1, "grid-2"], [1, "eco-card"], [3, "activities"], [1, "eco-card", "recent-activities"], [1, "section-header"], [1, "empty-state"], [1, "eco-card", "goals-section"], [1, "activity-list"], [1, "activity-row"], [1, "activity-icon"], [1, "activity-info"], [1, "activity-emission"], [1, "goal-list"], [1, "goal-item"], [1, "goal-top"], [1, "goal-info"], [1, "goal-status"], [1, "goal-percent"], [1, "goal-track"], [1, "goal-fill"], [1, "goal-bottom"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Your footprint, this week");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, " You've logged ");
            i0.ɵɵelementStart(9, "strong", 4);
            i0.ɵɵtext(10);
            i0.ɵɵpipe(11, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 5)(14, "a", 6);
            i0.ɵɵtext(15, " Log an activity ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "a", 7);
            i0.ɵɵtext(17, " View reports ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(18, "div", 8)(19, "div", 9);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(20, "svg", 10);
            i0.ɵɵelement(21, "circle", 11)(22, "circle", 12)(23, "circle", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(24, "div", 14)(25, "span", 15);
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "span", 16);
            i0.ɵɵtext(28, " Eco Score ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(29, "span", 17);
            i0.ɵɵtext(30, " Eco Warrior ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(31, "section", 18)(32, "div", 19);
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "div", 20)(35, "span", 3);
            i0.ɵɵtext(36, "SUSTAINABILITY INSIGHT");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "h3");
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "p");
            i0.ɵɵtext(40);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "section", 21)(42, "div", 22)(43, "span", 3);
            i0.ɵɵtext(44, " Carbon Emission ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "span", 23);
            i0.ɵɵtext(46);
            i0.ɵɵpipe(47, "number");
            i0.ɵɵelementStart(48, "small");
            i0.ɵɵtext(49, "kg CO\u2082e");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "span", 24);
            i0.ɵɵtext(51);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "div", 22)(53, "span", 3);
            i0.ɵɵtext(54, " Active Goals ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "span", 23);
            i0.ɵɵtext(56);
            i0.ɵɵelementStart(57, "small");
            i0.ɵɵtext(58);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "span", 24);
            i0.ɵɵtext(60, " Goals in progress ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(61, "div", 22)(62, "span", 3);
            i0.ɵɵtext(63, " Achieved Goals ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "span", 23);
            i0.ɵɵtext(65);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "span", 24);
            i0.ɵɵtext(67, " Successfully completed ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(68, "section", 25)(69, "div", 26)(70, "h2");
            i0.ɵɵtext(71, "Carbon Emission Overview");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(72, "eco-carbon-chart", 27);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(73, "section", 28)(74, "div", 29)(75, "div")(76, "span", 3);
            i0.ɵɵtext(77, "Activity History");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "h3");
            i0.ɵɵtext(79, "Recent Activities");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(80, "a", 7);
            i0.ɵɵtext(81, " View all ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(82, DashboardComponent_Conditional_82_Template, 5, 2, "div", 30)(83, DashboardComponent_Conditional_83_Template, 3, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "section", 31)(85, "div", 29)(86, "div")(87, "span", 3);
            i0.ɵɵtext(88, "YOUR GOALS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "h3");
            i0.ɵɵtext(90, "Goal Progress");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(91, "a", 7);
            i0.ɵɵtext(92, " View all ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(93, DashboardComponent_Conditional_93_Template, 5, 2, "div", 30)(94, DashboardComponent_Conditional_94_Template, 3, 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" Welcome back, ", ctx.username, " ");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(11, 23, ctx.totalCarbon(), "1.1-1"), " kg CO\u2082e ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate3(" across ", ctx.activityList().length, " activities. ", ctx.activeGoals(), " of ", ctx.goalList().length, " goals are active. ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(29, _c0));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(30, _c1));
            i0.ɵɵadvance(6);
            i0.ɵɵattribute("stroke-dasharray", 2 * 3.14159 * 54)("stroke-dashoffset", 2 * 3.14159 * 54 - ctx.ecoScore() / 1000 * 2 * 3.14159 * 54);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.ecoScore(), " ");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", ctx.sustainabilityInsight().icon, " ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.sustainabilityInsight().title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.sustainabilityInsight().message);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(47, 26, ctx.totalCarbon(), "1.1-1"), " ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.activityList().length, " activities logged ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.activeGoals(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("/ ", ctx.goalList().length, "");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", ctx.achievedGoals(), " ");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("activities", ctx.activityList());
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(31, _c0));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(82, ctx.activityList().length === 0 ? 82 : 83);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(32, _c2));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(93, ctx.goalList().length === 0 ? 93 : 94);
        } }, dependencies: [DecimalPipe,
            RouterLink,
            CarbonChartComponent], styles: ["\n\n\n\n\n.eco-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\n\n\n\n.hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.4fr 0.9fr;\n  gap: 24px;\n  align-items: stretch;\n  margin-bottom: 24px;\n}\n\n.hero__text[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--pine-700), var(--pine-800));\n  border-radius: var(--radius-lg);\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: var(--sand-050);\n  box-shadow: 0 12px 30px rgba(18, 60, 45, 0.12);\n}\n\n.hero__text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--white);\n  font-size: 34px;\n  margin: 8px 0 12px;\n}\n\n.hero__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--sand-100);\n  line-height: 1.7;\n}\n\n.hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 14px;\n}\n\n.hero__ring-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  min-height: 250px;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n\n.hero__ring-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 28px rgba(18, 60, 45, 0.12);\n}\n\n.ring[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ring__center[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.ring__value[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  color: var(--pine-800);\n}\n\n.ring__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ink-400);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.eco-tag[_ngcontent-%COMP%] {\n  background: #e3efdf;\n  color: #315c43;\n  padding: 7px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n\n\n\n\n\n.insight-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding: 22px 24px;\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  background: linear-gradient(135deg, #f4f8f1, #edf5e9);\n  border: 1px solid #d8e6d2;\n  border-radius: var(--radius-lg);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n\n.insight-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 24px rgba(70, 110, 75, 0.10);\n}\n\n.insight-icon[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #dcebd7;\n  border-radius: 15px;\n  font-size: 27px;\n}\n\n.insight-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.insight-content[_ngcontent-%COMP%]   .eco-eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n}\n\n.insight-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 18px;\n  color: #123c2d;\n}\n\n.insight-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.6;\n  color: #5f625d;\n}\n\n\n\n\n\n\n.grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 24px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  position: relative;\n  overflow: hidden;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n\n.stat-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 4px;\n  height: 100%;\n  background: #84a98c;\n}\n\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 26px rgba(18, 60, 45, 0.10);\n}\n\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  color: var(--pine-800);\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n\n.stat-card__value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ink-400);\n}\n\n.stat-card__hint[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--ink-400);\n}\n\n\n\n\n\n\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n\n.grid-2[_ngcontent-%COMP%]   .eco-card[_ngcontent-%COMP%] {\n  transition: box-shadow 0.25s ease;\n}\n\n.grid-2[_ngcontent-%COMP%]   .eco-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 25px rgba(18, 60, 45, 0.08);\n}\n\n.grid-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #123c2d;\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n\n\n\n\n\n\n.recent-activities[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 24px;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n}\n\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 20px;\n  color: #123c2d;\n}\n\n.activity-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.activity-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 48px 1fr auto;\n  align-items: center;\n  column-gap: 14px;\n  min-height: 76px;\n  padding: 12px 8px;\n  border-bottom: 1px solid #eee8dc;\n  border-radius: 10px;\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n\n.activity-row[_ngcontent-%COMP%]:hover {\n  background: #f7faf5;\n  transform: translateX(3px);\n}\n\n.activity-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.activity-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #eef5ed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.activity-info[_ngcontent-%COMP%] {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 3px;\n}\n\n.activity-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #123c2b;\n}\n\n.activity-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #555b56;\n}\n\n.activity-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #777a73;\n}\n\n.activity-emission[_ngcontent-%COMP%] {\n  min-width: 90px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  text-align: right;\n}\n\n.activity-emission[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 15px;\n  font-weight: 700;\n  color: #123c2b;\n}\n\n.activity-emission[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 10px;\n  color: #777;\n}\n\n\n\n\n\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 35px 20px;\n  color: #777;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n\n\n\n\n\n.goals-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 24px;\n}\n\n.goal-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.goal-item[_ngcontent-%COMP%] {\n  padding: 18px 0;\n  border-bottom: 1px solid #eee8dc;\n}\n\n.goal-item[_ngcontent-%COMP%]:first-child {\n  padding-top: 5px;\n}\n\n.goal-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 5px;\n}\n\n.goal-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 9px;\n}\n\n.goal-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.goal-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #123c2d !important;\n  font-weight: 700;\n}\n\n.goal-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  line-height: 1;\n  background: #f1eadc;\n  color: #555b56 !important;\n  font-weight: 600;\n}\n\n.status-achieved[_ngcontent-%COMP%] {\n  background: #e2f0e4;\n  color: #4f8060 !important;\n}\n\n.goal-percent[_ngcontent-%COMP%] {\n  min-width: 45px;\n  text-align: right;\n  font-family: monospace;\n  font-size: 14px !important;\n  color: #123c2d !important;\n  font-weight: 700;\n}\n\n.goal-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 9px;\n  margin-top: 10px;\n  background: #eee8dc;\n  border-radius: 20px;\n  overflow: hidden;\n}\n\n.goal-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #84a98c, #5f8f6b);\n  border-radius: 20px;\n  transition: width 0.5s ease;\n}\n\n.goal-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 8px;\n  font-size: 11px;\n  color: #555b56 !important;\n}\n\n.goal-bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #555b56 !important;\n}\n\n.goal-achieved[_ngcontent-%COMP%] {\n  color: #4f8060 !important;\n  font-weight: 600;\n}\n\n\n\n\n\n\n.eco-btn[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.eco-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n\n\n\n\n\n\n@media (max-width: 960px) {\n  .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 700px) {\n  .hero__text[_ngcontent-%COMP%] {\n    padding: 28px;\n  }\n\n  .hero__text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n\n  .hero__actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n\n  .insight-card[_ngcontent-%COMP%] {\n    padding: 18px;\n    align-items: flex-start;\n  }\n\n  .insight-icon[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n    font-size: 22px;\n  }\n\n  .recent-activities[_ngcontent-%COMP%], .goals-section[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n\n  .activity-row[_ngcontent-%COMP%] {\n    grid-template-columns: 42px 1fr auto;\n    column-gap: 10px;\n    min-height: 65px;\n  }\n\n  .activity-icon[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    font-size: 17px;\n  }\n\n  .activity-emission[_ngcontent-%COMP%] {\n    min-width: 70px;\n  }\n\n  .goal-info[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n\n  .goal-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n\n\n\n\n\n.recent-activities[_ngcontent-%COMP%] {\n  padding: 28px;\n}\n\n.recent-activities[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 18px;\n  margin-top: 22px;\n}\n\n.recent-activities[_ngcontent-%COMP%]   .activity-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  min-height: 285px;\n  padding: 20px;\n\n  background: #ffffff;\n  border: 1px solid #eee9df;\n  border-radius: 16px;\n\n  box-shadow: 0 3px 12px rgba(30, 60, 45, 0.06);\n\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.recent-activities[_ngcontent-%COMP%]   .activity-row[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(30, 60, 45, 0.10);\n}\n\n\n\n\n.recent-activities[_ngcontent-%COMP%]   .activity-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background: #edf5ed;\n  border-radius: 16px;\n\n  font-size: 34px;\n  margin-bottom: 18px;\n}\n\n\n\n\n.recent-activities[_ngcontent-%COMP%]   .activity-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n\n  flex: 1;\n}\n\n.recent-activities[_ngcontent-%COMP%]   .activity-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #123d2d;\n}\n\n.recent-activities[_ngcontent-%COMP%]   .activity-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #333;\n}\n\n.recent-activities[_ngcontent-%COMP%]   .activity-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #777;\n  margin-top: 5px;\n}\n\n\n\n\n.recent-activities[_ngcontent-%COMP%]   .activity-emission[_ngcontent-%COMP%] {\n  margin: 18px -20px -20px;\n  padding: 18px 20px;\n\n  background: #f5f7f1;\n\n  border-radius: 0 0 16px 16px;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.recent-activities[_ngcontent-%COMP%]   .activity-emission[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #3f7d55;\n}\n\n.recent-activities[_ngcontent-%COMP%]   .activity-emission[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #555;\n}\n\n\n\n\n\n\n\n.goals-section[_ngcontent-%COMP%] {\n  padding: 28px;\n}\n\n.goals-section[_ngcontent-%COMP%]   .goal-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n\n  margin-top: 22px;\n}\n\n.goals-section[_ngcontent-%COMP%]   .goal-item[_ngcontent-%COMP%] {\n  padding: 22px;\n\n  background: #ffffff;\n  border: 1px solid #eee9df;\n  border-radius: 16px;\n\n  box-shadow: 0 3px 12px rgba(30, 60, 45, 0.06);\n\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.goals-section[_ngcontent-%COMP%]   .goal-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(30, 60, 45, 0.10);\n}\n\n\n\n\n.goals-section[_ngcontent-%COMP%]   .goal-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 15px;\n}\n\n.goals-section[_ngcontent-%COMP%]   .goal-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.goals-section[_ngcontent-%COMP%]   .goal-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #123d2d;\n}\n\n\n\n\n.goals-section[_ngcontent-%COMP%]   .goal-status[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n\n  border-radius: 20px;\n\n  background: #eef5ed;\n  color: #4f7f5e;\n\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.goals-section[_ngcontent-%COMP%]   .goal-status.status-achieved[_ngcontent-%COMP%] {\n  background: #e5f2e7;\n  color: #39724c;\n}\n\n\n\n\n.goals-section[_ngcontent-%COMP%]   .goal-percent[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #123d2d;\n  white-space: nowrap;\n}\n\n\n\n\n.goals-section[_ngcontent-%COMP%]   .goal-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 9px;\n\n  margin-top: 22px;\n\n  background: #eee9df;\n  border-radius: 20px;\n  overflow: hidden;\n}\n\n.goals-section[_ngcontent-%COMP%]   .goal-fill[_ngcontent-%COMP%] {\n  height: 100%;\n\n  background: #6f9f7d;\n  border-radius: 20px;\n\n  transition: width 0.4s ease;\n}\n\n\n\n\n.goals-section[_ngcontent-%COMP%]   .goal-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  margin-top: 12px;\n\n  font-size: 13px;\n  color: #777;\n}\n\n.goals-section[_ngcontent-%COMP%]   .goal-achieved[_ngcontent-%COMP%] {\n  color: #39724c;\n  font-weight: 600;\n}\n\n\n\n\n\n\n\n@media (max-width: 1100px) {\n\n  .recent-activities[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n}\n\n@media (max-width: 700px) {\n\n  .recent-activities[_ngcontent-%COMP%]   .activity-list[_ngcontent-%COMP%], .goals-section[_ngcontent-%COMP%]   .goal-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .recent-activities[_ngcontent-%COMP%]   .activity-row[_ngcontent-%COMP%] {\n    min-height: 250px;\n  }\n\n  .goals-section[_ngcontent-%COMP%]   .goal-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n}\n\n\n\n\n\n.recent-activities[_ngcontent-%COMP%] {\n  width: calc(100% - 40px);\n  margin: 30px 20px;\n  padding: 28px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n\n\n.recent-activities[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n\n\n.activity-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 20px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n\n\n.activity-row[_ngcontent-%COMP%] {\n  min-width: 0;\n  box-sizing: border-box;\n\n  padding: 24px 20px;\n  border: 1px solid #e6e2d8;\n  border-radius: 14px;\n  background: #ffffff;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  gap: 12px;\n\n  min-height: 260px;\n\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.activity-row[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n}\n\n\n\n.activity-icon[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 12px;\n  background: #f1f6f2;\n\n  font-size: 28px;\n}\n\n\n\n.activity-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n\n  width: 100%;\n}\n\n.activity-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n}\n\n.activity-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #777;\n}\n\n.activity-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #999;\n}\n\n\n\n.activity-emission[_ngcontent-%COMP%] {\n  margin-top: auto;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n\n.activity-emission[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-family: monospace;\n}\n\n.activity-emission[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n}\n\n\n\n\n\n\n\n@media (max-width: 1100px) {\n\n  .activity-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n}\n\n@media (max-width: 800px) {\n\n  .recent-activities[_ngcontent-%COMP%] {\n    width: calc(100% - 24px);\n    margin: 20px 12px;\n    padding: 20px;\n  }\n\n  .activity-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n}\n\n@media (max-width: 550px) {\n\n  .activity-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .recent-activities[_ngcontent-%COMP%] {\n    width: calc(100% - 20px);\n    margin: 15px 10px;\n  }\n\n}\n\n\n.recent-activities[_ngcontent-%COMP%] {\n  width: 92%;\n  max-width: 1200px;\n  margin: 40px auto;\n  padding: 28px;\n  box-sizing: border-box;\n  border-radius: 18px;\n}\n\n\n\n.goals-section[_ngcontent-%COMP%] {\n  width: 92%;\n  max-width: 1200px;\n  margin: 40px auto;\n  padding: 28px;\n  box-sizing: border-box;\n  border-radius: 18px;\n}\n\n\n\n.activity-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 18px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n\n\n.activity-row[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n  padding: 22px;\n  border: 1px solid #e5e5e5;\n  border-radius: 16px;\n}\n\n\n\n.goal-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.goal-item[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n  padding: 22px;\n  border: 1px solid #e5e5e5;\n  border-radius: 16px;\n}\n\n\n\n.activity-info[_ngcontent-%COMP%], .goal-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.activity-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .activity-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .activity-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .goal-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  overflow-wrap: break-word;\n}\n\n\n\n@media (max-width: 900px) {\n\n  .activity-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .goal-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 600px) {\n\n  .recent-activities[_ngcontent-%COMP%], .goals-section[_ngcontent-%COMP%] {\n    width: 94%;\n    padding: 20px;\n  }\n\n  .activity-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{ selector: 'eco-dashboard', standalone: true, imports: [
                    DecimalPipe,
                    RouterLink,
                    CarbonChartComponent
                ], template: "<div class=\"eco-page\">\n\n  <section class=\"hero\">\n\n    <div class=\"hero__text\">\n\n      <span class=\"eco-eyebrow\">\n        Welcome back, {{ username }}\n      </span>\n\n      <h1>Your footprint, this week</h1>\n\n      <p>\n        You've logged\n        <strong class=\"eco-mono\">\n          {{ totalCarbon() | number:'1.1-1' }} kg CO\u2082e\n        </strong>\n\n        across {{ activityList().length }} activities.\n\n        {{ activeGoals() }} of\n        {{ goalList().length }}\n        goals are active.\n\n      </p>\n\n      <div class=\"hero__actions\">\n\n        <a\n          [routerLink]=\"['/carbon-tracker']\"\n          class=\"eco-btn eco-btn--primary\">\n\n          Log an activity\n\n        </a>\n\n        <a\n          [routerLink]=\"['/reports']\"\n          class=\"eco-btn eco-btn--ghost\">\n\n          View reports\n\n        </a>\n\n      </div>\n\n    </div>\n\n    <div class=\"hero__ring-card eco-card\">\n\n      <div class=\"ring\">\n\n        <svg viewBox=\"0 0 120 120\" width=\"150\" height=\"150\">\n\n          <circle\n            cx=\"60\"\n            cy=\"60\"\n            r=\"54\"\n            fill=\"none\"\n            stroke=\"#efe9da\"\n            stroke-width=\"9\"/>\n\n          <circle\n            cx=\"60\"\n            cy=\"60\"\n            r=\"54\"\n            fill=\"none\"\n            stroke=\"#84a98c\"\n            stroke-width=\"9\"\n            stroke-linecap=\"round\"\n            [attr.stroke-dasharray]=\"2 * 3.14159 * 54\"\n            [attr.stroke-dashoffset]=\"\n            (2 * 3.14159 * 54) -\n            (ecoScore() / 1000) * (2 * 3.14159 * 54)\n            \"\n            transform=\"rotate(-90 60 60)\"/>\n\n          <circle\n            cx=\"60\"\n            cy=\"60\"\n            r=\"40\"\n            fill=\"none\"\n            stroke=\"#84a98c\"\n            stroke-width=\"1\"\n            stroke-dasharray=\"2 4\"\n            opacity=\"0.6\"/>\n\n        </svg>\n\n        <div class=\"ring__center\">\n\n          <span class=\"ring__value eco-mono\">\n\n           {{ ecoScore() }}\n          </span>\n\n          <span class=\"ring__label\">\n\n            Eco Score\n\n          </span>\n\n        </div>\n\n      </div>\n\n      <span class=\"eco-tag\">\n\n        Eco Warrior\n\n      </span>\n\n    </div>\n\n  </section>\n \n<!-- Sustainability Insight -->\n<section class=\"eco-card insight-card\">\n\n  <div class=\"insight-icon\">\n    {{ sustainabilityInsight().icon }}\n  </div>\n\n  <div class=\"insight-content\">\n    <span class=\"eco-eyebrow\">SUSTAINABILITY INSIGHT</span>\n\n    <h3>{{ sustainabilityInsight().title }}</h3>\n\n    <p>{{ sustainabilityInsight().message }}</p>\n  </div>\n\n</section>\n\n\n  <section class=\"grid-3\">\n\n    <div class=\"eco-card stat-card\">\n\n      <span class=\"eco-eyebrow\">\n\n        Carbon Emission\n\n      </span>\n\n      <span class=\"stat-card__value eco-mono\">\n\n        {{ totalCarbon() | number:'1.1-1' }}\n\n        <small>kg CO\u2082e</small>\n\n      </span>\n\n      <span class=\"stat-card__hint\">\n\n        {{ activityList().length }} activities logged\n\n      </span>\n\n    </div>\n\n    <div class=\"eco-card stat-card\">\n\n      <span class=\"eco-eyebrow\">\n\n        Active Goals\n\n      </span>\n\n      <span class=\"stat-card__value eco-mono\">\n\n        {{ activeGoals() }}\n\n        <small>/ {{ goalList().length }}</small>\n\n      </span>\n\n      <span class=\"stat-card__hint\">\n\n        Goals in progress\n\n      </span>\n\n    </div>\n\n    <div class=\"eco-card stat-card\">\n\n      <span class=\"eco-eyebrow\">\n\n        Achieved Goals\n\n      </span>\n\n      <span class=\"stat-card__value eco-mono\">\n\n        {{ achievedGoals() }}\n\n      </span>\n\n      <span class=\"stat-card__hint\">\n\n        Successfully completed\n\n      </span>\n\n    </div>\n\n  </section>\n  <section class=\"grid-2\">\n\n  <div class=\"eco-card\">\n\n    <h2>Carbon Emission Overview</h2>\n\n    <eco-carbon-chart\n      [activities]=\"activityList()\">\n    </eco-carbon-chart>\n\n  </div>\n\n</section>\n\n</div>\n<!-- Recent Activities -->\n<section class=\"eco-card recent-activities\">\n\n  <div class=\"section-header\">\n    <div>\n      <span class=\"eco-eyebrow\">Activity History</span>\n      <h3>Recent Activities</h3>\n    </div>\n\n    <a\n      [routerLink]=\"['/carbon-tracker']\"\n      class=\"eco-btn eco-btn--ghost\">\n      View all\n    </a>\n  </div>\n\n  @if (activityList().length === 0) {\n\n    <div class=\"empty-state\">\n      <p>No activities logged yet.</p>\n      <a\n        [routerLink]=\"['/carbon-tracker']\"\n        class=\"eco-btn eco-btn--primary\">\n        Log your first activity\n      </a>\n    </div>\n\n  } @else {\n\n    <div class=\"activity-list\">\n\n      @for (\n        activity of activityList().slice().reverse().slice(0, 5);\n        track activity.id\n      ) {\n\n        <div class=\"activity-row\">\n\n          <div class=\"activity-icon\">\n            {{ activity.category === 'Transportation' ? '\uD83D\uDE97' :\n               activity.category === 'Electricity Usage' ? '\u26A1' :\n               activity.category === 'Food' ? '\uD83C\uDF7D\uFE0F' :\n               activity.category === 'Waste' ? '\u267B\uFE0F' : '\uD83C\uDF31' }}\n          </div>\n\n          <div class=\"activity-info\">\n\n            <strong>\n              {{ activity.category || 'Other' }}\n            </strong>\n\n            <span>\n              {{ activity.description || 'Carbon activity' }}\n            </span>\n\n            <small>\n              {{ activity.activityDate }}\n            </small>\n\n          </div>\n\n          <div class=\"activity-emission\">\n            <strong>\n              {{ activity.carbonEmission | number:'1.2-2' }}\n            </strong>\n\n            <span>kg CO\u2082e</span>\n          </div>\n\n        </div>\n\n      }\n\n    </div>\n\n  }\n\n</section>\n<section class=\"eco-card goals-section\">\n\n  <div class=\"section-header\">\n    <div>\n      <span class=\"eco-eyebrow\">YOUR GOALS</span>\n      <h3>Goal Progress</h3>\n    </div>\n\n    <a\n      [routerLink]=\"['/goals']\"\n      class=\"eco-btn eco-btn--ghost\">\n      View all\n    </a>\n  </div>\n\n  @if (goalList().length === 0) {\n\n    <div class=\"empty-state\">\n      <p>No goals created yet.</p>\n\n      <a\n        [routerLink]=\"['/goals']\"\n        class=\"eco-btn eco-btn--primary\">\n        Create a goal\n      </a>\n    </div>\n\n  } @else {\n\n    <div class=\"goal-list\">\n\n      @for (goal of goalList(); track goal.id) {\n\n        <div class=\"goal-item\">\n\n          <!-- Goal Header -->\n          <div class=\"goal-top\">\n\n            <div class=\"goal-info\">\n\n              <strong>\n                {{ goal.title || goal.name || 'Carbon Reduction Goal' }}\n              </strong>\n\n              <span\n                class=\"goal-status\"\n                [class.status-achieved]=\"goal.status === 'Achieved'\">\n\n                {{ goal.status || 'In Progress' }}\n\n              </span>\n\n            </div>\n\n           <strong class=\"goal-percent\">\n  {{ goal.targetKg ? ((goal.currentKg / goal.targetKg) * 100 | number:'1.0-0') : 0 }}%\n</strong>\n          </div>\n\n          <!-- Progress Bar -->\n          <div class=\"goal-track\">\n\n            <div\n  class=\"goal-fill\"\n  [style.width.%]=\"\n    goal.targetKg\n      ? Math.min(100, (goal.currentKg / goal.targetKg) * 100)\n      : 0\n  \">\n</div>\n          </div>\n\n          <!-- Goal Details -->\n          <div class=\"goal-bottom\">\n\n          <span>\n  Target: {{ goal.targetKg || 0 }} {{ goal.unit }}\n</span>\n            <span\n              [class.goal-achieved]=\"goal.status === 'Achieved'\">\n\n              @if (goal.status === 'Achieved') {\n                \u2713 Achieved\n              } @else {\n                In progress\n              }\n\n            </span>\n\n          </div>\n\n        </div>\n\n      }\n\n    </div>\n\n  }\n\n</section>", styles: ["/* ================================\n   DASHBOARD\n================================ */\n\n.eco-page {\n  width: 100%;\n}\n\n/* ================================\n   HERO\n================================ */\n\n.hero {\n  display: grid;\n  grid-template-columns: 1.4fr 0.9fr;\n  gap: 24px;\n  align-items: stretch;\n  margin-bottom: 24px;\n}\n\n.hero__text {\n  background: linear-gradient(135deg, var(--pine-700), var(--pine-800));\n  border-radius: var(--radius-lg);\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: var(--sand-050);\n  box-shadow: 0 12px 30px rgba(18, 60, 45, 0.12);\n}\n\n.hero__text h1 {\n  color: var(--white);\n  font-size: 34px;\n  margin: 8px 0 12px;\n}\n\n.hero__text p {\n  color: var(--sand-100);\n  line-height: 1.7;\n}\n\n.hero__actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 14px;\n}\n\n.hero__ring-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  min-height: 250px;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n\n.hero__ring-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 28px rgba(18, 60, 45, 0.12);\n}\n\n.ring {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ring__center {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.ring__value {\n  font-size: 30px;\n  font-weight: 700;\n  color: var(--pine-800);\n}\n\n.ring__label {\n  font-size: 12px;\n  color: var(--ink-400);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.eco-tag {\n  background: #e3efdf;\n  color: #315c43;\n  padding: 7px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n/* ================================\n   SUSTAINABILITY INSIGHT\n================================ */\n\n.insight-card {\n  margin-bottom: 24px;\n  padding: 22px 24px;\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  background: linear-gradient(135deg, #f4f8f1, #edf5e9);\n  border: 1px solid #d8e6d2;\n  border-radius: var(--radius-lg);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n\n.insight-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 24px rgba(70, 110, 75, 0.10);\n}\n\n.insight-icon {\n  width: 54px;\n  height: 54px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #dcebd7;\n  border-radius: 15px;\n  font-size: 27px;\n}\n\n.insight-content {\n  flex: 1;\n}\n\n.insight-content .eco-eyebrow {\n  display: block;\n  margin-bottom: 4px;\n}\n\n.insight-content h3 {\n  margin: 0 0 5px;\n  font-size: 18px;\n  color: #123c2d;\n}\n\n.insight-content p {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.6;\n  color: #5f625d;\n}\n\n/* ================================\n   STAT CARDS\n================================ */\n\n.grid-3 {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 24px;\n}\n\n.stat-card {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  position: relative;\n  overflow: hidden;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n\n.stat-card::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 4px;\n  height: 100%;\n  background: #84a98c;\n}\n\n.stat-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 26px rgba(18, 60, 45, 0.10);\n}\n\n.stat-card__value {\n  font-size: 30px;\n  font-weight: 700;\n  color: var(--pine-800);\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n\n.stat-card__value small {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ink-400);\n}\n\n.stat-card__hint {\n  font-size: 12.5px;\n  color: var(--ink-400);\n}\n\n/* ================================\n   CARBON CHART\n================================ */\n\n.grid-2 {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n\n.grid-2 .eco-card {\n  transition: box-shadow 0.25s ease;\n}\n\n.grid-2 .eco-card:hover {\n  box-shadow: 0 10px 25px rgba(18, 60, 45, 0.08);\n}\n\n.grid-2 h2 {\n  color: #123c2d;\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n\n/* ================================\n   RECENT ACTIVITIES\n================================ */\n\n.recent-activities {\n  margin-top: 24px;\n  padding: 24px;\n}\n\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n}\n\n.section-header h3 {\n  margin: 5px 0 0;\n  font-size: 20px;\n  color: #123c2d;\n}\n\n.activity-list {\n  width: 100%;\n}\n\n.activity-row {\n  display: grid;\n  grid-template-columns: 48px 1fr auto;\n  align-items: center;\n  column-gap: 14px;\n  min-height: 76px;\n  padding: 12px 8px;\n  border-bottom: 1px solid #eee8dc;\n  border-radius: 10px;\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n\n.activity-row:hover {\n  background: #f7faf5;\n  transform: translateX(3px);\n}\n\n.activity-row:last-child {\n  border-bottom: none;\n}\n\n.activity-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #eef5ed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.activity-info {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 3px;\n}\n\n.activity-info strong {\n  font-size: 14px;\n  font-weight: 700;\n  color: #123c2b;\n}\n\n.activity-info span {\n  font-size: 13px;\n  color: #555b56;\n}\n\n.activity-info small {\n  font-size: 11px;\n  color: #777a73;\n}\n\n.activity-emission {\n  min-width: 90px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  text-align: right;\n}\n\n.activity-emission strong {\n  font-family: monospace;\n  font-size: 15px;\n  font-weight: 700;\n  color: #123c2b;\n}\n\n.activity-emission span {\n  margin-top: 2px;\n  font-size: 10px;\n  color: #777;\n}\n\n/* ================================\n   EMPTY STATE\n================================ */\n\n.empty-state {\n  text-align: center;\n  padding: 35px 20px;\n  color: #777;\n}\n\n.empty-state p {\n  margin-bottom: 15px;\n}\n\n/* ================================\n   GOALS\n================================ */\n\n.goals-section {\n  margin-top: 24px;\n  padding: 24px;\n}\n\n.goal-list {\n  display: flex;\n  flex-direction: column;\n}\n\n.goal-item {\n  padding: 18px 0;\n  border-bottom: 1px solid #eee8dc;\n}\n\n.goal-item:first-child {\n  padding-top: 5px;\n}\n\n.goal-item:last-child {\n  border-bottom: none;\n  padding-bottom: 5px;\n}\n\n.goal-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 9px;\n}\n\n.goal-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.goal-info strong {\n  font-size: 15px;\n  color: #123c2d !important;\n  font-weight: 700;\n}\n\n.goal-status {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  line-height: 1;\n  background: #f1eadc;\n  color: #555b56 !important;\n  font-weight: 600;\n}\n\n.status-achieved {\n  background: #e2f0e4;\n  color: #4f8060 !important;\n}\n\n.goal-percent {\n  min-width: 45px;\n  text-align: right;\n  font-family: monospace;\n  font-size: 14px !important;\n  color: #123c2d !important;\n  font-weight: 700;\n}\n\n.goal-track {\n  width: 100%;\n  height: 9px;\n  margin-top: 10px;\n  background: #eee8dc;\n  border-radius: 20px;\n  overflow: hidden;\n}\n\n.goal-fill {\n  height: 100%;\n  background: linear-gradient(90deg, #84a98c, #5f8f6b);\n  border-radius: 20px;\n  transition: width 0.5s ease;\n}\n\n.goal-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 8px;\n  font-size: 11px;\n  color: #555b56 !important;\n}\n\n.goal-bottom span {\n  color: #555b56 !important;\n}\n\n.goal-achieved {\n  color: #4f8060 !important;\n  font-weight: 600;\n}\n\n/* ================================\n   BUTTON HOVER\n================================ */\n\n.eco-btn {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.eco-btn:hover {\n  transform: translateY(-2px);\n}\n\n/* ================================\n   RESPONSIVE\n================================ */\n\n@media (max-width: 960px) {\n  .hero {\n    grid-template-columns: 1fr;\n  }\n\n  .grid-3 {\n    grid-template-columns: 1fr;\n  }\n\n  .grid-2 {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 700px) {\n  .hero__text {\n    padding: 28px;\n  }\n\n  .hero__text h1 {\n    font-size: 28px;\n  }\n\n  .hero__actions {\n    flex-wrap: wrap;\n  }\n\n  .insight-card {\n    padding: 18px;\n    align-items: flex-start;\n  }\n\n  .insight-icon {\n    width: 45px;\n    height: 45px;\n    font-size: 22px;\n  }\n\n  .recent-activities,\n  .goals-section {\n    padding: 18px;\n  }\n\n  .activity-row {\n    grid-template-columns: 42px 1fr auto;\n    column-gap: 10px;\n    min-height: 65px;\n  }\n\n  .activity-icon {\n    width: 38px;\n    height: 38px;\n    font-size: 17px;\n  }\n\n  .activity-emission {\n    min-width: 70px;\n  }\n\n  .goal-info {\n    gap: 6px;\n  }\n\n  .goal-info strong {\n    font-size: 13px;\n  }\n}\n/* =========================================================\n   RECENT ACTIVITIES - CARD UI\n   ========================================================= */\n\n.recent-activities {\n  padding: 28px;\n}\n\n.recent-activities .activity-list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 18px;\n  margin-top: 22px;\n}\n\n.recent-activities .activity-row {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  min-height: 285px;\n  padding: 20px;\n\n  background: #ffffff;\n  border: 1px solid #eee9df;\n  border-radius: 16px;\n\n  box-shadow: 0 3px 12px rgba(30, 60, 45, 0.06);\n\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.recent-activities .activity-row:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(30, 60, 45, 0.10);\n}\n\n/* Activity icon */\n\n.recent-activities .activity-icon {\n  width: 72px;\n  height: 72px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background: #edf5ed;\n  border-radius: 16px;\n\n  font-size: 34px;\n  margin-bottom: 18px;\n}\n\n/* Activity information */\n\n.recent-activities .activity-info {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n\n  flex: 1;\n}\n\n.recent-activities .activity-info strong {\n  font-size: 16px;\n  font-weight: 700;\n  color: #123d2d;\n}\n\n.recent-activities .activity-info span {\n  font-size: 15px;\n  color: #333;\n}\n\n.recent-activities .activity-info small {\n  font-size: 13px;\n  color: #777;\n  margin-top: 5px;\n}\n\n/* Carbon value */\n\n.recent-activities .activity-emission {\n  margin: 18px -20px -20px;\n  padding: 18px 20px;\n\n  background: #f5f7f1;\n\n  border-radius: 0 0 16px 16px;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.recent-activities .activity-emission strong {\n  font-size: 24px;\n  color: #3f7d55;\n}\n\n.recent-activities .activity-emission span {\n  font-size: 13px;\n  color: #555;\n}\n\n\n/* =========================================================\n   GOAL PROGRESS - CARD UI\n   ========================================================= */\n\n.goals-section {\n  padding: 28px;\n}\n\n.goals-section .goal-list {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n\n  margin-top: 22px;\n}\n\n.goals-section .goal-item {\n  padding: 22px;\n\n  background: #ffffff;\n  border: 1px solid #eee9df;\n  border-radius: 16px;\n\n  box-shadow: 0 3px 12px rgba(30, 60, 45, 0.06);\n\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.goals-section .goal-item:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(30, 60, 45, 0.10);\n}\n\n/* Goal heading */\n\n.goals-section .goal-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 15px;\n}\n\n.goals-section .goal-info {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.goals-section .goal-info strong {\n  font-size: 17px;\n  color: #123d2d;\n}\n\n/* Status */\n\n.goals-section .goal-status {\n  padding: 5px 10px;\n\n  border-radius: 20px;\n\n  background: #eef5ed;\n  color: #4f7f5e;\n\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.goals-section .goal-status.status-achieved {\n  background: #e5f2e7;\n  color: #39724c;\n}\n\n/* Percentage */\n\n.goals-section .goal-percent {\n  font-size: 15px;\n  color: #123d2d;\n  white-space: nowrap;\n}\n\n/* Progress bar */\n\n.goals-section .goal-track {\n  width: 100%;\n  height: 9px;\n\n  margin-top: 22px;\n\n  background: #eee9df;\n  border-radius: 20px;\n  overflow: hidden;\n}\n\n.goals-section .goal-fill {\n  height: 100%;\n\n  background: #6f9f7d;\n  border-radius: 20px;\n\n  transition: width 0.4s ease;\n}\n\n/* Goal bottom */\n\n.goals-section .goal-bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  margin-top: 12px;\n\n  font-size: 13px;\n  color: #777;\n}\n\n.goals-section .goal-achieved {\n  color: #39724c;\n  font-weight: 600;\n}\n\n\n/* =========================================================\n   RESPONSIVE\n   ========================================================= */\n\n@media (max-width: 1100px) {\n\n  .recent-activities .activity-list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n}\n\n@media (max-width: 700px) {\n\n  .recent-activities .activity-list,\n  .goals-section .goal-list {\n    grid-template-columns: 1fr;\n  }\n\n  .recent-activities .activity-row {\n    min-height: 250px;\n  }\n\n  .goals-section .goal-top {\n    flex-direction: column;\n  }\n\n}\n/* ================================\n   RECENT ACTIVITIES\n   ================================ */\n\n.recent-activities {\n  width: calc(100% - 40px);\n  margin: 30px 20px;\n  padding: 28px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n/* Header */\n.recent-activities .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n/* Activity cards container */\n.activity-list {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 20px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* Individual activity card */\n.activity-row {\n  min-width: 0;\n  box-sizing: border-box;\n\n  padding: 24px 20px;\n  border: 1px solid #e6e2d8;\n  border-radius: 14px;\n  background: #ffffff;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  gap: 12px;\n\n  min-height: 260px;\n\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.activity-row:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n}\n\n/* Icon */\n.activity-icon {\n  width: 58px;\n  height: 58px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 12px;\n  background: #f1f6f2;\n\n  font-size: 28px;\n}\n\n/* Activity information */\n.activity-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n\n  width: 100%;\n}\n\n.activity-info strong {\n  font-size: 17px;\n  font-weight: 600;\n}\n\n.activity-info span {\n  font-size: 14px;\n  color: #777;\n}\n\n.activity-info small {\n  font-size: 13px;\n  color: #999;\n}\n\n/* Emission */\n.activity-emission {\n  margin-top: auto;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n\n.activity-emission strong {\n  font-size: 26px;\n  font-family: monospace;\n}\n\n.activity-emission span {\n  font-size: 12px;\n  color: #888;\n}\n\n\n/* ================================\n   RESPONSIVE\n   ================================ */\n\n@media (max-width: 1100px) {\n\n  .activity-list {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n}\n\n@media (max-width: 800px) {\n\n  .recent-activities {\n    width: calc(100% - 24px);\n    margin: 20px 12px;\n    padding: 20px;\n  }\n\n  .activity-list {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n}\n\n@media (max-width: 550px) {\n\n  .activity-list {\n    grid-template-columns: 1fr;\n  }\n\n  .recent-activities {\n    width: calc(100% - 20px);\n    margin: 15px 10px;\n  }\n\n}\n/* Recent Activities */\n.recent-activities {\n  width: 92%;\n  max-width: 1200px;\n  margin: 40px auto;\n  padding: 28px;\n  box-sizing: border-box;\n  border-radius: 18px;\n}\n\n/* Goal Progress */\n.goals-section {\n  width: 92%;\n  max-width: 1200px;\n  margin: 40px auto;\n  padding: 28px;\n  box-sizing: border-box;\n  border-radius: 18px;\n}\n\n/* Activity cards should stay inside the main card */\n.activity-list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 18px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* Individual activity card */\n.activity-row {\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n  padding: 22px;\n  border: 1px solid #e5e5e5;\n  border-radius: 16px;\n}\n\n/* Goal cards */\n.goal-list {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.goal-item {\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n  padding: 22px;\n  border: 1px solid #e5e5e5;\n  border-radius: 16px;\n}\n\n/* Prevent content from touching card borders */\n.activity-info,\n.goal-info {\n  min-width: 0;\n}\n\n.activity-info strong,\n.activity-info span,\n.activity-info small,\n.goal-info strong {\n  display: block;\n  overflow-wrap: break-word;\n}\n\n/* Responsive */\n@media (max-width: 900px) {\n\n  .activity-list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .goal-list {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 600px) {\n\n  .recent-activities,\n  .goals-section {\n    width: 94%;\n    padding: 20px;\n  }\n\n  .activity-list {\n    grid-template-columns: 1fr;\n  }\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app/components/dashboard/dashboard.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=dashboard.component.js.map