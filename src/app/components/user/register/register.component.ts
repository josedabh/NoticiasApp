import { Component, inject, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { APP_ROUTES } from 'src/app/app.routes';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/utils/data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    RouterLink
  ],
})
export class RegisterComponent {
  //Servicios
  readonly authService = inject(AuthService);
  readonly #router = inject(Router);

  // Controles del formulario
  nombre = new FormControl('', [Validators.required]);
  apellidos = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required]);
  categorias = new FormControl<string[]>([], [Validators.required]);
  newsletter = new FormControl(false);

  // Signals
  #hidePassword = signal(true);
  #hideConfirmPassword = signal(true);
  #errorMessage = signal('');

  onSubmit() {
    if (this.isFormValid()) {
      const newUser: User = {
        id: Math.floor(Math.random() * 1000),
        username: `${this.nombre.value} ${this.apellidos.value}`,
        firstName: this.nombre.value!,
        lastName: this.apellidos.value!,
        email: this.email.value!,
        password: this.password.value!,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${this.email.value}`,
        categories: this.categorias.value!,
        newsletter: this.newsletter.value!
      };

      if (this.authService.register(newUser)) {
        this.#router.navigate([APP_ROUTES.NOTICIAS]);
      }
    }
  }

  isFormValid(): boolean {
    return (
      this.nombre.valid &&
      this.apellidos.valid &&
      this.email.valid &&
      this.password.valid &&
      this.confirmPassword.valid &&
      this.categorias.valid &&
      this.password.value === this.confirmPassword.value
    );
  }

  hidePassword() {
    return this.#hidePassword();
  }

  hideConfirmPassword() {
    return this.#hideConfirmPassword();
  }

  errorMessage() {
    return this.#errorMessage();
  }

  togglePassword(event: Event) {
    event.preventDefault();
    this.#hidePassword.update(value => !value);
  }

  toggleConfirmPassword(event: Event) {
    event.preventDefault();
    this.#hideConfirmPassword.update(value => !value);
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.#errorMessage.set('El email es requerido');
    } else if (this.email.hasError('email')) {
      this.#errorMessage.set('El email no es válido');
    } else {
      this.#errorMessage.set('');
    }
  }
}