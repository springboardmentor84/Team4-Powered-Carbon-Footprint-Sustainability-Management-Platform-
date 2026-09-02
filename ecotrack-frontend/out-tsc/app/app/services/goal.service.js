import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class GoalService {
    http;
    apiUrl = 'http://localhost:8080/goals';
    constructor(http) {
        this.http = http;
    }
    // Save Goal
    saveGoal(goal) {
        return this.http.post(`${this.apiUrl}/add`, goal);
    }
    // Update Goal Progress
    updateProgress(id, currentKg) {
        return this.http.put(`${this.apiUrl}/progress/${id}?currentKg=${currentKg}`, {});
    }
    // Get Logged-in User Goals
    getGoals(email) {
        return this.http.get(`${this.apiUrl}/user/${email}`);
    }
    // Delete Goal
    deleteGoal(id) {
        return this.http.delete(`${this.apiUrl}/delete/${id}`, {
            responseType: 'text'
        });
    }
    static ɵfac = function GoalService_Factory(t) { return new (t || GoalService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GoalService, factory: GoalService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GoalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=goal.service.js.map