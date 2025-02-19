import { Routes } from '@angular/router';

import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasListComponent } from './components/noticias/noticias-list/noticias-list.component';

export const ROUTES = {
  NOTICIAS: 'noticias'
}

export const Approutes: Routes = [
  {path: '' , redirectTo: ROUTES.NOTICIAS, pathMatch:'full'},
  {path: ROUTES.NOTICIAS, component : HomeComponent,
    children: [
      { path: '', component: NoticiasListComponent,
        loadChildren: () => import('./components/noticias/noticias.routes').then(m => m.noticiasRoutes),
      }
    ]
  },
  {path:'**', component: Error404Component}
];
