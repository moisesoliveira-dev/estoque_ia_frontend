import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface RequestOptions {
    params?: Record<string, string | number | boolean | null | undefined>;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
    private readonly httpClient = inject(HttpClient);
    private readonly baseUrl = environment.apiBaseUrl;

    get<T>(path: string, options: RequestOptions = {}): Observable<T> {
        return this.httpClient.get<T>(this.resolvePath(path), {
            params: this.buildParams(options.params)
        });
    }

    post<TRequest, TResponse>(path: string, payload: TRequest): Observable<TResponse> {
        return this.httpClient.post<TResponse>(this.resolvePath(path), payload);
    }

    put<TRequest, TResponse>(path: string, payload: TRequest): Observable<TResponse> {
        return this.httpClient.put<TResponse>(this.resolvePath(path), payload);
    }

    patch<TRequest, TResponse>(path: string, payload: TRequest): Observable<TResponse> {
        return this.httpClient.patch<TResponse>(this.resolvePath(path), payload);
    }

    delete<TResponse>(path: string): Observable<TResponse> {
        return this.httpClient.delete<TResponse>(this.resolvePath(path));
    }

    private resolvePath(path: string): string {
        const cleanBase = this.baseUrl.replace(/\/$/, '');
        const cleanPath = path.replace(/^\//, '');
        return `${cleanBase}/${cleanPath}`;
    }

    private buildParams(
        params?: Record<string, string | number | boolean | null | undefined>
    ): HttpParams | undefined {
        if (!params) {
            return undefined;
        }

        let httpParams = new HttpParams();

        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && value !== null) {
                httpParams = httpParams.set(key, String(value));
            }
        }

        return httpParams;
    }
}
