import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: 'noticias',
    loadChildren: () => import('./noticias/noticias-routing.module').then(m => m.NoticiasRoutingModule)
  },
  {path:'**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
