import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Error404Component } from './pages/error404/error404.component';

export const ROUTES = {
  NOTICIAS: 'noticias',
  USER: 'user'
}

export const Approutes: Routes = [
  { path: '', redirectTo: ROUTES.NOTICIAS, pathMatch: 'full' },
  {
    path: ROUTES.NOTICIAS,
    loadChildren: () => import('./components/noticias/noticias.routes').then(m => m.noticiasRoutes),
  },
  {path: ROUTES.USER,
    loadChildren: () => import('./components/user/user.routes').then(m => m.userRoutes)},
  { path: '**', component: Error404Component }
];
