import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiasApiService } from '../../../shared/services/noticias-api.service';
import { Noticia } from '../../../data';

@Component({
  selector: 'app-noticias-detalles',
  templateUrl: './noticias-detalles.component.html',
  styleUrl: './noticias-detalles.component.scss'
})
export class NoticiasDetallesComponent {}

//   readonly #router = inject(Router);
//   readonly #route = inject(ActivatedRoute);
//   readonly #apiNoticias = inject(NoticiasApiService);

//   uuid:string | null = this.#route.snapshot.fragment['uuid'];
  
//   noticia!:Noticia

//   constructor(){
//     this.noticia 
//   }

//   function loadElement() {
    
//   }
// }
