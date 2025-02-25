import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/app.routes';
import { AuthService } from 'src/app/shared/services/auth.service';

export const authUserGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Si el usuario está autenticado, redirige a noticias
  if (authService.getCurrentUser()) {
    router.navigate([APP_ROUTES.NOTICIAS]);
    return false;
  }

  // Si no está autenticado, permite acceder a login/register
  return true;
};
