import { Component, inject } from '@angular/core';
import { InfoNoticiasService } from '../../shared/services/info-noticias.service';
import { Noticias } from '../../data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  noticias!:Noticias[];
  news = inject(InfoNoticiasService);

  ngOnInit(): void {
    this.news.noticias
  }
}
