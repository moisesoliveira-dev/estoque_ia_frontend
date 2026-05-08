import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
    private readonly prefix = 'template_front_angular';

    set<T>(key: string, value: T): void {
        localStorage.setItem(this.buildKey(key), JSON.stringify(value));
    }

    get<T>(key: string): T | null {
        const rawValue = localStorage.getItem(this.buildKey(key));

        if (rawValue === null) {
            return null;
        }

        try {
            return JSON.parse(rawValue) as T;
        } catch {
            return null;
        }
    }

    remove(key: string): void {
        localStorage.removeItem(this.buildKey(key));
    }

    clear(): void {
        for (const key of Object.keys(localStorage)) {
            if (key.startsWith(`${this.prefix}:`)) {
                localStorage.removeItem(key);
            }
        }
    }

    private buildKey(key: string): string {
        return `${this.prefix}:${key}`;
    }
}
