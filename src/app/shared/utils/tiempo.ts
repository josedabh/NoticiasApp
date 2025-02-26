export interface Tiempo {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Principal; 
  visibility: number;  
  wind: Viento;
  clouds: Nubes;
  dt: number;
  sys: Sys;
  timezone: number;  
  id: number;
  name: string; 
  cod: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Principal {
  temp: number; 
  feels_like: number; 
  temp_min: number;
  temp_max: number; 
  humidity: number;
  sea_level: number; 
  grnd_level: number; 
}

export interface Viento {
  speed: number;  
  deg: number;  
}

export interface Nubes {
  all: number; 
}

export interface Sys {
  type: number; 
  id: number;
  country: string; 
  sunrise: number; 
  sunset: number;
}
