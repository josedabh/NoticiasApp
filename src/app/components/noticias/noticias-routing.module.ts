import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasCardsComponent } from './noticias-cards/noticias-cards.component';

const routes: Routes = [
  {path: 'list', component: NoticiasCardsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
