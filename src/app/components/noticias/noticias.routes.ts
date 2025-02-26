import { Routes } from '@angular/router';

import { NoticiasDetallesComponent } from './noticias-detalles/noticias-detalles.component';
import { NoticiasListComponent } from './noticias-list/noticias-list.component';

export const noticiasRoutes: Routes = [
  {
    path: '', 
    children: [
      { path: '', 
        component: NoticiasListComponent 
      },
      { 
        path: 'categoria/:category', 
        pathMatch: 'full',
        component: NoticiasListComponent 
      },
      {
        path: 'detalles/:uuid',
        pathMatch:'full',
        component: NoticiasDetallesComponent
      }
    ]
  },

];
