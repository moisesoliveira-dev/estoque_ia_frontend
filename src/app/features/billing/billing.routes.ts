import { Routes } from '@angular/router';

export const billingRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/billing-home.page').then((m) => m.BillingHomePageComponent)
    }
];
