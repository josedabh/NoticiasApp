import { Routes } from '@angular/router';

import { Error404Component } from './pages/error404/error404.component';

export const APP_ROUTES = {
  NOTICIAS: 'noticias',
  USER: 'user'
}

export const Approutes: Routes = [
  { path: '', redirectTo: APP_ROUTES.NOTICIAS, pathMatch: 'full' },
  {
    path: APP_ROUTES.NOTICIAS,
    loadChildren: () => import('./components/noticias/noticias.routes').then(m => m.noticiasRoutes),
  },
  {path: APP_ROUTES.USER,
    loadChildren: () => import('./components/user/user.routes').then(m => m.userRoutes)
  },
  { path: '**', component: Error404Component }
];
