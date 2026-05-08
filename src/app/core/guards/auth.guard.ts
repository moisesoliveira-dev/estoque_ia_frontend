import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

export const authGuard: CanActivateFn = (_route, state) => {
    const storageService = inject(StorageService);
    const router = inject(Router);
    const token = storageService.get<string>('auth_token');

    if (token) {
        return true;
    }

    return router.createUrlTree(['/auth/login'], {
        queryParams: { redirectUrl: state.url }
    });
};
