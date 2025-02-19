import { Routes } from '@angular/router';

import { NoticiasListComponent } from '../components/noticias/noticias-list/noticias-list.component';

export const pagesRoutes: Routes = [
  { path: '', component: NoticiasListComponent, 
    loadChildren: () => import("../components/noticias/noticias.routes").then(m => m.noticiasRoutes)
  },
];
