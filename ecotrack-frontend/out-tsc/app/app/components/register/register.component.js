import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function RegisterComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1, " Full Name is required. ");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1, " Enter a valid email. ");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1, " Password must be at least 6 characters. ");
    i0.ɵɵelementEnd();
} }
export class RegisterComponent {
    fb = inject(FormBuilder);
    authService = inject(AuthService);
    router = inject(Router);
    submitted = signal(false);
    form = this.fb.group({
        fullName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
    get f() {
        return this.form.controls;
    }
    submit() {
        this.submitted.set(true);
        if (this.form.invalid) {
            return;
        }
        const registerData = {
            fullName: this.form.value.fullName,
            email: this.form.value.email,
            password: this.form.value.password
        };
        this.authService.register(registerData).subscribe({
            next: () => {
                alert("Registration Successful!");
                this.router.navigate(['/login']);
            },
            error: (err) => {
                console.error(err);
                alert("Registration Failed");
            }
        });
    }
    static ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponent, selectors: [["eco-register"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 27, vars: 4, consts: [[1, "login-page"], ["novalidate", "", 1, "eco-card", "login-card", 3, "ngSubmit", "formGroup"], [1, "field"], ["type", "text", "formControlName", "fullName", "placeholder", "Enter your full name"], ["class", "field__error", 4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "Enter your email"], ["type", "password", "formControlName", "password", "placeholder", "Enter your password"], ["type", "submit", 1, "eco-btn", "eco-btn--primary", "login-card__submit"], [1, "signup-text"], ["routerLink", "/login"], [1, "field__error"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "form", 1);
            i0.ɵɵlistener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(2, "h1");
            i0.ɵɵtext(3, "Create Account");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "Create your EcoTrack account.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "label", 2)(7, "span");
            i0.ɵɵtext(8, "Full Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "input", 3);
            i0.ɵɵtemplate(10, RegisterComponent_span_10_Template, 2, 0, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "label", 2)(12, "span");
            i0.ɵɵtext(13, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 5);
            i0.ɵɵtemplate(15, RegisterComponent_span_15_Template, 2, 0, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "label", 2)(17, "span");
            i0.ɵɵtext(18, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(19, "input", 6);
            i0.ɵɵtemplate(20, RegisterComponent_span_20_Template, 2, 0, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "button", 7);
            i0.ɵɵtext(22, " Create Account ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "p", 8);
            i0.ɵɵtext(24, " Already have an account? ");
            i0.ɵɵelementStart(25, "a", 9);
            i0.ɵɵtext(26, "Login");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.submitted() && ctx.f.fullName.invalid);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.submitted() && ctx.f.email.invalid);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.submitted() && ctx.f.password.invalid);
        } }, dependencies: [CommonModule, i1.NgIf, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, RouterLink], styles: [".login-page[_ngcontent-%COMP%]{\n    min-height:100vh;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    background:#f6f2e8;\n}\n\n.login-card[_ngcontent-%COMP%]{\n    width:400px;\n    padding:35px;\n    background:#fff;\n    border-radius:15px;\n    box-shadow:0 5px 15px rgba(0,0,0,.1);\n}\n\n.login-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    margin-bottom:10px;\n}\n\n.login-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-bottom:20px;\n    color:#666;\n}\n\n.field[_ngcontent-%COMP%]{\n    display:flex;\n    flex-direction:column;\n    margin-bottom:18px;\n}\n\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    margin-bottom:6px;\n    font-weight:600;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    padding:12px;\n    border:1px solid #ccc;\n    border-radius:8px;\n}\n\n.field__error[_ngcontent-%COMP%]{\n    color:red;\n    font-size:12px;\n    margin-top:5px;\n}\n\n.login-card__submit[_ngcontent-%COMP%]{\n    width:100%;\n    padding:12px;\n    border:none;\n    border-radius:8px;\n    background:#1d4d3f;\n    color:white;\n    cursor:pointer;\n    font-size:16px;\n}\n\n.signup-text[_ngcontent-%COMP%]{\n    margin-top:18px;\n    text-align:center;\n}\n\n.signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color:#1d4d3f;\n    text-decoration:none;\n    font-weight:bold;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponent, [{
        type: Component,
        args: [{ selector: 'eco-register', standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: "<div class=\"login-page\">\n  <form\n    class=\"eco-card login-card\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"submit()\"\n    novalidate\n  >\n\n    <h1>Create Account</h1>\n    <p>Create your EcoTrack account.</p>\n\n    <!-- Full Name -->\n    <label class=\"field\">\n      <span>Full Name</span>\n\n      <input\n        type=\"text\"\n        formControlName=\"fullName\"\n        placeholder=\"Enter your full name\"\n      />\n\n      <span\n        class=\"field__error\"\n        *ngIf=\"submitted() && f.fullName.invalid\"\n      >\n        Full Name is required.\n      </span>\n    </label>\n\n    <!-- Email -->\n    <label class=\"field\">\n      <span>Email</span>\n\n      <input\n        type=\"email\"\n        formControlName=\"email\"\n        placeholder=\"Enter your email\"\n      />\n\n      <span\n        class=\"field__error\"\n        *ngIf=\"submitted() && f.email.invalid\"\n      >\n        Enter a valid email.\n      </span>\n    </label>\n\n    <!-- Password -->\n    <label class=\"field\">\n      <span>Password</span>\n\n      <input\n        type=\"password\"\n        formControlName=\"password\"\n        placeholder=\"Enter your password\"\n      />\n\n      <span\n        class=\"field__error\"\n        *ngIf=\"submitted() && f.password.invalid\"\n      >\n        Password must be at least 6 characters.\n      </span>\n    </label>\n\n    <button\n      type=\"submit\"\n      class=\"eco-btn eco-btn--primary login-card__submit\"\n    >\n      Create Account\n    </button>\n\n    <p class=\"signup-text\">\n      Already have an account?\n      <a routerLink=\"/login\">Login</a>\n    </p>\n\n  </form>\n</div>", styles: [".login-page{\n    min-height:100vh;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    background:#f6f2e8;\n}\n\n.login-card{\n    width:400px;\n    padding:35px;\n    background:#fff;\n    border-radius:15px;\n    box-shadow:0 5px 15px rgba(0,0,0,.1);\n}\n\n.login-card h1{\n    margin-bottom:10px;\n}\n\n.login-card p{\n    margin-bottom:20px;\n    color:#666;\n}\n\n.field{\n    display:flex;\n    flex-direction:column;\n    margin-bottom:18px;\n}\n\n.field span{\n    margin-bottom:6px;\n    font-weight:600;\n}\n\n.field input{\n    padding:12px;\n    border:1px solid #ccc;\n    border-radius:8px;\n}\n\n.field__error{\n    color:red;\n    font-size:12px;\n    margin-top:5px;\n}\n\n.login-card__submit{\n    width:100%;\n    padding:12px;\n    border:none;\n    border-radius:8px;\n    background:#1d4d3f;\n    color:white;\n    cursor:pointer;\n    font-size:16px;\n}\n\n.signup-text{\n    margin-top:18px;\n    text-align:center;\n}\n\n.signup-text a{\n    color:#1d4d3f;\n    text-decoration:none;\n    font-weight:bold;\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "app/components/register/register.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=register.component.js.map