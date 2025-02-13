import { Injectable } from '@angular/core';
import { Noticias } from '../../data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoNoticiasService {

  private listNoticias = new BehaviorSubject<Noticias[]>([
    {name:"prueba", autor:"Pepe"},
    {name:"prueba2", autor:"se"}
  ]);

  public noticias$ = this.listNoticias.asObservable();
}
