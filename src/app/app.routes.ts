import { Routes } from '@angular/router';

export const routes: Routes = [
    {path : '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path : 'dashboard', loadChildren:() => import('./dashboard/dashboard.routes').then((m) => m.DASH_ROUTES)},
    {path : 'auth', loadChildren: () => import('./auth/auth.route').then((m) => m.AUTH_ROUTES)}
];
