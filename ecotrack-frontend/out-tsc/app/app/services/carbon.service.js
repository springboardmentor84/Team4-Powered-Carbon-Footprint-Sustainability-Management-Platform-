import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CarbonService {
    http;
    apiUrl = 'http://localhost:8080/carbon';
    constructor(http) {
        this.http = http;
    }
    // Save activity
    saveActivity(activity) {
        return this.http.post(`${this.apiUrl}/add`, activity);
    }
    // Get activities
    getActivities(email) {
        return this.http.get(`${this.apiUrl}/user/${email}`);
    }
    deleteActivity(id, email) {
        return this.http.delete(`${this.apiUrl}/${id}?email=${encodeURIComponent(email)}`, { responseType: 'text' });
    }
    static ɵfac = function CarbonService_Factory(t) { return new (t || CarbonService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CarbonService, factory: CarbonService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarbonService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=carbon.service.js.map