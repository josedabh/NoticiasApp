import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { merge } from 'rxjs';
import { APP_ROUTES } from 'src/app/app.routes';
import { USER_ROUTES } from '../user.routes';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
      FormsModule, 
      ReactiveFormsModule,
      MatInputModule, 
      MatButtonModule, 
      MatIconModule,
      MatSnackBarModule
    ],
})
export class LoginComponent {
  //Servicios
  readonly authService = inject(AuthService);
  readonly #router = inject(Router);
  readonly #snackBar = inject(MatSnackBar);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  errorMessage = signal('');
  hide = signal(true);

  constructor() {
    merge(this.loginForm.get('email')!.statusChanges, 
          this.loginForm.get('email')!.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (this.authService.login(email!, password!)) {
        this.#router.navigate([APP_ROUTES.USER, USER_ROUTES.INFOUSUARIO]);
      } else {
        this.errorMessage.set('Email o contraseña incorrectos');
        this.#snackBar.open('Email o contraseña incorrectos', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        });
      }
    }
  }

  updateErrorMessage() {
    const emailControl = this.loginForm.get('email')!;
    if (emailControl.hasError('required')) {
      this.errorMessage.set('El email es requerido');
    } else if (emailControl.hasError('email')) {
      this.errorMessage.set('El email no es válido');
    } else {
      this.errorMessage.set('');
    }
  }

  togglePassword(event: MouseEvent) {
    this.hide.update(value => !value);
    event.preventDefault();
  }
}