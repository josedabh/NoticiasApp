import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiNews } from '../utils/data';

@Injectable({
  providedIn: 'root'
})
export class NoticiasApiService {

  readonly #http = inject(HttpClient);

  readonly #apiUrl = 'https://api.thenewsapi.com/v1/news/';
  private apiToken = 'eELIqsCfVHICLUdWvyOf1cuTCs7GYHHM6ywEvzdb';

  getNews(limit: number = 3) {
    const url = `${this.#apiUrl}/all?api_token=${this.apiToken}&language=es&limit=${limit}`;
    return this.#http.get<ApiNews>(url);
  }

  getNewsByUuid(uuid:string){
    const url = `${this.#apiUrl}/uuid/${uuid}?api_token=${this.apiToken}`;
    return this.#http.get<ApiNews>(url);
  }
}
