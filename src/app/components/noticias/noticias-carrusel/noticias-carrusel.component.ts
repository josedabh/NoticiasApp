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

  noticias: Noticia[] = [];

  readonly #apiNoticia = inject(NoticiasApiService);

  constructor() {
    this.#apiNoticia.getNews(3).subscribe( (noticias) => {
      this.noticias = noticias;
    });
  }
}