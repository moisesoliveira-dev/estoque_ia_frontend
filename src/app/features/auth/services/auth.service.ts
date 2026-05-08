import { inject, Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../../core/services/api.service';
import { StorageService } from '../../../core/services/storage.service';
import { LoginDto } from '../dto/login.dto';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { AuthStore } from '../store/auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly apiService = inject(ApiService);
    private readonly authStore = inject(AuthStore);
    private readonly storageService = inject(StorageService);

    login(payload: LoginDto): Observable<AuthResponse> {
        if (environment.useMockAuth) {
            const response: AuthResponse = {
                accessToken: 'template-token',
                user: {
                    id: '1',
                    name: payload.email,
                    role: 'admin'
                }
            };

            return of(response).pipe(
                delay(250),
                tap((result) => this.persistSession(result))
            );
        }

        return this.apiService
            .post<LoginDto, AuthResponse>('/auth/login', payload)
            .pipe(tap((result) => this.persistSession(result)));
    }

    logout(): void {
        this.authStore.clear();
        this.storageService.remove('auth_token');
        this.storageService.remove('user_role');
    }

    private persistSession(response: AuthResponse): void {
        this.authStore.setAccessToken(response.accessToken);
        this.storageService.set('auth_token', response.accessToken);
        this.storageService.set('user_role', response.user.role);
    }
}
