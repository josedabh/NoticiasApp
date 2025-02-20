import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasApiService } from 'src/app/shared/services/noticias-api.service';
import { Noticia } from 'src/app/shared/utils/data';

@Component({
    selector: 'app-noticias-detalles',
    templateUrl: './noticias-detalles.component.html',
    styleUrl: './noticias-detalles.component.scss',
    imports: [],
})
export class NoticiasDetallesComponent {

    readonly #route = inject(ActivatedRoute);
    readonly #apiNoticias = inject(NoticiasApiService);

    noticia!: Noticia;

    constructor() {
        const uuid = this.#route.snapshot.paramMap.get('uuid');
        if (uuid) {
            this.#apiNoticias.getNewsByUuid(uuid).subscribe((noticia) => {
                if (noticia) {
                    this.noticia = noticia;
                } else {
                    this.setNoticiaNoEncontrada();
                }
            });
        } else {
            this.setNoticiaNoEncontrada();
        }
    }

    private setNoticiaNoEncontrada() {
        this.noticia = {
            uuid: '',
            title: 'Noticia no encontrada',
            description: 'No se ha encontrado la noticia solicitada',
            image_url: 'https://via.placeholder.com/800x400.png?text=Noticia+no+encontrada',
            published_at: new Date().toDateString(),
            source: "Desconocido",
            categories: ['Desconocido'],
            keywords: 'Desconocido',
            relevance_score: 0,
            snippet: 'No se ha encontrado la noticia solicitada',
            url: 'https://www.google.com',
            language: 'es'
        };
    }
}