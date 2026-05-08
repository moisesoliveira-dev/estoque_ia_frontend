import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

export const errorInterceptor: HttpInterceptorFn = (request, next) => {
    const notificationService = inject(NotificationService);

    return next(request).pipe(
        catchError((error: unknown) => {
            if (error instanceof HttpErrorResponse) {
                notificationService.error(`Request failed (${error.status}): ${request.method} ${request.urlWithParams}`);
            } else {
                notificationService.error('Unexpected request error.');
            }

            return throwError(() => error);
        })
    );
};
