import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiNews } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class NoticiasApiService {

  readonly #http = inject(HttpClient);

  readonly #apiUrlAll = 'https://api.thenewsapi.com/v1/news/all';
  private apiToken = 'eELIqsCfVHICLUdWvyOf1cuTCs7GYHHM6ywEvzdb';

  getNews(limit: number = 3) {
    const url = `${this.#apiUrlAll}?api_token=${this.apiToken}&language=en&limit=${limit}`;
    return this.#http.get<ApiNews>(url);
  }
}
