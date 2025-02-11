import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'noticias',
    loadChildren: () => import("./noticias/noticias-routing.module").then(m => m.NoticiasRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
