import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Tiempo } from '../utils/tiempo';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //Servicio
  readonly #http = inject(HttpClient);

  //Constante
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  token = 'df855f99ef805f0c21d61f527670fc1f'; 

  // Método para obtener una ciudad aleatoria
  getCity(): string {
    const cities = [
      { id: 1, name: "Sevilla" },
      { id: 2, name: "Tokyo" },
      { id: 3, name: "New York" },
      { id: 4, name: "London" }
    ];

    // Elegir una ciudad aleatoria
    const randomIndex = Math.floor(Math.random() * cities.length); 
    return cities[randomIndex].name;
  }

  /**
   * Método para obtener el clima de una ciudad aleatoria
   * @returns Un observable con la respuesta del clima
   */
  getWeather() {
    const city = this.getCity(); 
    const url = `${this.apiUrl}?q=${city}&appid=${this.token}&units=metric&lang=es`;  
    return this.#http.get<Tiempo>(url);  
  }
}
