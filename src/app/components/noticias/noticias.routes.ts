import { Routes } from '@angular/router';

import { NoticiasDetallesComponent } from './noticias-detalles/noticias-detalles.component';

export const noticiasRoutes: Routes = [
  {
    path: 'detalles/:uuid',
    component: NoticiasDetallesComponent
  }
];
