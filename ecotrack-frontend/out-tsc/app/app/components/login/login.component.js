import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function LoginComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵtext(1, " Enter a valid email. ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵtext(1, " Password is required. ");
    i0.ɵɵelementEnd();
} }
export class LoginComponent {
    fb = inject(FormBuilder);
    authService = inject(AuthService);
    router = inject(Router);
    submitted = signal(false);
    form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    });
    get f() {
        return this.form.controls;
    }
    submit() {
        this.submitted.set(true);
        if (this.form.invalid) {
            return;
        }
        const loginData = {
            email: this.form.value.email,
            password: this.form.value.password
        };
        this.authService.login(loginData).subscribe({
            next: (response) => {
                console.log('Login Success:', response);
                this.authService.saveUser(response);
                this.router.navigate(['/dashboard']);
            },
            error: (err) => {
                console.error('Login Failed:', err);
                alert('Invalid Email or Password');
            }
        });
    }
    static ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["eco-login"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 26, vars: 3, consts: [[1, "login-page"], ["novalidate", "", 1, "eco-card", "login-card", 3, "ngSubmit", "formGroup"], ["aria-hidden", "true", 1, "login-card__mark"], ["viewBox", "0 0 24 24", "width", "26", "height", "26", "fill", "none"], ["d", "M12 2C7 2 4 6 4 11c0 6 4 10 8 11 4-1 8-5 8-11 0-5-3-9-8-9Z", "fill", "#52796f"], ["d", "M12 6v13", "stroke", "#0f2e22", "stroke-width", "1.4", "stroke-linecap", "round"], [1, "field"], ["type", "email", "formControlName", "email", "placeholder", "Enter your email", "autocomplete", "email"], ["class", "field__error", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "Enter your password", "autocomplete", "current-password"], ["type", "submit", 1, "eco-btn", "eco-btn--primary", "login-card__submit"], [1, "signup-text"], ["routerLink", "/register"], [1, "field__error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "form", 1);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(2, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 3);
            i0.ɵɵelement(4, "path", 4)(5, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "h1");
            i0.ɵɵtext(7, "Welcome Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "Login to your EcoTrack account.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "label", 6)(11, "span");
            i0.ɵɵtext(12, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "input", 7);
            i0.ɵɵtemplate(14, LoginComponent_span_14_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "label", 6)(16, "span");
            i0.ɵɵtext(17, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "input", 9);
            i0.ɵɵtemplate(19, LoginComponent_span_19_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button", 10);
            i0.ɵɵtext(21, " Login ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "p", 11);
            i0.ɵɵtext(23, " Don't have an account? ");
            i0.ɵɵelementStart(24, "a", 12);
            i0.ɵɵtext(25, "Create Account");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("ngIf", ctx.submitted() && ctx.f.email.invalid);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.submitted() && ctx.f.password.invalid);
        } }, dependencies: [CommonModule, i1.NgIf, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, RouterLink], styles: [".login-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 72px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background: var(--sand-050);\n}\n\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.login-card__mark[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: var(--sand-100);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4px;\n}\n\n.login-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.login-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 14px;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 13px;\n  color: var(--ink-600);\n  font-weight: 500;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid var(--sand-100);\n  background: var(--sand-050);\n  border-radius: var(--radius-sm);\n  padding: 10px 12px;\n  font-size: 14px;\n  font-family: var(--font-body);\n}\n\n.field__error[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.login-card__submit[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  justify-content: center;\n}\n\n.login-card__note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ink-400);\n  text-align: center;\n  margin: 0;\n}\n\n.login-card__skip[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--moss-500);\n}\n.login-card__skip[_ngcontent-%COMP%]:hover {\n  color: var(--pine-700);\n}\n.signup-text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 15px;\n}\n\n.signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'eco-login', standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: "<div class=\"login-page\">\n\n  <form\n    class=\"eco-card login-card\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"submit()\"\n    novalidate>\n\n    <span class=\"login-card__mark\" aria-hidden=\"true\">\n      <svg viewBox=\"0 0 24 24\" width=\"26\" height=\"26\" fill=\"none\">\n        <path\n          d=\"M12 2C7 2 4 6 4 11c0 6 4 10 8 11 4-1 8-5 8-11 0-5-3-9-8-9Z\"\n          fill=\"#52796f\"/>\n        <path\n          d=\"M12 6v13\"\n          stroke=\"#0f2e22\"\n          stroke-width=\"1.4\"\n          stroke-linecap=\"round\"/>\n      </svg>\n    </span>\n\n    <h1>Welcome Back</h1>\n    <p>Login to your EcoTrack account.</p>\n\n    <!-- Email -->\n    <label class=\"field\">\n      <span>Email</span>\n\n      <input\n        type=\"email\"\n        formControlName=\"email\"\n        placeholder=\"Enter your email\"\n        autocomplete=\"email\">\n\n      <span\n        class=\"field__error\"\n        *ngIf=\"submitted() && f.email.invalid\">\n        Enter a valid email.\n      </span>\n    </label>\n\n    <!-- Password -->\n    <label class=\"field\">\n      <span>Password</span>\n\n      <input\n        type=\"password\"\n        formControlName=\"password\"\n        placeholder=\"Enter your password\"\n        autocomplete=\"current-password\">\n\n      <span\n        class=\"field__error\"\n        *ngIf=\"submitted() && f.password.invalid\">\n        Password is required.\n      </span>\n    </label>\n\n    <button\n      type=\"submit\"\n      class=\"eco-btn eco-btn--primary login-card__submit\">\n      Login\n    </button>\n\n    <p class=\"signup-text\">\n      Don't have an account?\n      <a routerLink=\"/register\">Create Account</a>\n    </p>\n\n  </form>\n\n</div>", styles: [".login-page {\n  min-height: calc(100vh - 72px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  background: var(--sand-050);\n}\n\n.login-card {\n  width: 100%;\n  max-width: 380px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.login-card__mark {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: var(--sand-100);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4px;\n}\n\n.login-card h1 {\n  margin-bottom: 0;\n}\n\n.login-card > p {\n  margin: 0 0 6px 0;\n  font-size: 14px;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 13px;\n  color: var(--ink-600);\n  font-weight: 500;\n}\n\n.field input {\n  border: 1px solid var(--sand-100);\n  background: var(--sand-050);\n  border-radius: var(--radius-sm);\n  padding: 10px 12px;\n  font-size: 14px;\n  font-family: var(--font-body);\n}\n\n.field__error {\n  color: var(--danger);\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.login-card__submit {\n  margin-top: 4px;\n  justify-content: center;\n}\n\n.login-card__note {\n  font-size: 12px;\n  color: var(--ink-400);\n  text-align: center;\n  margin: 0;\n}\n\n.login-card__skip {\n  text-align: center;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--moss-500);\n}\n.login-card__skip:hover {\n  color: var(--pine-700);\n}\n.signup-text {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 15px;\n}\n\n.signup-text a {\n  color: #2e7d32;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.signup-text a:hover {\n  text-decoration: underline;\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app/components/login/login.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=login.component.js.map