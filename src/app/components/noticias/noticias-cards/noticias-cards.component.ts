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

  @Input() news!: Noticia;

  readonly #route = inject(ActivatedRoute);
  readonly #router = inject(Router);

  goNews(uuid: string) {
    this.#router.navigate([`detalles/${uuid}`], {relativeTo: this.#route});
  }
}
