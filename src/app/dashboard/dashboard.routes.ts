import { Routes } from "@angular/router";

export const DASH_ROUTES: Routes = [

    {
        path: '',
        loadComponent : () => import ('./index/index').then(m => m.Index)
    },

    {
        path: 'index',
        loadComponent : () => import ('./index/index').then(m => m.Index)
    }
]