import { Component, Input } from '@angular/core';

import { Noticia } from '../../../shared/utils/data';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-noticias-cards',
    templateUrl: './noticias-cards.component.html',
    styleUrl: './noticias-cards.component.scss',
    imports: [RouterLink]
})
export class NoticiasCardsComponent {

  @Input() news!: Noticia;

}
