import { Component, inject } from '@angular/core';
import { Noticia } from '../../../shared/utils/data';
import { NoticiasApiService } from '../../../shared/services/noticias-api.service';
import { NoticiasCarruselComponent } from '../noticias-carrusel/noticias-carrusel.component';
import { NoticiasCardsComponent } from '../noticias-cards/noticias-cards.component';

@Component({
    selector: 'app-noticias-list',
    templateUrl: './noticias-list.component.html',
    styleUrl: './noticias-list.component.scss',
    imports: [NoticiasCarruselComponent, NoticiasCardsComponent]
})
export class NoticiasListComponent {

  noticias: Noticia[] = [];

  readonly #apiNoticia = inject(NoticiasApiService);

  constructor() {
    this.#apiNoticia.getNews(3).subscribe({
      next: (response) => {
        console.log("Respuesta de la API:", response);
        this.noticias = response.data || []; // Extrae solo el array de noticias
      },
      error: (err) => {
        console.error("Error obteniendo noticias:", err);
        this.noticias = []; // Evita que la plantilla falle
      },
    });
  }
}
