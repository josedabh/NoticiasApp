import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/app.routes';

import { USER_ROUTES } from '../user/user.routes';


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
  }

  onLogin() {
    this.#router.navigate([APP_ROUTES.USER,USER_ROUTES.LOGIN]);
  }

  onRegister() {
    this.#router.navigate([APP_ROUTES.USER, USER_ROUTES.REGISTER]);
  }
}
