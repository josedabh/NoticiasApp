import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/app.routes';

import { USER_ROUTES } from '../user/user.routes';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDividerModule } from '@angular/material/divider';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [MatIconModule, FormsModule, MatToolbarModule,
      MatMenuModule, MatDividerModule, AsyncPipe, MatButtonModule
    ],
})
export class NavbarComponent {
  //Output para el sidebar
  @Output() toggleSidebar = new EventEmitter<void>();

  //Servicio
  readonly #router = inject(Router);
  readonly #authService = inject(AuthService);

  //Buscador
  searchValue: string = '';
  currentUser$ = this.#authService.currentUser$;

  /**
   * Método para emitir el evento de toggle del sidebar
   */
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  /**
   * Método para buscar noticias
   */
  onSearch() {
    console.log('Buscando:', this.searchValue);
  }

  /**
   * Método para navegar a la página de login
   */
  onLogin() {
    this.#router.navigate([APP_ROUTES.USER,USER_ROUTES.LOGIN]);
  }

  /**
   * Método para navegar a la página de registro
    */
  onRegister() {
    this.#router.navigate([APP_ROUTES.USER, USER_ROUTES.REGISTER]);
  }

  /**
   * Método para navegar a la página de información del usuario
   */
  onInfoUser(){
    this.#router.navigate([APP_ROUTES.USER, USER_ROUTES.INFOUSUARIO]);
  }

  /**
   * Método para cerrar sesión
   */
  onLogout() {
    this.#authService.logout();
    this.#router.navigate([APP_ROUTES.NOTICIAS]
    );
  }

  /**
   * Método para navegar a la página principal
   */
  goPagPrincipal() {
    this.#router.navigate([APP_ROUTES.NOTICIAS]);
  }
}
