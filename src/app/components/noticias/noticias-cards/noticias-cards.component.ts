import { Component, Input } from '@angular/core';

import { Noticia } from '../../../data';

@Component({
    selector: 'app-noticias-cards',
    templateUrl: './noticias-cards.component.html',
    styleUrl: './noticias-cards.component.scss',
    standalone: false
})
export class NoticiasCardsComponent {

  @Input() news!: Noticia;

}
