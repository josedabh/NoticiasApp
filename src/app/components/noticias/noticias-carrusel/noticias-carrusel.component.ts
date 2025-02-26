import { Component, inject } from '@angular/core';

import { Noticia } from '../../../shared/utils/data';
import { NoticiasApiService } from '../../../shared/services/noticias-api.service';

@Component({
    selector: 'app-noticias-carrusel',
    templateUrl: './noticias-carrusel.component.html',
    styleUrl: './noticias-carrusel.component.scss',
    imports: []
})
export class NoticiasCarruselComponent {

  //Array vacio para noticia
  noticias: Noticia[] = [];

  //Servicio
  readonly #apiNoticia = inject(NoticiasApiService);

  constructor() {
    //Se rellena el array con las notcias de la api
    this.#apiNoticia.getNews().subscribe( (noticias) => {
      this.noticias = noticias;
    });
  }
}