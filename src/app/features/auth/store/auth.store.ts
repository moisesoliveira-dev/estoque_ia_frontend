import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthStore {
    private readonly accessTokenState = signal<string | null>(null);

    readonly accessToken = this.accessTokenState.asReadonly();
    readonly isAuthenticated = computed(() => this.accessTokenState() !== null);

    setAccessToken(accessToken: string): void {
        this.accessTokenState.set(accessToken);
    }

    clear(): void {
        this.accessTokenState.set(null);
    }
}
