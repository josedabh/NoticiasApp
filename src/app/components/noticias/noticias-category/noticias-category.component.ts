import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/app.routes';
import { NoticiasApiService } from 'src/app/shared/services/noticias-api.service';
import { CATEGORIES, Noticia } from 'src/app/shared/utils/data';
import { NoticiasCardsComponent } from '../noticias-cards/noticias-cards.component';


@Component({
  selector: 'app-noticias-category',
  standalone: true,
  templateUrl: './noticias-category.component.html',
  styleUrl: './noticias-category.component.scss',
  imports: [NoticiasCardsComponent]
})
export class NoticiasCategoryComponent {

  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);
  readonly #apiNoticia = inject(NoticiasApiService);

  listNews!: Noticia[];
  categoriaActual:string | null = null;

  ngOnInit() {
    this.#route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category) {
        this.categoriaActual = category;
        this.loadNewsByCategory(category);
      }
    });
  }

  private loadNewsByCategory(category: string) {
    this.#apiNoticia.getNewsByCategory(category).subscribe({
      next: (noticias) => {
        this.listNews = noticias;
      },
      error: (error) => {
        console.error('Error loading news:', error);
      }
    });


  /**
   * Método para navegar a la lista de noticias
   */
  goBack(){
    this.#router.navigate([APP_ROUTES.NOTICIAS]);
  }

  /**
   * Método para navegar a los detalles de una noticia
   * @param uuid - Identificador único de la noticia
   */
  goNews(uuid: string) {
    this.#router.navigate([`detalles/${uuid}`], { relativeTo: this.#route});
  }
}
