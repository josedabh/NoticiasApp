import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasListComponent } from './components/noticias/noticias-list/noticias-list.component';

export const ROUTES = {
  HOME: 'home',
  NOTICIAS: 'noticias'
}

const routes: Routes = [
  {path: '' , redirectTo:ROUTES.HOME, pathMatch:'full'},
  {path: ROUTES.HOME, component : HomeComponent,
    loadChildren: () => import("./pages/pages-routing.module").then(m => m.PagesRoutingModule)
  },
  {path:'**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
