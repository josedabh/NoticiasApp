import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { ApiNews, Noticia } from '../utils/data';
import { TOKEN } from '../utils/token-api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasApiService {

  readonly #http = inject(HttpClient);
  readonly #tokenApi = inject(TOKEN);

  getNews(limit: number = 3) {
    const url = "assets/api/noticia.json";
    return this.#http.get<ApiNews>(url).pipe(
      map((response) => response.data)
    );
  }

  /**
   * Llamada a la API para obtener una noticia por su uuid
   * @param uuid 
   * @returns 
   */
  getNewsByUuid(uuid: string) {
    const url = "assets/api/noticia.json";
    return this.#http.get<ApiNews>(url).pipe(
      map(response => response.data),
      map((noticias) => noticias.find((noticia) => noticia.uuid === uuid))
    );
  }

  // noticias-api.service.ts
  getNewsByCategory(category: string) {
    const url = "assets/api/noticia.json";
    return this.#http.get<ApiNews>(url).pipe(
        map(response => response.data),
        map(noticias => noticias.filter(noticia => 
            noticia.categories.map(cat => cat.toLowerCase()).includes(category.toLowerCase())
        ))
    );
  }
}
