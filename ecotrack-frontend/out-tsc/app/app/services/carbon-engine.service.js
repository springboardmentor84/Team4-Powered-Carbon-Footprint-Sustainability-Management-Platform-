import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CarbonEngineService {
    http;
    apiUrl = 'http://localhost:8080/carbon-engine';
    constructor(http) {
        this.http = http;
    }
    calculateCarbon(request) {
        return this.http.post(`${this.apiUrl}/calculate`, request);
    }
    getUserCalculations(email) {
        return this.http.get(`${this.apiUrl}/user/${email}`);
    }
    static ɵfac = function CarbonEngineService_Factory(t) { return new (t || CarbonEngineService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CarbonEngineService, factory: CarbonEngineService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarbonEngineService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=carbon-engine.service.js.map