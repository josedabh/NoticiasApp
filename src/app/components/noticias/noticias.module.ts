import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { NoticiasCardsComponent } from './noticias-cards/noticias-cards.component';
import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';
import { NoticiasCarruselComponent } from './noticias-carrusel/noticias-carrusel.component';
import { NoticiasListComponent } from './noticias-list/noticias-list.component';
import { NoticiasDetallesComponent } from './noticias-detalles/noticias-detalles.component';


@NgModule({
  declarations: [
    NoticiasComponent,
    NoticiasCardsComponent,
    NoticiasCarruselComponent,
    NoticiasListComponent,
    NoticiasDetallesComponent
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    JsonPipe,
    AsyncPipe
  ]
})
export class NoticiasModule { }
