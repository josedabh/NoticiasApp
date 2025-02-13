import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasApiService {
  readonly #http = inject(HttpClient);

  readonly URLprueba = "https://api.thenewsapi.com/v1/news/top?api_token=eELIqsCfVHICLUdWvyOf1cuTCs7GYHHM6ywEvzdb&locale=es&limit=3";

  getNoticias(){
    return this.#http.get(this.URLprueba);
  }
}
