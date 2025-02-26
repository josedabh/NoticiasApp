import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CATEGORIES, Category } from 'src/app/shared/utils/data';

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

  categories:Category[] = CATEGORIES;

  /**
   * Método para seleccionar categoría y emitir evento
   */
  selectCategory(category: string) {
    this.#router.navigate(['/categoria', category]);
    this.closeSidebar.emit();
  }
  
}
