import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { AdminLayoutComponent } from './core/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'auth',
                loadChildren: () => import('./features/auth/auth.routes').then((m) => m.authRoutes)
            }
        ]
    },
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./features/dashboard/dashboard.routes').then((m) => m.dashboardRoutes)
            },
            {
                path: 'users',
                canActivate: [roleGuard],
                data: { roles: ['admin'] },
                loadChildren: () => import('./features/users/users.routes').then((m) => m.usersRoutes)
            },
            {
                path: 'billing',
                loadChildren: () => import('./features/billing/billing.routes').then((m) => m.billingRoutes)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
