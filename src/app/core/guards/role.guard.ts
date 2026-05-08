import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { StorageService } from '../services/storage.service';

export const roleGuard: CanActivateFn = (route) => {
    const expectedRoles = route.data?.['roles'];

    if (!Array.isArray(expectedRoles) || expectedRoles.length === 0) {
        return true;
    }

    const currentRole = inject(StorageService).get<string>('user_role');
    return currentRole !== null && expectedRoles.includes(currentRole);
};
