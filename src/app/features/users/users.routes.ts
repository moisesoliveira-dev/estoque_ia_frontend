import { Routes } from '@angular/router';

export const usersRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/users-list/users-list.page').then((m) => m.UsersListPageComponent)
    },
    {
        path: ':id',
        loadComponent: () =>
            import('./pages/user-details/user-details.page').then((m) => m.UserDetailsPageComponent)
    }
];
