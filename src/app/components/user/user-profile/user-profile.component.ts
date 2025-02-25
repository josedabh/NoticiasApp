import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AuthService } from '../../../shared/services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [MatCardModule,MatIconModule, 
    MatChipsModule, AsyncPipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  readonly #authService = inject(AuthService);
  user$ = this.#authService.currentUser$;
}