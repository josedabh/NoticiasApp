import { Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [FormsModule, ReactiveFormsModule,
        MatInputModule, MatButtonModule, MatIconModule,
        MatCheckboxModule, MatSelectModule, RouterLink
    ],
})
export class RegisterComponent {
    nombre = new FormControl('', [Validators.required]);
    apellidos = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    confirmPassword = new FormControl('', [Validators.required]);
    categorias = new FormControl<string[]>([], [Validators.required]);
    newsletter = new FormControl(false);
  
    #hidePassword = signal(true);
    #hideConfirmPassword = signal(true);
    #errorMessage = signal('');
  
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
  
    onSubmit() {
      if (this.isFormValid()) {
        const userData = {
          nombre: this.nombre.value,
          apellidos: this.apellidos.value,
          email: this.email.value,
          password: this.password.value,
          categorias: this.categorias.value,
          newsletter: this.newsletter.value
        };
        console.log('Datos del usuario:', userData);
        // Aquí iría la lógica para enviar los datos al servidor
      }
    }
}
