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

  readonly #apiUrl = 'https://api.thenewsapi.com/v1/news/';

  getNews(limit: number = 3) {
    // const url = `${this.#apiUrl}/all?api_token=${this.#tokenApi}&language=es&limit=${limit}`;
    const url = "assets/api/noticia.json";
    return this.#http.get<ApiNews>(url).pipe(
      map((response) => response.data)
    );
  }

  // getNewsByUuid(uuid: string) {
  //   const url = `${this.#apiUrl}/uuid/${uuid}?api_token=${this.#tokenApi}`;
  //   return this.#http.get<{ data: Noticia }>(url).pipe(
  //     map(response => response.data)
  //   );
  // }
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

  getNewsByCategory(category: string) {
    const url = `${this.#apiUrl}/headlines?api_token=${this.#tokenApi}&language=es&categories=${category}`;
    return this.#http.get<ApiNews>(url).pipe(
      map((response) => response.data)
    );
  }
}
