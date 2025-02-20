import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiNews } from '../../utils/data';
import { TOKEN } from '../../utils/token-api';

@Injectable({
  providedIn: 'root'
})
export class NoticiasApiService {

  readonly #http = inject(HttpClient);
  readonly #tokenApi = inject(TOKEN);

  readonly #apiUrl = 'https://api.thenewsapi.com/v1/news/';

  getNews(limit: number = 3) {
    const url = `${this.#apiUrl}/all?api_token=${this.#tokenApi}&language=es&limit=${limit}`;
    return this.#http.get<ApiNews>(url);
  }

  getNewsByUuid(uuid:string){
    const url = `${this.#apiUrl}/uuid/${uuid}?api_token=${this.#tokenApi}`;
    return this.#http.get<ApiNews>(url);
  }
}
