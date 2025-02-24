import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

/**
 * Constante para las rutas de los usuarios
 */
export const USER_ROUTES = {
    LOGIN: 'login',
    REGISTER: 'register',
    INFOUSUARIO: 'info-usuario'
}
/**
 * Constante donde está los componentes en la ruta de los usuarios
 */
export const userRoutes: Routes = [
    {path: '', redirectTo: USER_ROUTES.LOGIN, pathMatch: 'full'},
    {path: USER_ROUTES.LOGIN, component: LoginComponent},
    {path: USER_ROUTES.REGISTER, component: RegisterComponent},
]