import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
    const token = inject(StorageService).get<string>('auth_token');

    if (!token) {
        return next(request);
    }

    return next(
        request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })
    );
};
