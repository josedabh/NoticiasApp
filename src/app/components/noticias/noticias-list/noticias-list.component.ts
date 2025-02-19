import { Component, inject } from '@angular/core';
import { Noticia } from '../../../data';
import { NoticiasApiService } from '../../../shared/services/noticias-api.service';

@Component({
    selector: 'app-noticias-list',
    templateUrl: './noticias-list.component.html',
    styleUrl: './noticias-list.component.scss',
    standalone: false
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
