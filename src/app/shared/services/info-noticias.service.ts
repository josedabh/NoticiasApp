import { Injectable } from '@angular/core';
import { Noticias } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class InfoNoticiasService {

  noticias:Noticias[] = [
    {name:"prueba", autor:"Pepe"},
    {name:"prueba2", autor:"se"}
  ]
}
