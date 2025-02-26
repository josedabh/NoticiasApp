import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AuthService } from '../../../shared/services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/app.routes';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [MatCardModule,MatIconModule, 
    MatChipsModule, AsyncPipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  //Servicios
  readonly #authService = inject(AuthService);
  readonly #router = inject(Router);

  user$ = this.#authService.currentUser$;

  /**
   * Vuelve a la pagina principal
   */
  goBack(){
    this.#router.navigate([APP_ROUTES.NOTICIAS])
  }
}