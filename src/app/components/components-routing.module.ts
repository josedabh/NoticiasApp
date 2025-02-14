import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';

export const ROUTES = {
  HOME: 'home',
  NOTICIAS: 'noticias'
}
const routes: Routes = [
  {path: ROUTES.HOME, component:HomeComponent},
  {path: ROUTES.NOTICIAS ,
    loadChildren: () => import("./noticias/noticias-routing.module").then(m => m.NoticiasRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
