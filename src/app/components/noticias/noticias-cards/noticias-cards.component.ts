import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Noticia } from '../../../shared/utils/data';

@Component({
    selector: 'app-noticias-cards',
    templateUrl: './noticias-cards.component.html',
    styleUrl: './noticias-cards.component.scss',
    imports: []
})
export class NoticiasCardsComponent {

  // Input que recibe una noticia individual para mostrar
  @Input() news!: Noticia;

  // Servicios
  readonly #route = inject(ActivatedRoute);
  readonly #router = inject(Router);

  /**
   * Método para navegar a los detalles de una noticia
   * @param uuid - Identificador único de la noticia
   */
  goNews(uuid: string) {
    this.#router.navigate([`detalles/${uuid}`], {relativeTo: this.#route});
  }
}
