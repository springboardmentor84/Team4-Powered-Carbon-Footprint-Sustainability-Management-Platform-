import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.name;
function ChallengesComponent_For_11_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelement(1, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 35);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", c_r1.progress, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", c_r1.progress, "% complete");
} }
function ChallengesComponent_For_11_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵtext(1, "\u2713 Completed");
    i0.ɵɵelementEnd();
} }
function ChallengesComponent_For_11_Conditional_25_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function ChallengesComponent_For_11_Conditional_25_Conditional_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const c_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.complete(c_r1.id)); });
    i0.ɵɵtext(1, " Complete Task ");
    i0.ɵɵelementEnd();
} }
function ChallengesComponent_For_11_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, ChallengesComponent_For_11_Conditional_25_Conditional_0_Template, 2, 0, "button", 36);
    i0.ɵɵelementStart(1, "button", 37);
    i0.ɵɵlistener("click", function ChallengesComponent_For_11_Conditional_25_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r2); const c_r1 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.toggle(c_r1.id)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵconditional(0, c_r1.joined ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("eco-btn--primary", !c_r1.joined)("eco-btn--ghost", c_r1.joined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", c_r1.joined ? "Leave" : "Join", " ");
} }
function ChallengesComponent_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 21)(2, "span", 22);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 23);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 24);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 25)(11, "span", 26);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 27);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(15, ChallengesComponent_For_11_Conditional_15_Template, 4, 3);
    i0.ɵɵelementStart(16, "div", 28)(17, "div", 29)(18, "span");
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span", 30);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 31);
    i0.ɵɵtemplate(24, ChallengesComponent_For_11_Conditional_24_Template, 2, 0, "span", 32)(25, ChallengesComponent_For_11_Conditional_25_Template, 3, 6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(c_r1.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", c_r1.daysLeft, " days left");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r1.description);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap("diff-tag--" + c_r1.difficulty.toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r1.difficulty);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u26A1 ", c_r1.xp, " XP");
    i0.ɵɵadvance();
    i0.ɵɵconditional(15, c_r1.joined ? 15 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(20, 12, c_r1.participants), " joined");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\uD83C\uDFC5 ", c_r1.reward, "");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(24, ctx_r3.isCompleted(c_r1.id) ? 24 : 25);
} }
function ChallengesComponent_ForEmpty_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1, "No challenges match your search.");
    i0.ɵɵelementEnd();
} }
function ChallengesComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const next_r5 = ctx;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", next_r5.minXp - ctx_r3.totalXp(), " XP to ", next_r5.name, "");
} }
function ChallengesComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1, "Top level reached \uD83C\uDF89");
    i0.ɵɵelementEnd();
} }
function ChallengesComponent_For_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const lvl_r6 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("level-pip--active", lvl_r6.name === ctx_r3.currentLevel().name)("level-pip--done", ctx_r3.totalXp() > lvl_r6.minXp && lvl_r6.name !== ctx_r3.currentLevel().name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", lvl_r6.level, " ");
} }
function ChallengesComponent_For_34_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const row_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", row_r7.rank === 1 ? "\uD83E\uDD47" : row_r7.rank === 2 ? "\uD83E\uDD48" : "\uD83E\uDD49", " ");
} }
function ChallengesComponent_For_34_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 47);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("#", row_r7.rank, "");
} }
function ChallengesComponent_For_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 40)(1, "span", 41);
    i0.ɵɵtemplate(2, ChallengesComponent_For_34_Conditional_2_Template, 1, 1)(3, ChallengesComponent_For_34_Conditional_3_Template, 2, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 42);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 43)(7, "span", 44);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 45);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "span", 46);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("leaderboard__row--you", row_r7.isYou);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(2, row_r7.rank <= 3 ? 2 : 3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.initials(row_r7.name));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", row_r7.name, "", row_r7.isYou ? " (You)" : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r7.level);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r7.xp);
} }
export class ChallengesComponent {
    data = inject(MockDataService);
    challenges = this.data.getChallenges();
    leaderboard = this.data.getLeaderboard();
    search = signal('');
    // Gamification: XP, level progression, and task completion state.
    totalXp = this.data.totalXp;
    currentLevel = this.data.currentLevel;
    nextLevel = this.data.nextLevel;
    levelProgressPct = this.data.levelProgressPct;
    xpLevels = this.data.xpLevels;
    filtered = computed(() => {
        const q = this.search().toLowerCase().trim();
        if (!q)
            return this.challenges();
        return this.challenges().filter((c) => c.name.toLowerCase().includes(q) ||
            c.category.toLowerCase().includes(q));
    });
    onSearch(value) {
        this.search.set(value);
    }
    toggle(id) {
        this.data.toggleChallenge(id);
    }
    isCompleted(id) {
        return this.data.isChallengeCompleted(id);
    }
    complete(id) {
        this.data.completeChallenge(id);
    }
    initials(name) {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2)
            .toUpperCase();
    }
    static ɵfac = function ChallengesComponent_Factory(t) { return new (t || ChallengesComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChallengesComponent, selectors: [["eco-challenges"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 35, vars: 6, consts: [[1, "eco-page"], [1, "eco-page-header"], [1, "eco-eyebrow"], ["type", "text", "placeholder", "Search challenges or categories\u2026", 1, "search", 3, "input"], [1, "layout"], [1, "challenge-grid"], [1, "eco-card", "challenge-card"], [1, "empty-msg"], [1, "sidebar"], [1, "eco-card", "level-card"], [1, "level-card__current"], [1, "level-card__name"], [1, "level-card__xp", "eco-mono"], [1, "level-track"], [1, "level-fill"], [1, "level-card__next"], [1, "level-ladder"], [1, "level-pip", 3, "level-pip--active", "level-pip--done"], [1, "eco-card", "leaderboard"], [1, "leaderboard__list"], [1, "leaderboard__row", 3, "leaderboard__row--you"], [1, "challenge-card__top"], [1, "eco-tag"], [1, "days-left"], [1, "task-desc"], [1, "task-meta"], [1, "diff-tag"], [1, "xp-tag"], [1, "challenge-card__footer"], [1, "meta"], [1, "reward"], [1, "card-actions"], [1, "completed-pill"], [1, "track"], [1, "fill"], [1, "progress-text", "eco-mono"], [1, "eco-btn", "eco-btn--amber"], [1, "eco-btn", 3, "click"], [1, "eco-btn", "eco-btn--amber", 3, "click"], [1, "level-pip"], [1, "leaderboard__row"], [1, "rank"], [1, "avatar"], [1, "row-info"], [1, "name"], [1, "level-tag"], [1, "score", "eco-mono"], [1, "eco-mono"]], template: function ChallengesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "Community Challenges");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Take on something together");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "input", 3);
            i0.ɵɵlistener("input", function ChallengesComponent_Template_input_input_7_listener($event) { return ctx.onSearch($event.target.value); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 4)(9, "div", 5);
            i0.ɵɵrepeaterCreate(10, ChallengesComponent_For_11_Template, 26, 14, "div", 6, _forTrack0, false, ChallengesComponent_ForEmpty_12_Template, 2, 0, "p", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "aside", 8)(14, "div", 9)(15, "h3");
            i0.ɵɵtext(16, "Your Level");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 10)(18, "span", 11);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "span", 12);
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 13);
            i0.ɵɵelement(23, "div", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(24, ChallengesComponent_Conditional_24_Template, 2, 2, "span", 15)(25, ChallengesComponent_Conditional_25_Template, 2, 0);
            i0.ɵɵelementStart(26, "div", 16);
            i0.ɵɵrepeaterCreate(27, ChallengesComponent_For_28_Template, 2, 5, "span", 17, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "div", 18)(30, "h3");
            i0.ɵɵtext(31, "Leaderboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "ol", 19);
            i0.ɵɵrepeaterCreate(33, ChallengesComponent_For_34_Template, 13, 8, "li", 20, _forTrack1);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            let tmp_4_0;
            i0.ɵɵadvance(10);
            i0.ɵɵrepeater(ctx.filtered());
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.currentLevel().name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.totalXp(), " XP");
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("width", ctx.levelProgressPct(), "%");
            i0.ɵɵadvance();
            i0.ɵɵconditional(24, (tmp_4_0 = ctx.nextLevel()) ? 24 : 25, tmp_4_0);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.xpLevels);
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.leaderboard());
        } }, dependencies: [CommonModule, i1.DecimalPipe], styles: [".search[_ngcontent-%COMP%] {\n  border: 1px solid var(--sand-100);\n  background: var(--white);\n  border-radius: var(--radius-sm);\n  padding: 10px 14px;\n  font-size: 14px;\n  min-width: 260px;\n}\n\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  align-items: start;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: sticky;\n  top: 88px;\n}\n\n.challenge-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 18px;\n}\n\n.challenge-card[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; }\n.challenge-card__top[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; }\n.days-left[_ngcontent-%COMP%] { font-size: 12px; color: var(--ink-400); }\n.challenge-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 17px; margin-bottom: 0; }\n.task-desc[_ngcontent-%COMP%] { margin: 0; }\n\n.task-meta[_ngcontent-%COMP%] { display: flex; gap: 8px; align-items: center; }\n.diff-tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.diff-tag--easy[_ngcontent-%COMP%] { background: #e0efe8; color: #1d7258; }\n.diff-tag--medium[_ngcontent-%COMP%] { background: #faf1de; color: var(--amber-600); }\n.diff-tag--hard[_ngcontent-%COMP%] { background: #fbe4e0; color: var(--danger); }\n.xp-tag[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--pine-700);\n  background: var(--sand-100);\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n\n.track[_ngcontent-%COMP%] { height: 7px; background: var(--sand-100); border-radius: 999px; overflow: hidden; }\n.fill[_ngcontent-%COMP%] { height: 100%; background: linear-gradient(90deg, var(--amber-500), var(--moss-500)); }\n.progress-text[_ngcontent-%COMP%] { font-size: 12px; color: var(--ink-600); }\n\n.challenge-card__footer[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; margin-top: 6px; gap: 10px; flex-wrap: wrap; }\n.meta[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 3px; font-size: 12px; color: var(--ink-400); }\n.reward[_ngcontent-%COMP%] { color: var(--amber-600); }\n.card-actions[_ngcontent-%COMP%] { display: flex; gap: 8px; align-items: center; }\n.completed-pill[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--moss-500);\n  background: #e0efe8;\n  padding: 8px 14px;\n  border-radius: var(--radius-sm);\n}\n\n.empty-msg[_ngcontent-%COMP%] { color: var(--ink-400); grid-column: 1 / -1; }\n\n\n\n.level-card[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; }\n.level-card__current[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: baseline; }\n.level-card__name[_ngcontent-%COMP%] { font-family: var(--font-display); font-weight: 600; color: var(--pine-800); font-size: 17px; }\n.level-card__xp[_ngcontent-%COMP%] { color: var(--amber-600); font-weight: 600; font-size: 13px; }\n.level-track[_ngcontent-%COMP%] { height: 9px; background: var(--sand-100); border-radius: 999px; overflow: hidden; }\n.level-fill[_ngcontent-%COMP%] { height: 100%; background: linear-gradient(90deg, var(--moss-300), var(--moss-500)); transition: width 0.4s ease; }\n.level-card__next[_ngcontent-%COMP%] { font-size: 12px; color: var(--ink-400); }\n.level-ladder[_ngcontent-%COMP%] { display: flex; justify-content: space-between; gap: 6px; margin-top: 4px; }\n.level-pip[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  padding: 6px 0;\n  border-radius: var(--radius-sm);\n  background: var(--sand-050);\n  color: var(--ink-400);\n  font-size: 12px;\n  font-weight: 700;\n}\n.level-pip--done[_ngcontent-%COMP%] { background: var(--moss-300); color: white; }\n.level-pip--active[_ngcontent-%COMP%] { background: var(--pine-700); color: white; }\n\n\n\n.leaderboard__list[_ngcontent-%COMP%] { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; }\n.leaderboard__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 26px 32px 1fr auto;\n  align-items: center;\n  gap: 10px;\n  font-size: 13.5px;\n  padding: 8px 6px;\n  border-radius: var(--radius-sm);\n}\n.leaderboard__row[_ngcontent-%COMP%]:not(:last-child) { border-bottom: 1px solid var(--sand-050); }\n.leaderboard__row--you[_ngcontent-%COMP%] { background: var(--sand-050); }\n.rank[_ngcontent-%COMP%] { text-align: center; font-weight: 600; color: var(--moss-500); font-size: 15px; }\n.avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--pine-700);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n}\n.row-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 2px; min-width: 0; }\n.name[_ngcontent-%COMP%] { font-weight: 600; color: var(--ink-900); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.level-tag[_ngcontent-%COMP%] { font-size: 11px; color: var(--ink-400); }\n.score[_ngcontent-%COMP%] { color: var(--pine-800); font-weight: 700; }\n\n@media (max-width: 900px) {\n  .layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .sidebar[_ngcontent-%COMP%] { position: static; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChallengesComponent, [{
        type: Component,
        args: [{ selector: 'eco-challenges', standalone: true, imports: [CommonModule], template: "<div class=\"eco-page\">\n  <div class=\"eco-page-header\">\n    <div>\n      <span class=\"eco-eyebrow\">Community Challenges</span>\n      <h1>Take on something together</h1>\n    </div>\n    <input\n      class=\"search\"\n      type=\"text\"\n      placeholder=\"Search challenges or categories\u2026\"\n      (input)=\"onSearch($any($event.target).value)\"\n    />\n  </div>\n\n  <div class=\"layout\">\n    <div class=\"challenge-grid\">\n      @for (c of filtered(); track c.id) {\n        <div class=\"eco-card challenge-card\">\n          <div class=\"challenge-card__top\">\n            <span class=\"eco-tag\">{{ c.category }}</span>\n            <span class=\"days-left\">{{ c.daysLeft }} days left</span>\n          </div>\n          <h3>{{ c.name }}</h3>\n          <p class=\"task-desc\">{{ c.description }}</p>\n\n          <div class=\"task-meta\">\n            <span class=\"diff-tag\" [class]=\"'diff-tag--' + c.difficulty.toLowerCase()\">{{ c.difficulty }}</span>\n            <span class=\"xp-tag\">\u26A1 {{ c.xp }} XP</span>\n          </div>\n\n          @if (c.joined) {\n            <div class=\"track\"><div class=\"fill\" [style.width.%]=\"c.progress\"></div></div>\n            <span class=\"progress-text eco-mono\">{{ c.progress }}% complete</span>\n          }\n\n          <div class=\"challenge-card__footer\">\n            <div class=\"meta\">\n              <span>{{ c.participants | number }} joined</span>\n              <span class=\"reward\">\uD83C\uDFC5 {{ c.reward }}</span>\n            </div>\n            <div class=\"card-actions\">\n              @if (isCompleted(c.id)) {\n                <span class=\"completed-pill\">\u2713 Completed</span>\n              } @else {\n                @if (c.joined) {\n                  <button class=\"eco-btn eco-btn--amber\" (click)=\"complete(c.id)\">\n                    Complete Task\n                  </button>\n                }\n                <button\n                  class=\"eco-btn\"\n                  [class.eco-btn--primary]=\"!c.joined\"\n                  [class.eco-btn--ghost]=\"c.joined\"\n                  (click)=\"toggle(c.id)\"\n                >\n                  {{ c.joined ? 'Leave' : 'Join' }}\n                </button>\n              }\n            </div>\n          </div>\n        </div>\n      } @empty {\n        <p class=\"empty-msg\">No challenges match your search.</p>\n      }\n    </div>\n\n    <aside class=\"sidebar\">\n      <div class=\"eco-card level-card\">\n        <h3>Your Level</h3>\n        <div class=\"level-card__current\">\n          <span class=\"level-card__name\">{{ currentLevel().name }}</span>\n          <span class=\"level-card__xp eco-mono\">{{ totalXp() }} XP</span>\n        </div>\n        <div class=\"level-track\">\n          <div class=\"level-fill\" [style.width.%]=\"levelProgressPct()\"></div>\n        </div>\n        @if (nextLevel(); as next) {\n          <span class=\"level-card__next\">{{ next.minXp - totalXp() }} XP to {{ next.name }}</span>\n        } @else {\n          <span class=\"level-card__next\">Top level reached \uD83C\uDF89</span>\n        }\n        <div class=\"level-ladder\">\n          @for (lvl of xpLevels; track lvl.name) {\n            <span\n              class=\"level-pip\"\n              [class.level-pip--active]=\"lvl.name === currentLevel().name\"\n              [class.level-pip--done]=\"totalXp() > lvl.minXp && lvl.name !== currentLevel().name\"\n            >\n              {{ lvl.level }}\n            </span>\n          }\n        </div>\n      </div>\n\n      <div class=\"eco-card leaderboard\">\n        <h3>Leaderboard</h3>\n        <ol class=\"leaderboard__list\">\n          @for (row of leaderboard(); track row.name) {\n            <li class=\"leaderboard__row\" [class.leaderboard__row--you]=\"row.isYou\">\n              <span class=\"rank\">\n                @if (row.rank <= 3) {\n                  {{ row.rank === 1 ? '\uD83E\uDD47' : row.rank === 2 ? '\uD83E\uDD48' : '\uD83E\uDD49' }}\n                } @else {\n                  <span class=\"eco-mono\">#{{ row.rank }}</span>\n                }\n              </span>\n              <span class=\"avatar\">{{ initials(row.name) }}</span>\n              <span class=\"row-info\">\n                <span class=\"name\">{{ row.name }}{{ row.isYou ? ' (You)' : '' }}</span>\n                <span class=\"level-tag\">{{ row.level }}</span>\n              </span>\n              <span class=\"score eco-mono\">{{ row.xp }}</span>\n            </li>\n          }\n        </ol>\n      </div>\n    </aside>\n  </div>\n</div>\n", styles: [".search {\n  border: 1px solid var(--sand-100);\n  background: var(--white);\n  border-radius: var(--radius-sm);\n  padding: 10px 14px;\n  font-size: 14px;\n  min-width: 260px;\n}\n\n.layout {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  align-items: start;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: sticky;\n  top: 88px;\n}\n\n.challenge-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 18px;\n}\n\n.challenge-card { display: flex; flex-direction: column; gap: 10px; }\n.challenge-card__top { display: flex; justify-content: space-between; align-items: center; }\n.days-left { font-size: 12px; color: var(--ink-400); }\n.challenge-card h3 { font-size: 17px; margin-bottom: 0; }\n.task-desc { margin: 0; }\n\n.task-meta { display: flex; gap: 8px; align-items: center; }\n.diff-tag {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.diff-tag--easy { background: #e0efe8; color: #1d7258; }\n.diff-tag--medium { background: #faf1de; color: var(--amber-600); }\n.diff-tag--hard { background: #fbe4e0; color: var(--danger); }\n.xp-tag {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--pine-700);\n  background: var(--sand-100);\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n\n.track { height: 7px; background: var(--sand-100); border-radius: 999px; overflow: hidden; }\n.fill { height: 100%; background: linear-gradient(90deg, var(--amber-500), var(--moss-500)); }\n.progress-text { font-size: 12px; color: var(--ink-600); }\n\n.challenge-card__footer { display: flex; justify-content: space-between; align-items: center; margin-top: 6px; gap: 10px; flex-wrap: wrap; }\n.meta { display: flex; flex-direction: column; gap: 3px; font-size: 12px; color: var(--ink-400); }\n.reward { color: var(--amber-600); }\n.card-actions { display: flex; gap: 8px; align-items: center; }\n.completed-pill {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--moss-500);\n  background: #e0efe8;\n  padding: 8px 14px;\n  border-radius: var(--radius-sm);\n}\n\n.empty-msg { color: var(--ink-400); grid-column: 1 / -1; }\n\n/* ---- Level card ---- */\n.level-card { display: flex; flex-direction: column; gap: 10px; }\n.level-card__current { display: flex; justify-content: space-between; align-items: baseline; }\n.level-card__name { font-family: var(--font-display); font-weight: 600; color: var(--pine-800); font-size: 17px; }\n.level-card__xp { color: var(--amber-600); font-weight: 600; font-size: 13px; }\n.level-track { height: 9px; background: var(--sand-100); border-radius: 999px; overflow: hidden; }\n.level-fill { height: 100%; background: linear-gradient(90deg, var(--moss-300), var(--moss-500)); transition: width 0.4s ease; }\n.level-card__next { font-size: 12px; color: var(--ink-400); }\n.level-ladder { display: flex; justify-content: space-between; gap: 6px; margin-top: 4px; }\n.level-pip {\n  flex: 1;\n  text-align: center;\n  padding: 6px 0;\n  border-radius: var(--radius-sm);\n  background: var(--sand-050);\n  color: var(--ink-400);\n  font-size: 12px;\n  font-weight: 700;\n}\n.level-pip--done { background: var(--moss-300); color: white; }\n.level-pip--active { background: var(--pine-700); color: white; }\n\n/* ---- Leaderboard ---- */\n.leaderboard__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; }\n.leaderboard__row {\n  display: grid;\n  grid-template-columns: 26px 32px 1fr auto;\n  align-items: center;\n  gap: 10px;\n  font-size: 13.5px;\n  padding: 8px 6px;\n  border-radius: var(--radius-sm);\n}\n.leaderboard__row:not(:last-child) { border-bottom: 1px solid var(--sand-050); }\n.leaderboard__row--you { background: var(--sand-050); }\n.rank { text-align: center; font-weight: 600; color: var(--moss-500); font-size: 15px; }\n.avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--pine-700);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n}\n.row-info { display: flex; flex-direction: column; gap: 2px; min-width: 0; }\n.name { font-weight: 600; color: var(--ink-900); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.level-tag { font-size: 11px; color: var(--ink-400); }\n.score { color: var(--pine-800); font-weight: 700; }\n\n@media (max-width: 900px) {\n  .layout { grid-template-columns: 1fr; }\n  .sidebar { position: static; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ChallengesComponent, { className: "ChallengesComponent", filePath: "app/components/challenges/challenges.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=challenges.component.js.map