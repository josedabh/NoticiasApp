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
  // Array para almacenar las noticias
  noticias: Noticia[] = [];

  // Servicios
  readonly #apiNoticia = inject(NoticiasApiService);

  ngOnInit() {
    // Cargar noticias iniciales
    this.loadNews();
  }

  // Método para cargar noticias iniciales
  private loadNews() {
    this.#apiNoticia.getNews(3).subscribe(noticias => {
      this.noticias = noticias;
    });
  }

  // Método para cargar noticias por categoría
  loadNewsByCategory(category: string) {
    this.#apiNoticia.getNewsByCategory(category).subscribe(noticias => {
      this.noticias = noticias;
    });
  }
}