import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: '',
    loadChildren: () => import('./components/components-routing.module').then(m => m.ComponentsRoutingModule)
  },
  {path:'**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
