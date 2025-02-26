import { Component, inject } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { Tiempo } from 'src/app/shared/utils/tiempo';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
  imports: []
})
export class WeatherComponent {

  //Servicio
  readonly #weather = inject(WeatherService);

  //Variable tiempo
  tiempo!: Tiempo;

  //Para inicializar el tiempo
  ngOnInit(): void {
    this.getWeatherData();
  }

  // Obtener los datos del clima
  getWeatherData(): void {
    this.#weather.getWeather().subscribe({
      next: (data) => {
        this.tiempo = data;
      },

    });
  }
}
