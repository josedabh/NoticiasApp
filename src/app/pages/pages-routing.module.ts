import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NoticiasListComponent } from '../components/noticias/noticias-list/noticias-list.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
    {path:'', component: NoticiasListComponent},
    {path: 'noticias',
      loadChildren: () => import("../components/noticias/noticias-routing.module").then(m => m.NoticiasRoutingModule)
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class PagesRoutingModule {}