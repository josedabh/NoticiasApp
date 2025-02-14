import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { NoticiasCardsComponent } from './noticias-cards/noticias-cards.component';
import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';
import { NoticiasCarruselComponent } from './noticias-carrusel/noticias-carrusel.component';
import { NoticiasListComponent } from './noticias-list/noticias-list.component';


@NgModule({
  declarations: [
    NoticiasComponent,
    NoticiasCardsComponent,
    NoticiasCarruselComponent,
    NoticiasListComponent
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    JsonPipe,
    AsyncPipe
  ]
})
export class NoticiasModule { }
