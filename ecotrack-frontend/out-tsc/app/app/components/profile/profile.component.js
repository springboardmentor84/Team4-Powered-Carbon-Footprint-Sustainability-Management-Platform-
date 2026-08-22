import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MockDataService } from '../../services/mock-data.service';
import { AuthService } from '../../services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.id;
function ProfileComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1, "Logged in");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "p");
    i0.ɵɵtext(2, "Log in to personalize your profile.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 23);
    i0.ɵɵtext(4, "Log in");
    i0.ɵɵelementEnd()();
} }
function ProfileComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function ProfileComponent_Conditional_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(1, "Log out");
    i0.ɵɵelementEnd();
} }
function ProfileComponent_For_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r3);
} }
function ProfileComponent_For_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "span", 26);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 27);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 28);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const b_r4 = ctx.$implicit;
    i0.ɵɵclassProp("badge--locked", !b_r4.earned);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(b_r4.earned ? "\uD83C\uDFC5" : "\uD83D\uDD12");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(b_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(b_r4.description);
} }
export class ProfileComponent {
    fb = inject(FormBuilder);
    data = inject(MockDataService);
    auth = inject(AuthService);
    http = inject(HttpClient);
    // Existing mock data
    user = this.data.getUser();
    badges = this.data.getBadges();
    // Authentication
    isLoggedIn = this.auth.isLoggedIn;
    loggedInName = this.auth.userName;
    // Display name
    displayName = computed(() => this.loggedInName() ?? this.user().name);
    // Avatar
    avatarInitials = computed(() => this.isLoggedIn()
        ? this.auth.initials(this.loggedInName())
        : this.user().avatarInitials);
    // Profile form
    form = this.fb.group({
        name: [this.displayName()],
        email: [this.user().email],
        location: [this.user().location],
    });
    ngOnInit() {
        this.loadProfile();
    }
    // ==========================================
    // LOAD PROFILE FROM BACKEND
    // ==========================================
    loadProfile() {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        if (!token || !email) {
            console.log('User is not logged in.');
            return;
        }
        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        this.http.get(`http://localhost:8080/profile/${encodeURIComponent(email)}`, { headers }).subscribe({
            next: (profile) => {
                console.log('Profile loaded from backend:', profile);
                const fullName = profile?.user?.fullName ||
                    this.displayName();
                let location = '';
                if (profile?.city && profile?.country) {
                    location = `${profile.city}, ${profile.country}`;
                }
                else if (profile?.city) {
                    location = profile.city;
                }
                else if (profile?.country) {
                    location = profile.country;
                }
                this.form.patchValue({
                    name: fullName,
                    email: profile?.user?.email || email,
                    location: location
                });
            },
            error: (error) => {
                console.error('Failed to load profile:', error);
                if (error.status === 403) {
                    console.error('403 Forbidden - JWT token was not accepted by backend.');
                }
            }
        });
    }
    // ==========================================
    // SAVE PROFILE TO BACKEND
    // ==========================================
    save() {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        if (!token || !email) {
            alert('Please login again.');
            return;
        }
        const fullName = this.form.value.name?.trim() || '';
        const location = this.form.value.location?.trim() || '';
        if (!fullName) {
            alert('Please enter your full name.');
            return;
        }
        if (!location) {
            alert('Please enter your location.');
            return;
        }
        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        const url = `http://localhost:8080/profile/${encodeURIComponent(email)}` +
            `?fullName=${encodeURIComponent(fullName)}` +
            `&location=${encodeURIComponent(location)}`;
        console.log('Updating profile:', {
            email,
            fullName,
            location
        });
        this.http.put(url, {}, { headers }).subscribe({
            next: (response) => {
                console.log('Profile updated successfully:', response);
                // Update form using backend response
                const updatedLocation = response?.city && response?.country
                    ? `${response.city}, ${response.country}`
                    : response?.city || location;
                this.form.patchValue({
                    name: response?.user?.fullName || fullName,
                    email: response?.user?.email || email,
                    location: updatedLocation
                });
                alert('Profile changes saved successfully!');
            },
            error: (error) => {
                console.error('Profile update failed:', error);
                if (error.status === 403) {
                    alert('Access denied. Please logout and login again.');
                }
                else if (error.status === 404) {
                    alert('User profile not found.');
                }
                else if (error.status === 400) {
                    alert('Invalid profile details.');
                }
                else {
                    alert('Failed to save profile changes.');
                }
            }
        });
    }
    // ==========================================
    // LOGOUT
    // ==========================================
    logout() {
        this.auth.logout();
    }
    static ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileComponent, selectors: [["eco-profile"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 61, vars: 9, consts: [[1, "eco-page"], [1, "eco-page-header"], [1, "eco-eyebrow"], [1, "layout"], [1, "eco-card", "summary"], [1, "eco-tag", "eco-tag--status", "eco-tag--online"], [1, "avatar"], [1, "eco-tag"], [1, "eco-btn", "eco-btn--ghost"], [1, "summary__stats"], [1, "eco-mono"], [1, "interests"], [1, "right-col"], [1, "eco-card", 3, "ngSubmit", "formGroup"], [1, "field"], ["type", "text", "formControlName", "name"], ["type", "email", "formControlName", "email"], ["type", "text", "formControlName", "location"], ["type", "submit", 1, "eco-btn", "eco-btn--primary"], [1, "eco-card"], [1, "badge-grid"], [1, "badge", 3, "badge--locked"], [1, "login-prompt"], ["routerLink", "/login", 1, "eco-btn", "eco-btn--amber"], [1, "eco-btn", "eco-btn--ghost", 3, "click"], [1, "badge"], [1, "badge__icon"], [1, "badge__name"], [1, "badge__desc"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "Profile");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Your account");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "div", 3)(8, "div", 4);
            i0.ɵɵtemplate(9, ProfileComponent_Conditional_9_Template, 2, 0, "span", 5)(10, ProfileComponent_Conditional_10_Template, 5, 0);
            i0.ɵɵelementStart(11, "div", 6);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "h3");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "span", 7);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, ProfileComponent_Conditional_17_Template, 2, 0, "button", 8);
            i0.ɵɵelementStart(18, "div", 9)(19, "div")(20, "strong", 10);
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "span");
            i0.ɵɵtext(23, "Eco Score");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div")(25, "strong");
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "span");
            i0.ɵɵtext(28, "Level");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "div")(30, "strong");
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "span");
            i0.ɵɵtext(33, "Member since");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(34, "div", 11);
            i0.ɵɵrepeaterCreate(35, ProfileComponent_For_36_Template, 2, 1, "span", 7, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "div", 12)(38, "form", 13);
            i0.ɵɵlistener("ngSubmit", function ProfileComponent_Template_form_ngSubmit_38_listener() { return ctx.save(); });
            i0.ɵɵelementStart(39, "h3");
            i0.ɵɵtext(40, "Account details");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "label", 14)(42, "span");
            i0.ɵɵtext(43, "Full name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(44, "input", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "label", 14)(46, "span");
            i0.ɵɵtext(47, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(48, "input", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "label", 14)(50, "span");
            i0.ɵɵtext(51, "Location");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(52, "input", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "button", 18);
            i0.ɵɵtext(54, "Save changes");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(55, "div", 19)(56, "h3");
            i0.ɵɵtext(57, "Badges");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "div", 20);
            i0.ɵɵrepeaterCreate(59, ProfileComponent_For_60_Template, 7, 5, "div", 21, _forTrack0);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(9, ctx.isLoggedIn() ? 9 : 10);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.avatarInitials());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.displayName());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.user().role);
            i0.ɵɵadvance();
            i0.ɵɵconditional(17, ctx.isLoggedIn() ? 17 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.user().ecoScore);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.user().level);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.user().joinedOn);
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.user().interests);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(21);
            i0.ɵɵrepeater(ctx.badges());
        } }, dependencies: [CommonModule,
            ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, RouterLink], styles: [".layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 20px;\n  align-items: start;\n}\n\n.summary[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center; }\n.login-prompt[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--sand-100);\n}\n.login-prompt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; font-size: 13px; }\n.eco-tag--status[_ngcontent-%COMP%] { font-weight: 700; }\n.eco-tag--online[_ngcontent-%COMP%] { background: rgba(82, 121, 111, 0.15); color: var(--moss-500); }\n.avatar[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 76px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--moss-500), var(--pine-700));\n  color: var(--white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-display);\n  font-size: 26px;\n  font-weight: 600;\n}\n.summary__stats[_ngcontent-%COMP%] { display: flex; gap: 18px; margin-top: 8px; padding-top: 12px; border-top: 1px solid var(--sand-100); width: 100%; justify-content: center; }\n.summary__stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: center; gap: 2px; }\n.summary__stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 14px; color: var(--pine-800); }\n.summary__stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 11px; color: var(--ink-400); }\n.interests[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-top: 8px; }\n\n.right-col[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 20px; }\n.right-col[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 14px; }\n.field[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: var(--ink-600); font-weight: 500; }\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid var(--sand-100);\n  background: var(--sand-050);\n  border-radius: var(--radius-sm);\n  padding: 10px 12px;\n  font-size: 14px;\n}\n.right-col[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { align-self: flex-start; }\n\n.badge-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 14px; }\n.badge[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: var(--sand-050);\n  border-radius: var(--radius-sm);\n  padding: 14px;\n  text-align: center;\n}\n.badge--locked[_ngcontent-%COMP%] { opacity: 0.5; }\n.badge__icon[_ngcontent-%COMP%] { font-size: 22px; }\n.badge__name[_ngcontent-%COMP%] { font-weight: 600; font-size: 13px; color: var(--pine-800); }\n.badge__desc[_ngcontent-%COMP%] { font-size: 11.5px; color: var(--ink-400); }\n\n@media (max-width: 800px) {\n  .layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileComponent, [{
        type: Component,
        args: [{ selector: 'eco-profile', standalone: true, imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    RouterLink
                ], template: "<div class=\"eco-page\">\n  <div class=\"eco-page-header\">\n    <div>\n      <span class=\"eco-eyebrow\">Profile</span>\n      <h1>Your account</h1>\n    </div>\n  </div>\n\n  <div class=\"layout\">\n    <div class=\"eco-card summary\">\n      @if (isLoggedIn()) {\n        <span class=\"eco-tag eco-tag--status eco-tag--online\">Logged in</span>\n      } @else {\n        <div class=\"login-prompt\">\n          <p>Log in to personalize your profile.</p>\n          <a routerLink=\"/login\" class=\"eco-btn eco-btn--amber\">Log in</a>\n        </div>\n      }\n      <div class=\"avatar\">{{ avatarInitials() }}</div>\n      <h3>{{ displayName() }}</h3>\n      <span class=\"eco-tag\">{{ user().role }}</span>\n      @if (isLoggedIn()) {\n        <button class=\"eco-btn eco-btn--ghost\" (click)=\"logout()\">Log out</button>\n      }\n      <div class=\"summary__stats\">\n        <div><strong class=\"eco-mono\">{{ user().ecoScore }}</strong><span>Eco Score</span></div>\n        <div><strong>{{ user().level }}</strong><span>Level</span></div>\n        <div><strong>{{ user().joinedOn }}</strong><span>Member since</span></div>\n      </div>\n      <div class=\"interests\">\n        @for (i of user().interests; track i) {\n          <span class=\"eco-tag\">{{ i }}</span>\n        }\n      </div>\n    </div>\n\n    <div class=\"right-col\">\n      <form class=\"eco-card\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n        <h3>Account details</h3>\n        <label class=\"field\">\n          <span>Full name</span>\n          <input type=\"text\" formControlName=\"name\" />\n        </label>\n        <label class=\"field\">\n          <span>Email</span>\n          <input type=\"email\" formControlName=\"email\" />\n        </label>\n        <label class=\"field\">\n          <span>Location</span>\n          <input type=\"text\" formControlName=\"location\" />\n        </label>\n        <button type=\"submit\" class=\"eco-btn eco-btn--primary\">Save changes</button>\n      </form>\n\n      <div class=\"eco-card\">\n        <h3>Badges</h3>\n        <div class=\"badge-grid\">\n          @for (b of badges(); track b.id) {\n            <div class=\"badge\" [class.badge--locked]=\"!b.earned\">\n              <span class=\"badge__icon\">{{ b.earned ? '\uD83C\uDFC5' : '\uD83D\uDD12' }}</span>\n              <span class=\"badge__name\">{{ b.name }}</span>\n              <span class=\"badge__desc\">{{ b.description }}</span>\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".layout {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 20px;\n  align-items: start;\n}\n\n.summary { display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center; }\n.login-prompt {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--sand-100);\n}\n.login-prompt p { margin: 0; font-size: 13px; }\n.eco-tag--status { font-weight: 700; }\n.eco-tag--online { background: rgba(82, 121, 111, 0.15); color: var(--moss-500); }\n.avatar {\n  width: 76px;\n  height: 76px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--moss-500), var(--pine-700));\n  color: var(--white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-display);\n  font-size: 26px;\n  font-weight: 600;\n}\n.summary__stats { display: flex; gap: 18px; margin-top: 8px; padding-top: 12px; border-top: 1px solid var(--sand-100); width: 100%; justify-content: center; }\n.summary__stats div { display: flex; flex-direction: column; align-items: center; gap: 2px; }\n.summary__stats strong { font-size: 14px; color: var(--pine-800); }\n.summary__stats span { font-size: 11px; color: var(--ink-400); }\n.interests { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-top: 8px; }\n\n.right-col { display: flex; flex-direction: column; gap: 20px; }\n.right-col form { display: flex; flex-direction: column; gap: 14px; }\n.field { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: var(--ink-600); font-weight: 500; }\n.field input {\n  border: 1px solid var(--sand-100);\n  background: var(--sand-050);\n  border-radius: var(--radius-sm);\n  padding: 10px 12px;\n  font-size: 14px;\n}\n.right-col form button { align-self: flex-start; }\n\n.badge-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 14px; }\n.badge {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: var(--sand-050);\n  border-radius: var(--radius-sm);\n  padding: 14px;\n  text-align: center;\n}\n.badge--locked { opacity: 0.5; }\n.badge__icon { font-size: 22px; }\n.badge__name { font-weight: 600; font-size: 13px; color: var(--pine-800); }\n.badge__desc { font-size: 11.5px; color: var(--ink-400); }\n\n@media (max-width: 800px) {\n  .layout { grid-template-columns: 1fr; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "app/components/profile/profile.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=profile.component.js.map