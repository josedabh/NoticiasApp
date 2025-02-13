import { Component, inject } from '@angular/core';

import { Noticias } from '../../../data';
import { InfoNoticiasService } from '../../../shared/services/info-noticias.service';
import { NoticiasApiService } from '../../../shared/services/noticiasApi/noticias-api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  noticias!:Noticias[];
  news = inject(InfoNoticiasService);
  // readonly #api = inject(NoticiasApiService);
  // prueba = this.#api.getNoticias();
  constructor(){
    this.news.noticias$.subscribe((noticias) => {
      this.noticias = noticias;
    });
  }
}
