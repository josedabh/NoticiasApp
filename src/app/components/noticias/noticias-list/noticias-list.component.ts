import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NoticiasApiService } from '../../../shared/services/noticias-api.service';
import { Noticia } from '../../../shared/utils/data';
import { NoticiasCardsComponent } from '../noticias-cards/noticias-cards.component';
import { NoticiasCarruselComponent } from '../noticias-carrusel/noticias-carrusel.component';
import { APP_ROUTES } from 'src/app/app.routes';

@Component({
    selector: 'app-noticias-list',
    templateUrl: './noticias-list.component.html',
    styleUrl: './noticias-list.component.scss',
    imports: [NoticiasCarruselComponent, NoticiasCardsComponent]
})
export class NoticiasListComponent {
  // Array para almacenar las noticias
  noticias: Noticia[] = [];
  selectedCategory: string | null = null;

  // Servicios
  readonly #apiNoticia = inject(NoticiasApiService);
  readonly #router = inject(Router);

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
  onCategorySelected(category: string) {
    this.selectedCategory = category;
    this.#router.navigate([APP_ROUTES.NOTICIAS]);
    this.#apiNoticia.getNewsByCategory(category).subscribe(noticias => {
        this.noticias = noticias;
    });
  }
}