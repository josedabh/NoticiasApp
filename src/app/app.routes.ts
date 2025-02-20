import { Routes } from '@angular/router';

import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';

export const ROUTES = {
  NOTICIAS: 'noticias',
  USER: 'user'
}

export const Approutes: Routes = [
  { path: '', redirectTo: ROUTES.NOTICIAS, pathMatch: 'full' },
  {
    path: ROUTES.NOTICIAS, component: HomeComponent,
    loadChildren: () => import('./components/noticias/noticias.routes').then(m => m.noticiasRoutes),
  },
  {path: 'user',
    loadChildren: () => import('./components/user/user.routes').then(m => m.userRoutes)},
  { path: '**', component: Error404Component }
];
