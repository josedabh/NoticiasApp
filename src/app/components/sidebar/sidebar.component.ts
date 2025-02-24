import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Categories {
  value: string;
  nombre: string;
}

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [MatIconModule]
})
export class SidebarComponent {
  // Input para controlar si el sidebar está abierto
  @Input() isOpen = false;
  // Output para cerrar el sidebar
  @Output() closeSidebar = new EventEmitter<void>();
  // Output para seleccionar categoria
  @Output() categorySelected = new EventEmitter<string>();

  // Array con las categorías disponibles
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

  /**
   * Método para seleccionar categoría y emitir evento
   */
  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
  
}
