import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { USER_ROUTES } from '../user/user.routes';
import { APP_ROUTES } from 'src/app/app.routes';

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

  /**
   * Servicios
   */
  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);

  searchValue: string = '';

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  onSearch() {
    console.log('Buscando:', this.searchValue);
    // Lógica de búsqueda
  }

  onLogin() {
    this.#router.navigate([APP_ROUTES.USER,USER_ROUTES.LOGIN], { relativeTo: this.#route });
  }

  onRegister() {
    this.#router.navigate([APP_ROUTES.USER, USER_ROUTES.REGISTER], { relativeTo: this.#route });
  }
}
