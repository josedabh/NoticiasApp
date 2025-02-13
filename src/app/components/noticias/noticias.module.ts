import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardsComponent } from './cards/cards.component';
import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';


@NgModule({
  declarations: [
    NoticiasComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    JsonPipe,
    AsyncPipe
  ]
})
export class NoticiasModule { }
