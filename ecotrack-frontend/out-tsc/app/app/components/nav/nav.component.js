import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { AuthService } from '../../services/auth.service';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.path;
function NavComponent_For_15_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 24);
    i0.ɵɵelement(1, "rect", 25)(2, "rect", 26)(3, "rect", 27)(4, "rect", 28);
    i0.ɵɵelementEnd();
} }
function NavComponent_For_15_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 24);
    i0.ɵɵelement(1, "path", 29)(2, "path", 30);
    i0.ɵɵelementEnd();
} }
function NavComponent_For_15_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 24);
    i0.ɵɵelement(1, "circle", 31)(2, "circle", 32)(3, "circle", 33);
    i0.ɵɵelementEnd();
} }
function NavComponent_For_15_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 24);
    i0.ɵɵelement(1, "path", 34)(2, "path", 35)(3, "path", 36);
    i0.ɵɵelementEnd();
} }
function NavComponent_For_15_Case_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 24);
    i0.ɵɵelement(1, "path", 37)(2, "path", 38);
    i0.ɵɵelementEnd();
} }
function NavComponent_For_15_Case_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 24);
    i0.ɵɵelement(1, "circle", 39)(2, "path", 40);
    i0.ɵɵelementEnd();
} }
function NavComponent_For_15_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 22);
    i0.ɵɵlistener("click", function NavComponent_For_15_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵelementStart(1, "span", 23);
    i0.ɵɵtemplate(2, NavComponent_For_15_Case_2_Template, 5, 0)(3, NavComponent_For_15_Case_3_Template, 3, 0)(4, NavComponent_For_15_Case_4_Template, 4, 0)(5, NavComponent_For_15_Case_5_Template, 4, 0)(6, NavComponent_For_15_Case_6_Template, 3, 0)(7, NavComponent_For_15_Case_7_Template, 3, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_11_0;
    const link_r3 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", link_r3.path);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(2, (tmp_11_0 = link_r3.icon) === "grid" ? 2 : tmp_11_0 === "leaf" ? 3 : tmp_11_0 === "target" ? 4 : tmp_11_0 === "trophy" ? 5 : tmp_11_0 === "doc" ? 6 : tmp_11_0 === "user" ? 7 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(link_r3.label);
} }
function NavComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 41);
    i0.ɵɵlistener("click", function NavComponent_Conditional_26_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵelementStart(1, "span", 42);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 43);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "button", 44);
    i0.ɵɵlistener("click", function NavComponent_Conditional_26_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(6, " Log out ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.initials(ctx_r1.loggedInName()), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loggedInName(), " ");
} }
function NavComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 45);
    i0.ɵɵlistener("click", function NavComponent_Conditional_27_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(1, " Log in ");
    i0.ɵɵelementEnd();
} }
export class NavComponent {
    data = inject(MockDataService);
    auth = inject(AuthService);
    links = [
        { path: '/dashboard', label: 'Dashboard', icon: 'grid' },
        { path: '/carbon-tracker', label: 'Carbon Tracker', icon: 'leaf' },
        { path: '/goals', label: 'Goals', icon: 'target' },
        { path: '/challenges', label: 'Challenges', icon: 'trophy' },
        { path: '/reports', label: 'Reports', icon: 'doc' },
        { path: '/profile', label: 'Profile', icon: 'user' },
    ];
    menuOpen = signal(false);
    user = this.data.getUser();
    // Current Eco Score
    currentEcoScore = this.data.currentEcoScore;
    isLoggedIn = this.auth.isLoggedIn;
    loggedInName = this.auth.userName;
    toggleMenu() {
        this.menuOpen.update((v) => !v);
    }
    closeMenu() {
        this.menuOpen.set(false);
    }
    initials(name) {
        return this.auth.initials(name);
    }
    logout() {
        this.auth.logout();
        this.closeMenu();
    }
    static ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavComponent, selectors: [["eco-nav"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 32, vars: 7, consts: [[1, "nav"], [1, "nav__inner"], ["routerLink", "/dashboard", 1, "nav__brand", 3, "click"], ["aria-hidden", "true", 1, "nav__brand-mark"], ["viewBox", "0 0 24 24", "width", "22", "height", "22", "fill", "none"], ["d", "M12 2C7 2 4 6 4 11c0 6 4 10 8 11 4-1 8-5 8-11 0-5-3-9-8-9Z", "fill", "#52796f"], ["d", "M12 6v13", "stroke", "#0f2e22", "stroke-width", "1.4", "stroke-linecap", "round"], ["d", "M12 10c-1.6-1.6-3.6-1.8-5-1 .4 1.8 1.8 3.2 3.6 3.6M12 14c1.8-1 3.4-.8 4.6.4-.6 1.6-2.2 2.6-4 2.8", "stroke", "#0f2e22", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "nav__brand-text"], [1, "nav__brand-name"], [1, "nav__brand-sub"], [1, "nav__links"], ["routerLinkActive", "nav__link--active", 1, "nav__link", 3, "routerLink"], [1, "nav__right"], ["title", "Eco Score", 1, "nav__score"], [1, "nav__score-ring"], ["viewBox", "0 0 36 36", "width", "34", "height", "34"], ["cx", "18", "cy", "18", "r", "15.5", "fill", "none", "stroke", "#efe9da", "stroke-width", "3"], ["cx", "18", "cy", "18", "r", "15.5", "fill", "none", "stroke", "#d68c45", "stroke-width", "3", "stroke-dasharray", "97.4", "stroke-linecap", "round", "transform", "rotate(-90 18 18)"], [1, "nav__score-value", "eco-mono"], [1, "nav__score-label"], ["aria-label", "Toggle navigation menu", 1, "nav__menu-toggle", 3, "click"], ["routerLinkActive", "nav__link--active", 1, "nav__link", 3, "click", "routerLink"], ["aria-hidden", "true", 1, "nav__link-icon"], ["viewBox", "0 0 20 20", "width", "18", "height", "18"], ["x", "2", "y", "2", "width", "7", "height", "7", "rx", "1.5"], ["x", "11", "y", "2", "width", "7", "height", "7", "rx", "1.5"], ["x", "2", "y", "11", "width", "7", "height", "7", "rx", "1.5"], ["x", "11", "y", "11", "width", "7", "height", "7", "rx", "1.5"], ["d", "M17 3C9 3 3 9 3 17c8 0 14-6 14-14Z"], ["d", "M4 16 15 5", "stroke", "#f7f4ec", "stroke-width", "1.2", "fill", "none"], ["cx", "10", "cy", "10", "r", "8"], ["cx", "10", "cy", "10", "r", "4.5", "fill", "#f7f4ec"], ["cx", "10", "cy", "10", "r", "1.6"], ["d", "M5 3h10v4a5 5 0 0 1-10 0V3Z"], ["d", "M8 13h4v3H8z"], ["d", "M6 15h8v2H6z"], ["d", "M5 2h7l3 3v13H5z"], ["d", "M12 2v3h3", "fill", "none", "stroke", "#f7f4ec", "stroke-width", "1.1"], ["cx", "10", "cy", "6.5", "r", "3.5"], ["d", "M3 18c1-4 4-6 7-6s6 2 7 6"], ["routerLink", "/profile", 1, "nav__account", 3, "click"], [1, "nav__account-avatar"], [1, "nav__account-name"], [1, "eco-btn", "eco-btn--ghost", "nav__logout", 3, "click"], ["routerLink", "/login", 1, "eco-btn", "eco-btn--amber", "nav__login-btn", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵlistener("click", function NavComponent_Template_a_click_2_listener() { return ctx.closeMenu(); });
            i0.ɵɵelementStart(3, "span", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(4, "svg", 4);
            i0.ɵɵelement(5, "path", 5)(6, "path", 6)(7, "path", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(8, "span", 8)(9, "span", 9);
            i0.ɵɵtext(10, "EcoTrack");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span", 10);
            i0.ɵɵtext(12, "Sustainability Platform");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "nav", 11);
            i0.ɵɵrepeaterCreate(14, NavComponent_For_15_Template, 10, 3, "a", 12, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 13)(17, "div", 14)(18, "span", 15);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(19, "svg", 16);
            i0.ɵɵelement(20, "circle", 17)(21, "circle", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(22, "span", 19);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "span", 20);
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(26, NavComponent_Conditional_26_Template, 7, 2)(27, NavComponent_Conditional_27_Template, 2, 0);
            i0.ɵɵelementStart(28, "button", 21);
            i0.ɵɵlistener("click", function NavComponent_Template_button_click_28_listener() { return ctx.toggleMenu(); });
            i0.ɵɵelement(29, "span")(30, "span")(31, "span");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(13);
            i0.ɵɵclassProp("nav__links--open", ctx.menuOpen());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.links);
            i0.ɵɵadvance(7);
            i0.ɵɵattribute("stroke-dashoffset", 97.4 - 97.4 * ctx.currentEcoScore() / 1000);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.currentEcoScore(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.user().level, " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(26, ctx.isLoggedIn() ? 26 : 27);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", ctx.menuOpen());
        } }, dependencies: [RouterLink, RouterLinkActive], styles: [".nav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 40;\n  background: linear-gradient(180deg, var(--pine-800), var(--pine-700));\n  box-shadow: var(--shadow-nav);\n}\n\n.nav__inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n\n.nav__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.nav__brand-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--sand-050);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nav__brand-text[_ngcontent-%COMP%] { display: flex; flex-direction: column; line-height: 1.1; }\n.nav__brand-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 19px;\n  font-weight: 600;\n  color: var(--white);\n}\n.nav__brand-sub[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--moss-300);\n}\n\n.nav__links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex: 1;\n}\n\n.nav__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 13px;\n  border-radius: 999px;\n  color: rgba(247, 244, 236, 0.78);\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.15s ease, color 0.15s ease;\n  white-space: nowrap;\n}\n.nav__link-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { fill: currentColor; display: block; }\n.nav__link[_ngcontent-%COMP%]:hover { background: rgba(247, 244, 236, 0.08); color: var(--white); }\n.nav__link--active[_ngcontent-%COMP%] {\n  background: var(--sand-050);\n  color: var(--pine-800);\n}\n.nav__link--active[_ngcontent-%COMP%]   .nav__link-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { fill: var(--pine-800); }\n\n.nav__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n\n.nav__score[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.nav__score-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nav__score-value[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 9px;\n  font-weight: 600;\n  color: var(--white);\n}\n.nav__score-label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--sand-100);\n  font-weight: 500;\n  display: none;\n}\n\n.nav__account[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 12px 5px 5px;\n  border-radius: 999px;\n  background: rgba(247, 244, 236, 0.1);\n  transition: background 0.15s ease;\n}\n.nav__account[_ngcontent-%COMP%]:hover { background: rgba(247, 244, 236, 0.18); }\n.nav__account-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--sand-050);\n  color: var(--pine-800);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.nav__account-name[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--white);\n  white-space: nowrap;\n}\n\n.nav__logout[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 13px;\n  color: var(--sand-050);\n  border-color: rgba(247, 244, 236, 0.35);\n}\n.nav__logout[_ngcontent-%COMP%]:hover { background: rgba(247, 244, 236, 0.1); }\n\n.nav__login-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 13.5px;\n  white-space: nowrap;\n}\n\n.nav__menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 4px;\n  background: none;\n  border: none;\n  padding: 8px;\n}\n.nav__menu-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 2px;\n  background: var(--sand-050);\n  border-radius: 2px;\n}\n\n@media (min-width: 900px) {\n  .nav__score-label[_ngcontent-%COMP%] { display: block; }\n}\n\n@media (max-width: 640px) {\n  .nav__account-name[_ngcontent-%COMP%] { display: none; }\n  .nav__account[_ngcontent-%COMP%] { padding: 5px; }\n  .nav__logout[_ngcontent-%COMP%] { padding: 8px 10px; }\n}\n\n@media (max-width: 899px) {\n  .nav__links[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 72px;\n    left: 0;\n    right: 0;\n    background: var(--pine-800);\n    flex-direction: column;\n    align-items: stretch;\n    padding: 8px 16px 16px;\n    gap: 2px;\n    display: none;\n    box-shadow: var(--shadow-nav);\n  }\n  .nav__links--open[_ngcontent-%COMP%] { display: flex; }\n  .nav__link[_ngcontent-%COMP%] { padding: 12px 14px; }\n  .nav__menu-toggle[_ngcontent-%COMP%] { display: flex; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavComponent, [{
        type: Component,
        args: [{ selector: 'eco-nav', standalone: true, imports: [RouterLink, RouterLinkActive], template: "<header class=\"nav\">\n  <div class=\"nav__inner\">\n\n    <!-- BRAND -->\n    <a routerLink=\"/dashboard\" class=\"nav__brand\" (click)=\"closeMenu()\">\n      <span class=\"nav__brand-mark\" aria-hidden=\"true\">\n        <svg viewBox=\"0 0 24 24\" width=\"22\" height=\"22\" fill=\"none\">\n          <path\n            d=\"M12 2C7 2 4 6 4 11c0 6 4 10 8 11 4-1 8-5 8-11 0-5-3-9-8-9Z\"\n            fill=\"#52796f\"\n          />\n          <path\n            d=\"M12 6v13\"\n            stroke=\"#0f2e22\"\n            stroke-width=\"1.4\"\n            stroke-linecap=\"round\"\n          />\n          <path\n            d=\"M12 10c-1.6-1.6-3.6-1.8-5-1 .4 1.8 1.8 3.2 3.6 3.6M12 14c1.8-1 3.4-.8 4.6.4-.6 1.6-2.2 2.6-4 2.8\"\n            stroke=\"#0f2e22\"\n            stroke-width=\"1.4\"\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\"\n          />\n        </svg>\n      </span>\n\n      <span class=\"nav__brand-text\">\n        <span class=\"nav__brand-name\">EcoTrack</span>\n        <span class=\"nav__brand-sub\">Sustainability Platform</span>\n      </span>\n    </a>\n\n\n    <!-- NAVIGATION LINKS -->\n    <nav\n      class=\"nav__links\"\n      [class.nav__links--open]=\"menuOpen()\"\n    >\n\n      @for (link of links; track link.path) {\n\n        <a\n          [routerLink]=\"link.path\"\n          routerLinkActive=\"nav__link--active\"\n          class=\"nav__link\"\n          (click)=\"closeMenu()\"\n        >\n\n          <span class=\"nav__link-icon\" aria-hidden=\"true\">\n\n            @switch (link.icon) {\n\n              @case ('grid') {\n                <svg viewBox=\"0 0 20 20\" width=\"18\" height=\"18\">\n                  <rect x=\"2\" y=\"2\" width=\"7\" height=\"7\" rx=\"1.5\"/>\n                  <rect x=\"11\" y=\"2\" width=\"7\" height=\"7\" rx=\"1.5\"/>\n                  <rect x=\"2\" y=\"11\" width=\"7\" height=\"7\" rx=\"1.5\"/>\n                  <rect x=\"11\" y=\"11\" width=\"7\" height=\"7\" rx=\"1.5\"/>\n                </svg>\n              }\n\n              @case ('leaf') {\n                <svg viewBox=\"0 0 20 20\" width=\"18\" height=\"18\">\n                  <path d=\"M17 3C9 3 3 9 3 17c8 0 14-6 14-14Z\"/>\n                  <path\n                    d=\"M4 16 15 5\"\n                    stroke=\"#f7f4ec\"\n                    stroke-width=\"1.2\"\n                    fill=\"none\"\n                  />\n                </svg>\n              }\n\n              @case ('target') {\n                <svg viewBox=\"0 0 20 20\" width=\"18\" height=\"18\">\n                  <circle cx=\"10\" cy=\"10\" r=\"8\"/>\n                  <circle cx=\"10\" cy=\"10\" r=\"4.5\" fill=\"#f7f4ec\"/>\n                  <circle cx=\"10\" cy=\"10\" r=\"1.6\"/>\n                </svg>\n              }\n\n              @case ('trophy') {\n                <svg viewBox=\"0 0 20 20\" width=\"18\" height=\"18\">\n                  <path d=\"M5 3h10v4a5 5 0 0 1-10 0V3Z\"/>\n                  <path d=\"M8 13h4v3H8z\"/>\n                  <path d=\"M6 15h8v2H6z\"/>\n                </svg>\n              }\n\n              @case ('doc') {\n                <svg viewBox=\"0 0 20 20\" width=\"18\" height=\"18\">\n                  <path d=\"M5 2h7l3 3v13H5z\"/>\n                  <path\n                    d=\"M12 2v3h3\"\n                    fill=\"none\"\n                    stroke=\"#f7f4ec\"\n                    stroke-width=\"1.1\"\n                  />\n                </svg>\n              }\n\n              @case ('user') {\n                <svg viewBox=\"0 0 20 20\" width=\"18\" height=\"18\">\n                  <circle cx=\"10\" cy=\"6.5\" r=\"3.5\"/>\n                  <path d=\"M3 18c1-4 4-6 7-6s6 2 7 6\"/>\n                </svg>\n              }\n\n            }\n\n          </span>\n\n          <span>{{ link.label }}</span>\n\n        </a>\n\n      }\n\n    </nav>\n\n\n    <!-- RIGHT SIDE -->\n    <div class=\"nav__right\">\n\n      <!-- ECO SCORE -->\n      <div class=\"nav__score\" title=\"Eco Score\">\n\n        <span class=\"nav__score-ring\">\n\n          <svg viewBox=\"0 0 36 36\" width=\"34\" height=\"34\">\n\n            <circle\n              cx=\"18\"\n              cy=\"18\"\n              r=\"15.5\"\n              fill=\"none\"\n              stroke=\"#efe9da\"\n              stroke-width=\"3\"\n            />\n\n            <circle\n              cx=\"18\"\n              cy=\"18\"\n              r=\"15.5\"\n              fill=\"none\"\n              stroke=\"#d68c45\"\n              stroke-width=\"3\"\n              stroke-dasharray=\"97.4\"\n            [attr.stroke-dashoffset]=\"\n  97.4 - (97.4 * currentEcoScore() / 1000)\n\"\n              stroke-linecap=\"round\"\n              transform=\"rotate(-90 18 18)\"\n            />\n\n          </svg>\n\n          <span class=\"nav__score-value eco-mono\">\n           {{ currentEcoScore() }}\n          </span>\n\n        </span>\n\n        <span class=\"nav__score-label\">\n          {{ user().level }}\n        </span>\n\n      </div>\n\n\n      <!-- ACCOUNT -->\n      @if (isLoggedIn()) {\n\n        <a\n          routerLink=\"/profile\"\n          class=\"nav__account\"\n          (click)=\"closeMenu()\"\n        >\n\n          <span class=\"nav__account-avatar\">\n            {{ initials(loggedInName()) }}\n          </span>\n\n          <span class=\"nav__account-name\">\n            {{ loggedInName() }}\n          </span>\n\n        </a>\n\n        <button\n          class=\"eco-btn eco-btn--ghost nav__logout\"\n          (click)=\"logout()\"\n        >\n          Log out\n        </button>\n\n      } @else {\n\n        <a\n          routerLink=\"/login\"\n          class=\"eco-btn eco-btn--amber nav__login-btn\"\n          (click)=\"closeMenu()\"\n        >\n          Log in\n        </a>\n\n      }\n\n\n      <!-- MOBILE MENU -->\n      <button\n        class=\"nav__menu-toggle\"\n        (click)=\"toggleMenu()\"\n        [attr.aria-expanded]=\"menuOpen()\"\n        aria-label=\"Toggle navigation menu\"\n      >\n        <span></span>\n        <span></span>\n        <span></span>\n      </button>\n\n    </div>\n\n  </div>\n</header>", styles: [".nav {\n  position: sticky;\n  top: 0;\n  z-index: 40;\n  background: linear-gradient(180deg, var(--pine-800), var(--pine-700));\n  box-shadow: var(--shadow-nav);\n}\n\n.nav__inner {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n\n.nav__brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.nav__brand-mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--sand-050);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nav__brand-text { display: flex; flex-direction: column; line-height: 1.1; }\n.nav__brand-name {\n  font-family: var(--font-display);\n  font-size: 19px;\n  font-weight: 600;\n  color: var(--white);\n}\n.nav__brand-sub {\n  font-size: 10.5px;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--moss-300);\n}\n\n.nav__links {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex: 1;\n}\n\n.nav__link {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 13px;\n  border-radius: 999px;\n  color: rgba(247, 244, 236, 0.78);\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.15s ease, color 0.15s ease;\n  white-space: nowrap;\n}\n.nav__link-icon svg { fill: currentColor; display: block; }\n.nav__link:hover { background: rgba(247, 244, 236, 0.08); color: var(--white); }\n.nav__link--active {\n  background: var(--sand-050);\n  color: var(--pine-800);\n}\n.nav__link--active .nav__link-icon svg { fill: var(--pine-800); }\n\n.nav__right {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n\n.nav__score {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.nav__score-ring {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nav__score-value {\n  position: absolute;\n  font-size: 9px;\n  font-weight: 600;\n  color: var(--white);\n}\n.nav__score-label {\n  font-size: 12.5px;\n  color: var(--sand-100);\n  font-weight: 500;\n  display: none;\n}\n\n.nav__account {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 12px 5px 5px;\n  border-radius: 999px;\n  background: rgba(247, 244, 236, 0.1);\n  transition: background 0.15s ease;\n}\n.nav__account:hover { background: rgba(247, 244, 236, 0.18); }\n.nav__account-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--sand-050);\n  color: var(--pine-800);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.nav__account-name {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--white);\n  white-space: nowrap;\n}\n\n.nav__logout {\n  padding: 8px 14px;\n  font-size: 13px;\n  color: var(--sand-050);\n  border-color: rgba(247, 244, 236, 0.35);\n}\n.nav__logout:hover { background: rgba(247, 244, 236, 0.1); }\n\n.nav__login-btn {\n  padding: 8px 16px;\n  font-size: 13.5px;\n  white-space: nowrap;\n}\n\n.nav__menu-toggle {\n  display: none;\n  flex-direction: column;\n  gap: 4px;\n  background: none;\n  border: none;\n  padding: 8px;\n}\n.nav__menu-toggle span {\n  width: 20px;\n  height: 2px;\n  background: var(--sand-050);\n  border-radius: 2px;\n}\n\n@media (min-width: 900px) {\n  .nav__score-label { display: block; }\n}\n\n@media (max-width: 640px) {\n  .nav__account-name { display: none; }\n  .nav__account { padding: 5px; }\n  .nav__logout { padding: 8px 10px; }\n}\n\n@media (max-width: 899px) {\n  .nav__links {\n    position: fixed;\n    top: 72px;\n    left: 0;\n    right: 0;\n    background: var(--pine-800);\n    flex-direction: column;\n    align-items: stretch;\n    padding: 8px 16px 16px;\n    gap: 2px;\n    display: none;\n    box-shadow: var(--shadow-nav);\n  }\n  .nav__links--open { display: flex; }\n  .nav__link { padding: 12px 14px; }\n  .nav__menu-toggle { display: flex; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavComponent, { className: "NavComponent", filePath: "app/components/nav/nav.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=nav.component.js.map