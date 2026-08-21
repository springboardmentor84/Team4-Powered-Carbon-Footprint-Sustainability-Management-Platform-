import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import * as i0 from "@angular/core";
export class AppComponent {
    static ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["eco-root"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 0, consts: [[1, "eco-main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "eco-nav");
            i0.ɵɵelementStart(1, "main", 0);
            i0.ɵɵelement(2, "router-outlet");
            i0.ɵɵelementEnd();
        } }, dependencies: [RouterOutlet, NavComponent], styles: [".eco-main[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 72px);\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'eco-root', standalone: true, imports: [RouterOutlet, NavComponent], template: "<eco-nav></eco-nav>\n<main class=\"eco-main\">\n  <router-outlet></router-outlet>\n</main>\n", styles: [".eco-main {\n  min-height: calc(100vh - 72px);\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app/app.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=app.component.js.map