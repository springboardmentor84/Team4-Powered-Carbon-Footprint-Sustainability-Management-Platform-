import { Injectable, signal, computed } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AuthService {
    http;
    apiUrl = 'http://localhost:8080/auth';
    _userName = signal(localStorage.getItem('email'));
    userName = this._userName.asReadonly();
    isLoggedIn = computed(() => this._userName() != null);
    constructor(http) {
        this.http = http;
    }
    login(data) {
        return this.http.post(`${this.apiUrl}/login`, data);
    }
    register(data) {
        return this.http.post(`${this.apiUrl}/register`, data);
    }
    saveUser(response) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('email', response.email);
        this._userName.set(response.email);
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        this._userName.set(null);
    }
    initials(name) {
        if (!name)
            return '';
        return name
            .trim()
            .split(' ')
            .map(part => part.charAt(0).toUpperCase())
            .join('');
    }
    static ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=auth.service.js.map