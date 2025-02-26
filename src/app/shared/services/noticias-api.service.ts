import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

import { ApiNews } from '../utils/data';

@Injectable({
  providedIn: 'root'
})
export class NoticiasApiService {

  //Servicio
  readonly #http = inject(HttpClient);

  //Constante
  url = "assets/api/noticia.json";
  
  /**
   * Obtiene un número limitado de noticias.
   *
   * @returns Un Observable que emite un array de noticias (Noticia[]).
   */
  getNews() {
    return this.#http.get<ApiNews>(this.url).pipe(
      map((response) => response.data)
    );
  }

  /**
   * Llama a la API para obtener una noticia específica mediante su UUID.
   *
   * @param uuid El identificador único de la noticia.
   * @returns Observable que emite un array de noticias
   */
  getNewsByUuid(uuid: string) {
    return this.#http.get<ApiNews>(this.url).pipe(
      map(response => response.data),
      map((noticias) => noticias.find((noticia) => noticia.uuid === uuid))
    );
  }

  /**
   * Llama a la API para obtener noticias filtradas por categoría.
   *
   * @param category La categoría por la que filtrar las noticias.
   * @returns Observable que emite un array de noticias
   */
  getNewsByCategory(category: string) {
    return this.#http.get<ApiNews>(this.url).pipe(
        map(response => response.data),
        map(noticias => noticias.filter(noticia => 
            noticia.categories.map(cat => cat.toLowerCase()).includes(category.toLowerCase())
        ))
    );
  }
}
