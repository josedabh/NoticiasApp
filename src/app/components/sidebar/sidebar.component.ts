import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

interface Categories {
  value: string;
  nombre: string;
}

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [MatIconModule, MatSidenavModule]
})
export class SidebarComponent {
  @Input() isOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();

  categories: Categories[]= [
    { value: 'general', nombre: 'General' },
    { value: 'tech', nombre: 'Tecnología' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'politics', nombre: 'Política' },
    { value: 'business', nombre: 'Económicas' },
    { value: 'science', nombre: 'Científicas' },
    { value: 'entertainment', nombre: 'Entretenimiento' },
    { value: 'health', nombre: 'Salud' },
    { value: 'food', nombre: 'Comida' },
    { value: 'travel', nombre: 'Viajes' },
  ];
}
