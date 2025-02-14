import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoticiasCardsComponent } from './noticias-cards/noticias-cards.component';
import { NoticiasListComponent } from './noticias-list/noticias-list.component';

const routes: Routes = [
      {
        path: ':uuid',
        component: NoticiasCardsComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
