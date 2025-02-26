import { Routes } from '@angular/router';

import { NoticiasCategoryComponent } from './noticias-category/noticias-category.component';
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
        component: NoticiasCategoryComponent 
      },
      {
        path: 'detalles/:uuid',
        pathMatch:'full',
        component: NoticiasDetallesComponent
      }
    ]
  },

];
