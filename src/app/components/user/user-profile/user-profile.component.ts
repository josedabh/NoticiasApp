import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  readonly #authService = inject(AuthService);
  user$ = this.#authService.currentUser$;
}