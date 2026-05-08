import { HttpInterceptorFn } from '@angular/common/http';
import { computed, signal } from '@angular/core';
import { finalize } from 'rxjs';

const inFlightRequests = signal(0);

export const isLoading = computed(() => inFlightRequests() > 0);

export const loadingInterceptor: HttpInterceptorFn = (request, next) => {
    inFlightRequests.update((value) => value + 1);

    return next(request).pipe(
        finalize(() => {
            inFlightRequests.update((value) => Math.max(0, value - 1));
        })
    );
};
