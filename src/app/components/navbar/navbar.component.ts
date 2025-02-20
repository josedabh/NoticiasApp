import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [MatIconModule, FormsModule, MatToolbarModule,
      MatMenuModule
    ],
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  searchValue: string = '';

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  onSearch() {
    console.log('Buscando:', this.searchValue);
    // Lógica de búsqueda
  }

  onLogin() {
    console.log('Iniciar Sesión');
    // Lógica de login
  }

  onRegister() {
    console.log('Registrarse');
    // Lógica de registro
  }
}
