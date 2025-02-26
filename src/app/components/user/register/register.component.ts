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
import { CATEGORIES, User } from 'src/app/shared/utils/data';

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

  //Constante
  readonly categories = CATEGORIES;

  // Controles del formulario
  nombre = new FormControl('', [Validators.required]);
  apellidos = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required]);
  categorias = new FormControl<string[]>([], []);
  newsletter = new FormControl(false);

  // Signals
  #hidePassword = signal(true);
  #hideConfirmPassword = signal(true);
  #errorMessage = signal('');

  /**
   * Maneja el envío del formulario de registro
   * Valida el formulario, crea un nuevo usuario y lo registra
   * Si el registro es exitoso, navega a la página de noticias
   */
  onSubmit() {
    if (this.isFormValid()) {
      // Convertir las categorías seleccionadas a sus nombres
      const categoriasSeleccionadas = this.categorias.value?.map(categoriaValue => {
        const categoria = CATEGORIES.find(cat => cat.value === categoriaValue);
        return categoria ? categoria.name : categoriaValue;
      }) || [];

      const newUser: User = {
        id: Math.floor(Math.random() * 1000),
        firstName: this.nombre.value!,
        lastName: this.apellidos.value!,
        email: this.email.value!,
        password: this.password.value!,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${this.email.value}`,
        categories: categoriasSeleccionadas, 
        newsletter: this.newsletter.value!
      };

      if (this.authService.register(newUser)) {
        this.#router.navigate([APP_ROUTES.NOTICIAS]);
      }
    }
  }

  /**
   * Valida si el formulario cumple con todos los requisitos
   * @returns boolean - true si todos los campos son válidos y las contraseñas coinciden
   */
  isFormValid(): boolean {
    return (
      this.nombre.valid &&
      this.apellidos.valid &&
      this.email.valid &&
      this.password.valid &&
      this.confirmPassword.valid &&
      this.password.value === this.confirmPassword.value
    );
  }

  /**
   * Obtiene el estado actual de visibilidad de la contraseña
   * @returns boolean - true si la contraseña está oculta
   */
  hidePassword() {
    return this.#hidePassword();
  }

  /**
   * Obtiene el estado actual de visibilidad de la confirmación de contraseña
   * @returns boolean - true si la confirmación de contraseña está oculta
   */
  hideConfirmPassword() {
    return this.#hideConfirmPassword();
  }

  /**
   * Obtiene el mensaje de error actual
   * @returns string - mensaje de error actual o cadena vacía
   */
  errorMessage() {
    return this.#errorMessage();
  }

  /**
   * Alterna la visibilidad de la contraseña
   * @param event - Evento del botón de visibilidad
   */
  togglePassword(event: Event) {
    event.preventDefault();
    this.#hidePassword.update(value => !value);
  }

  /**
   * Alterna la visibilidad de la confirmación de contraseña
   * @param event - Evento del botón de visibilidad
   */
  toggleConfirmPassword(event: Event) {
    event.preventDefault();
    this.#hideConfirmPassword.update(value => !value);
  }

  /**
   * Actualiza el mensaje de error basado en el estado del campo email
   * Muestra diferentes mensajes según el tipo de error
   */
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.#errorMessage.set('El email es requerido');
    } else if (this.email.hasError('email')) {
      this.#errorMessage.set('El email no es válido');
    } else {
      this.#errorMessage.set('');
    }
  }

  /**
   * Vuelve a la pagina principal
   */
  goBack(){
    this.#router.navigate([APP_ROUTES.NOTICIAS]);
  }
}