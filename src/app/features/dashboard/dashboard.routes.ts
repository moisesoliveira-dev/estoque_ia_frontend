import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/dashboard-home.page').then((m) => m.DashboardHomePageComponent)
    }
];
